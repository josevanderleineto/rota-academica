-- Esquema de Banco de Dados PostgreSQL para Rota Acadêmica

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

CREATE INDEX IF NOT EXISTS idx_budget_requests_email ON budget_requests(email);
CREATE INDEX IF NOT EXISTS idx_budget_requests_created_at ON budget_requests(created_at DESC);
