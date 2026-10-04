# Resposta:

Eu primeiro verificaria no DevTools como está o console, quais erros aparecem e se estão em loop. Também verificaria no terminal que está rodando a aplicação para verificar se pode haver algum erro de travamento no banco de dados. No Network, verificaria se há alguma imagem pesada, se há demora do servidor ou se ela está aguardando algo.

Agora, duas possíveis soluções:
1. Comprimir imagens para formatos mais leves e renderizações independentes, com isso evitaria carregamentos longos e reduziria a dependência da API.
2. Lazy Loading: fazer carregamentos sob demanda, ou seja, carregar apenas o que o usuário precisa, evitando carregamentos extras e deixando para quando o usuário for autenticado.