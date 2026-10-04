# Desafio 5

## Como rodar o projeto

### Pré-requisitos
* [Node.js](https://nodejs.org/)
* Gerenciador de pacotes `npm`

### Passo a passo
1. **Instale as dependências:**
```bash
npm install
```

2. **Inicie o servidor em modo de desenvolvimento:**
```bash
npm run start:dev
```

3. **A aplicação estará rodando em:**
http://localhost:3000

---

## Organização dos arquivos
Dividi os arquivos utilizados para a criação das rotas em 4 partes, todas dentro de `./src/users`:

1. `users.interface.ts`:
Este arquivo fica dentro de `.src/users/interface`; ele é responsável por criar a interface de **User**, que será exportada e utilizada pelo `users.service` e pelo `users.controller`. Resolvi separar a interface para garantir mais segurança e manter o melhor padrão, caso fosse um sistema maior.

2. `users.controller.ts`:
Este arquivo é responsável pelas rotas `POST` e `GET` do desafio. A rota **POST** é responsável pelo cadastro de novos usuários, recebendo apenas **nome e e-mail** e inserindo o ID automaticamente. A rota **GET** é responsável por listar todos os usuários criados. Temos então os endpoints:

| Método | Rota | Autenticação | Descrição | Retorno |
|---|---|---|---|---|
| `POST` | `/users` | Livre | Realiza o cadastro de novos usuários (`nome` e `email`) | Retorna o objeto do usuário criado com ID gerado (Status 201) |
| `GET` | `/users` | Livre | Lista todos os usuários criados | Retorna um array de usuários em JSON (Status 200) |

**OBS:**
Testes realizados com **Thunder Client**.

As rotas foram testadas utilizando o Thunder Client, validando tanto o payload enviado quanto os códigos de status e os dados retornados pela API:

2.1. **POST** http://localhost:3000/users

- Payload enviado:

```JSON
{
  "name": "joao",
  "email": "joao@email.com"
}
```

- Resposta obtida:

```JSON
Status: 201 Created
Size: 47 Bytes
Time: 7 ms
{
  "id": 3,
  "name": "joao",
  "email": "joao@email.com"
}
```

2.2. **GET** http://localhost:3000/users

- Resposta obtida:

```JSON
Status: 200 OK
Size: 145 Bytes
Time: 9 ms
[
  {
    "id": 1,
    "name": "Ana",
    "email": "ana@email.com"
  },
  {
    "id": 2,
    "name": "Pedro",
    "email": "pedro@email.com"
  },
  {
    "id": 3,
    "name": "joao",
    "email": "joao@email.com"
  }
]
```

O teste demonstra que o usuário enviado através do `POST /users` foi criado com ID automático e posteriormente retornado corretamente pela rota `GET /users`.

3. `users.module.ts`:
Este arquivo é responsável por informar ao módulo pai do projeto, no caso `app.module.ts`, os `controllers` e `providers` criados. No nosso caso, o controller é **UsersController** e o provider é **UsersService**.

4. `users.service.ts`:
Este arquivo é responsável pela parte lógica da API. Nele é criado o array **users** com dois usuários já inseridos, que vai sendo alterado conforme a rota `POST` é chamada. Também há a função **createUser**, responsável pela criação de novos usuários, recebendo como parâmetros o nome e o e-mail e adicionando um usuário ao array **users**. Por fim, temos a função **listUsers**, responsável por listar todos os usuários cadastrados.

**Obs**: Prefiro manter as regras de negócio sempre fora do framework, pois, se for necessário trocar a tecnologia, não teremos problemas e o framework ficará responsável apenas pelas rotas.

# E, por fim, a organização das pastas ficou:
```text
Desafio5/
├── readme.md
├── desafio5/
│   ├── src/
│   │   ├── users/
│   │   │   ├── interface/
│   │   │   │   └── users.interface.ts      # Interface padrão do usuário, reutilizada por todos os arquivos
│   │   │   │
│   │   │   ├── users.controller.ts         # Rotas de criação e listagem de usuários
│   │   │   ├── users.module.ts             # Informação para o app.module.ts sobre os controllers e providers de users
│   │   │   └── users.service.ts            # Lógica de cadastro e listagem de usuários
│   │   └── app.module.ts                   # Módulo primário do Nest
```

Os demais arquivos e as pastas `node_modules` e `test` não foram informados na estrutura das pastas porque não foram alterados.
