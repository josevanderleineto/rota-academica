export const CONTACT_CONFIG = {
  // Número do WhatsApp oficial com DDD (Código do país 55 + DDD + número)
  // Exemplo: 5571999999999
  whatsappNumber: '5571984498113',
  
  // Exibição formatada para textos
  whatsappFormatted: '(71) 98449-8113',
  
  // E-mail de atendimento
  email: 'contato@rotaacademica.com.br',
  
  // Mensagem padrão ao clicar no botão de WhatsApp geral
  defaultWhatsappMessage: 'Olá! Vim pelo site da Rota Acadêmica e gostaria de informações sobre orçamento e serviços acadêmicos.',
  
  // Função helper para gerar o link wa.me
  getWhatsappUrl: (customMessage?: string) => {
    const msg = customMessage || CONTACT_CONFIG.defaultWhatsappMessage;
    return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
};
