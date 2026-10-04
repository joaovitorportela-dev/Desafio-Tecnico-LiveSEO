# Para rodar o projeto:
Instale no VS Code a extensão **LIVE SERVER** --> Abra a pasta que contém o .html e o .css --> Clique no canto inferior direito em Go Live

---

# Organização do Projeto:

## PARTE HTML:

Para a parte HTML utilizei a tag `<header>` para o topo do projeto, a tag `<main>` para a parte central e a tag `<footer>` para a parte inferior. Na minha tag `<main>`, dentro dela, utilizei uma tag `<form>` para montar o nosso formulário de cadastro e uma tag `<fieldset>` para montar uma borda com legenda e agrupar todos os itens do nosso formulário dentro dele. Nele, atualmente, contém:
- Campo para nome, onde ele é do tipo `required` para não aceitar que ele esteja vazio
- Campo para email, com `type="email"`, para solicitar a parte do **@** obrigatoriamente e `required` para também não aceitar como campo vazio
- Campo para senha, com `type="password"`, para não mostrar a senha e com um regex para que ela obrigatoriamente contenha uma letra maiúscula e uma minúscula e possa aceitar números também; ela também é do tipo `required`
- Botão para cadastrar o usuário

Foi vinculado também nos `<input>` seus respectivos `<label>`, facilitando a acessibilidade e não sendo necessário clicar diretamente no campo de input

## PARTE CSS:

Nesta parte optei por trabalhar com as cores baseadas nas cores do site da Live SEO, com preto, laranja e branco. As tags de estilização são feitas de duas formas: umas mais genéricas, como `body` e `main`, que servem para tudo que estiver dentro, e outras mais específicas, como `.formulario` e `#button`. Utilizo também `#button:hover` para configurar que, ao passar o mouse sobre o botão, ele altere a cor. E, para a parte de organização do layout, utilizei `flex` em 3 componentes:

1. No `body`, para estruturar o header, o conteúdo central do formulário e o footer
2. No `main`, utilizei para centralizar o formulário na tela
3. Na classe `.formulario`, utilizei junto com `gap` para manter os campos alinhados e com espaçamento consistente