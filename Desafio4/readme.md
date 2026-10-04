# Para rodar o projeto: 

Recomendo a utilização do site: 

[SQL Fiddle (MySQL)](https://sqlfiddle.com/mysql/online-compiler)

Com ele é possivel inserir a **parte 1** informada abaixo e após ela a **parte 2** e **parte 3**, mas atenção o site consegue executar apenas uma query por vez!

---

# Explicação das queries
1. Primeiro utilizei:

```sql
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    created_at DATE DEFAULT(CURRENT_DATE)
);

INSERT INTO users(name, email, created_at) VALUES
    ('Ana', 'ana@email.com', '2024-01-01'),
    ('Pedro', 'pedro@email.com', '2024-02-01'),
    ('Maria', 'maria@email.com', '2024-02-15');
```

Para criação e inserção dos valores, assim como no enunciado.

2. Query para listar todos os usuários ordenados pela data de criação

```sql
SELECT * FROM users ORDER BY created_at DESC;
```

Nessa query faço um SELECT total da tabela usuários e ordeno ela de forma decrescente com base em `created_at`, tendo o seguinte retorno:

```text
id	name	email	         created_at
3	Maria	maria@email.com	 2024-02-15
2	Pedro	pedro@email.com	 2024-02-01
1	Ana	    ana@email.com	 2024-01-01
```

3. Query para contar quantos usuários foram criados por mês
```sql
SELECT 
	DATE_FORMAT(created_at, '%Y-%m') AS ano_mes,
    COUNT(*) AS total_usuarios
FROM users
GROUP BY DATE_FORMAT(created_at, '%Y-%m')
```

Nesta query eu utilizei dentro do SELECT as funções `DATE_FORMAT` e `COUNT(*)`. O `DATE_FORMAT` lê a coluna `created_at` da tabela users e coleta o ano e mês de todos os usuários, salvando na coluna `ano_mes`. Depois disso, é feito um agrupamento com base no mês e no ano utilizando o `GROUP BY`, para agrupar os valores que tiverem ano e mês iguais. Só então o `COUNT(*)` atua, contando os usuários, somando 1 por linha e atribuindo a coluna de nome `total_usuarios`. Este é o retorno obtido:

```text
ano_mes	        total_usuarios
2024-01	        1
2024-02     	2
```