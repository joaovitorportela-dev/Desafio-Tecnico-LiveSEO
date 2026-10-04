// Interface para receber e construir o usuário
interface User{
    id: number;
    name: string;
    age: number;
}

// Usuários que foram informados no enunciado
const users = [
{ id: 1, name: "Ana", age: 25 },
{ id: 2, name: "Pedro", age: 30 },
{ id: 3, name: "Maria", age: 22 },
];

// Filtro inicial de idade > 23 anos retornando o nome dos usuários
function filtroIdade23(users: User[]): string[]{
   return users.filter(user => user.age > 23).map(user => user.name)
};

// Teste da parte 1 do desafio
const resultado = filtroIdade23(users);
console.log(resultado);

// Tipo utilitário específico para deixar a função receber os campos genéricos.
// Ele extrai o valor da coluna do objeto aceitando apenas tipo number
type NumberKey<T> = {
    [K in keyof T]: T[K]extends number ? K : never;
}[keyof T]

// Filtro de função genérica recebe uma lista qualquer, uma coluna qualquer, mas que tenha valor number especificamente, e o valor que vai ser procurado, no caso o number
// Retorna sempre todos que forem maiores que o valor informado no parâmetro
function filtroGeral<T>(lista: T[], coluna: NumberKey<T>, valor: number): T[]{
    return lista.filter(item => (item[coluna] as number) > valor);
};

// Teste da parte 2 do desafio
console.log(filtroGeral(users, "id" ,1));
console.log(filtroGeral(users, "age" ,20));
// console.log(filtroGeral(users, "name" ,1));

// Retornos (respectivos aos 3 últimos console.log):
//  [
//    { id: 1, name: 'Ana', age: 25 },
//    { id: 2, name: 'Pedro', age: 30 },
//    { id: 3, name: 'Maria', age: 22 }
//  ]

//  [
//    { id: 2, name: 'Pedro', age: 30 },
//    { id: 3, name: 'Maria', age: 22 }
//  ]
//  [
//   { id: 1, name: 'Ana', age: 25 },
//   { id: 2, name: 'Pedro', age: 30 },   
//   { id: 3, name: 'Maria', age: 22 }
//  ]
//  []
