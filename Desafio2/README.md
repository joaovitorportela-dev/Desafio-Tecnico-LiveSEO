# Explicação da arquitetura

## Primeiro, para rodar o projeto: 
```bash
npm install
npm run dev
```

--- 

## Organização dos Componentes:
- Eles foram separados em 4 partes:
1. `TodoFilter.vue`

Responsável pela parte de **filtro** das tarefas, tendo 3 possíveis estados:
`todas`, `pendentes`, `concluídas`.
Entretanto, ele apenas avisa ao componente pai `TodoList.vue` qual botão o usuário apertou, e toda troca é feita pelo componente pai utilizando `computed`, que será explicado mais à frente por que o uso é necessário

2. `TodoForm.vue`

Responsável pela parte do **formulário** das tarefas, sendo a parte onde o usuário tem o campo para digitar a tarefa e adicioná-la à sua lista. Nela é utilizado `ref`, que também será explicado mais à frente, e ela apenas envia o que foi digitado para o componente pai `TodoList.vue`, filtrando se o campo não está vazio e sempre limpando o campo após o envio

3. `TodoItem.vue`

Responsável por cada tarefa criada de modo individual. A ideia é que ele já saia como uma tag `<li>`, então no componente pai `TodoList.vue` é criado o `<TodoItem/>` já dentro de um `<ul>`. Nele, temos a parte de marcar e desmarcar a tarefa como concluída e a parte de remover a tarefa, mas nada da parte lógica é feita no componente, e tudo é enviado para o pai, onde é tratado toda a parte lógica

4. `TodoList.vue`

Componente pai do projeto, onde utilizamos `ref` e `computed`, e chamamos todos os componentes filhos além de tratar toda a lógica de:
- Inclusão
- Remoção
- Conclusão
- Filtro
de todas as tarefas, evitando assim que a lógica fique nos componentes filhos


Prezei em separar meu projeto em 4 partes diferentes para garantir a facilidade de, caso seja necessário, posteriormente alterar alguma parte visual da interface, e garantir a lógica em um local só por segurança, deixando os componentes filhos sem grandes responsabilidades

Obs: O Css foi feito todo no arquivo `style.css`, mas seria possivel fazer ele inteiro dentro de cada arquivo `.vue` utilizando `<style scoped>`, mas optei por manter ele todo em somente um arquivo pois seriam poucas implementações visuais

---

## Escolhas das primitivas da Composition API:

1. **`ref`**:

Escolhi `ref` por conta de sua reatividade para valores primitivos, sendo utilizado em:
- `TodoForm.vue`, para o campo do input de texto do usuário, onde ao informar a tarefa ela era atualizada conforme o usuário digitava;
- `TodoList.vue`, para criarmos um array inicial vazio para armazenamento de todas as tarefas e para a criação do filtro inicial com todas para poder ser alterado e atualizado conforme clicado pelo usuário

Obs.: Para o tratamento do array `tarefas`, mesmo sendo um array, escolhi usar o **ref** em vez de **reactive**, devido à reatribuição e reatividade. Com `reactive`, não conseguiria reatribuir o resultado do método `filter` de forma fácil, como é feito com o `ref` utilizando `.value`

2. **`computed`**:

Escolhi `computed` por conta dos filtros: ao serem selecionados, o `computed` já fazia as alterações e atualizava o array mostrado ao usuário sem perder o array original que continha todas as tarefas adicionadas, ajudando assim na performance
