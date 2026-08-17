import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { CONTACT_CONFIG } from '@/data/contactConfig';
import { saveBudgetToDatabase } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = (formData.get('name') as string) || 'Não informado';
    const email = (formData.get('email') as string) || 'Não informado';
    const whatsapp = (formData.get('whatsapp') as string) || 'Não informado';
    const course = (formData.get('course') as string) || 'Não informado';
    const workType = (formData.get('workType') as string) || 'Não informado';
    const service = (formData.get('service') as string) || 'Não informado';
    const deadline = (formData.get('deadline') as string) || 'Não informado';
    const message = (formData.get('message') as string) || 'Nenhuma mensagem adicional.';

    const file = formData.get('file') as File | null;

    // Prepara o anexo se existir
    const attachments: Array<{ filename: string; content: Buffer }> = [];
    if (file && file.size > 0 && file.name) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: file.name,
        content: buffer
      });
    }

    // Tenta salvar os dados e metadados no banco PostgreSQL se DATABASE_URL estiver configurada
    await saveBudgetToDatabase({
      name,
      email,
      whatsapp,
      course,
      workType,
      service,
      deadline,
      fileName: file?.name,
      fileSizeBytes: file?.size,
      message
    });

    const recipientEmail = process.env.CONTACT_EMAIL || CONTACT_CONFIG.email;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE !== 'false';
    const smtpUser = process.env.SMTP_USER || recipientEmail;
    const smtpPass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, '') : undefined;

    // HTML do e-mail
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="background-color: #0f172a; color: #ffffff; padding: 16px 20px; border-radius: 8px; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">Nova Solicitação de Orçamento</h2>
          <p style="margin: 4px 0 0 0; color: #38bdf8; font-size: 14px;">Rota Acadêmica</p>
        </div>

        <div style="padding: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #334155; width: 40%;">Nome do Cliente:</td>
              <td style="padding: 10px; color: #0f172a;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #334155;">E-mail:</td>
              <td style="padding: 10px; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #334155;">WhatsApp:</td>
              <td style="padding: 10px; color: #0f172a;"><a href="https://wa.me/55${whatsapp.replace(/\D/g, '')}">${whatsapp}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #334155;">Curso / Faculdade:</td>
              <td style="padding: 10px; color: #0f172a;">${course}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #334155;">Tipo de Trabalho:</td>
              <td style="padding: 10px; color: #0f172a;">${workType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #334155;">Serviço Desejado:</td>
              <td style="padding: 10px; color: #0f172a;">${service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #334155;">Prazo Solicitado:</td>
              <td style="padding: 10px; color: #0f172a;">${deadline}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px; font-weight: bold; color: #334155;">Arquivo Anexo:</td>
              <td style="padding: 10px; color: #0f172a;">${attachments.length > 0 ? `<strong>📎 ${attachments[0].filename}</strong> (Anexado neste e-mail)` : 'Nenhum arquivo enviado'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #1e40af; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #0f172a;">Mensagem do Cliente:</h4>
            <p style="margin: 0; color: #475569; white-space: pre-wrap;">${message}</p>
          </div>
        </div>

        <div style="text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
          Solicitação enviada através do site Rota Acadêmica em ${new Date().toLocaleString('pt-BR')}
        </div>
      </div>
    `;

    // Se as credenciais de SMTP (senha de aplicativo) estiverem configuradas no .env.local
    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        await transporter.sendMail({
          from: `"Rota Acadêmica" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `📋 Novo Orçamento: ${name} (${service})`,
          html: htmlContent,
          attachments
        });

        return NextResponse.json({
          success: true,
          emailSent: true,
          message: 'Solicitação e arquivo enviados com sucesso para o e-mail!'
        });
      } catch (emailErr: any) {
        console.error('⚠️ Erro ao disparar e-mail via Nodemailer (Verifique SMTP_PASS no .env.local):', emailErr.message || emailErr);
        return NextResponse.json({
          success: true,
          emailSent: false,
          message: 'Solicitação e anexo registrados no sistema com sucesso!'
        });
      }
    } else {
      // Caso a senha de aplicativo ainda não tenha sido inserida no .env.local
      console.log('--- [ROTA ACADÊMICA] Nova Solicitação Recebida ---');
      console.log({ name, email, whatsapp, course, workType, service, deadline, message, attachmentName: file?.name });
      console.log('📌 Nota: Insira SMTP_PASS no arquivo .env.local para disparo de e-mail via Nodemailer.');

      return NextResponse.json({
        success: true,
        mode: 'logged',
        message: 'Solicitação processada com sucesso!'
      });
    }
  } catch (error: any) {
    console.error('Erro no processamento da API de orçamento:', error);
    return NextResponse.json(
      { success: false, error: 'Ocorreu um erro ao processar o envio do formulário.' },
      { status: 500 }
    );
  }
}
