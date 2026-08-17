import { Pool } from 'pg';

let pool: Pool | null = null;

export function getDbPool(): Pool | null {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  if (!pool) {
    pool = new Pool({
      connectionString,
      ssl: connectionString.includes('sslmode=require') || process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false
    });
  }

  return pool;
}

export async function saveBudgetToDatabase(budgetData: {
  name: string;
  email: string;
  whatsapp: string;
  course: string;
  workType: string;
  service: string;
  deadline: string;
  fileName?: string | null;
  fileSizeBytes?: number | null;
  message: string;
}) {
  const dbPool = getDbPool();

  if (!dbPool) {
    console.log('📌 Nota: DATABASE_URL não definida. Para salvar orçamentos no PostgreSQL, insira DATABASE_URL em .env.local');
    return null;
  }

  try {
    // Garante que a tabela exista antes de inserir
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS budget_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(50) NOT NULL,
        course VARCHAR(255),
        work_type VARCHAR(100) NOT NULL,
        service VARCHAR(255) NOT NULL,
        deadline VARCHAR(100) NOT NULL,
        file_name VARCHAR(255),
        file_size_bytes INTEGER,
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    const queryText = `
      INSERT INTO budget_requests 
        (name, email, whatsapp, course, work_type, service, deadline, file_name, file_size_bytes, message)
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id, created_at;
    `;

    const values = [
      budgetData.name,
      budgetData.email,
      budgetData.whatsapp,
      budgetData.course,
      budgetData.workType,
      budgetData.service,
      budgetData.deadline,
      budgetData.fileName || null,
      budgetData.fileSizeBytes || null,
      budgetData.message
    ];

    const res = await dbPool.query(queryText, values);
    console.log('✅ Orçamento salvo com sucesso no PostgreSQL! ID:', res.rows[0].id);
    return res.rows[0];
  } catch (error) {
    console.error('Erro ao salvar orçamento no PostgreSQL:', error);
    return null;
  }
}
