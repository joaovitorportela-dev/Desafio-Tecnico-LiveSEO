# Resposta:
Eu separaria a pasta do projeto em duas: a `frontend`, contendo toda a parte do **Vue3**, e a `backend`, contendo toda a parte do **NestJS**.

## **Frontend:**

### Estrutura de pastas:
```
/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   ├── modal/
│   │   ├── services/
│   │   ├── types/
│   │   ├── app.vue
│   │   └── main.ts
│   ├── dist/
│   └── .gitignore
 README.md
```

### Motivo da Organização:
- **public**: Feito separadamente, pois contém apenas os arquivos estáticos da aplicação
- **assets**: Contém as imagens e ícones da nossa aplicação
- **components**: Responsável por conteúdos reutilizáveis, como cards, botões e inputs
- **views**: Páginas da aplicação
- **router**: Configuração das rotas de navegação das telas
- **services**: Comunicação do HTTP com a API
- **types**: Definição de interfaces do TypeScript
- **dist**: Pasta para um build estático do frontend e poder enviar para o backend, caso necessário

## **Backend:**

### Estrutura de pastas:

```
/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── users/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   └── users.module.ts
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── .gitignore
 README.md
```

### Motivo da Organização:
- **config**: Parte que contém toda a configuração da API de banco de dados
- **users**: Responsável pela gestão do usuário
- **auth**: Toda a parte de segurança da API, principalmente a parte de validação e JWT
- **.controller.ts**: Arquivos que contêm todas as rotas HTTP
- **.service.ts**: Arquivos que contêm toda a lógica e funções do backend
- **.module.ts**: Arquivos que informam quais os controllers e providers
