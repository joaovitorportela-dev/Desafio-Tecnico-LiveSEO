-- 4. Banco de Dados (MySQL / SQL)

-- Considere uma tabela chamada users:

-- id name email created_at

-- 1 Ana ana@email.com 2024-01-01
-- 2 Pedro pedro@email.com 2024-02-01
-- 3 Maria maria@email.com 2024-02-15

-- Escreva queries SQL para:
-- ● Listar todos os usuários ordenados pela data de criação (do mais recente para o
-- mais antigo).
-- ● (Bônus) Contar quantos usuários foram criados por mês.
-- Explique o funcionamento das suas queries.

-- Criação da tabela users
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY, -- utilizado AUTO_INCREMENT para adicionar automaticamente o valor
    name VARCHAR(50) NOT NULL, -- validado com NOT NULL para evitar campos vazios
    email VARCHAR(50) NOT NULL UNIQUE, -- validado com NOT NULL para evitar campos vazios e UNIQUE para evitar duplicidade de emails
    created_at DATE DEFAULT(CURRENT_DATE) -- utilizado DATE devido à tabela base do enunciado, mas o correto seria TIMESTAMP ou DATETIME para pegar também a hora
);

-- Inserção dos valores, sem necessidade do id, pois ele é adicionado automaticamente
INSERT INTO users(name, email, created_at) VALUES
    ('Ana', 'ana@email.com', '2024-01-01'),
    ('Pedro', 'pedro@email.com', '2024-02-01'),
    ('Maria', 'maria@email.com', '2024-02-15');

-- Query para o filtro de data de criação
SELECT * FROM users ORDER BY created_at DESC;


-- Query para a pergunta bônus
SELECT 
	DATE_FORMAT(created_at, '%Y-%m') AS ano_mes, -- filtra pelo formato da data Ano-Mês e chama a coluna final de ano_mes
    COUNT(*) AS total_usuarios -- conta todos os usuários do mês e salva o valor na variável total_usuarios
FROM users
GROUP BY DATE_FORMAT(created_at, '%Y-%m') -- agrupa os usuários com base no seu ano e mês de criação