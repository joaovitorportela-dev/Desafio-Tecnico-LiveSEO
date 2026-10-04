# Para rodar o projeto:

```bash
npx tsx main.ts
```

---

# Modelagem do Usuário

- Optei por utilizar uma `interface` para representar a entidade `User`, pois é o padrão idiomático do TypeScript para contratos de objetos.

# Função Principal (`filtroIdade23`)
- **Parâmetro (`users: User[]`):** Garante que a função receba estritamente uma lista de usuários válidos conforme o contrato.
- **Retorno (`: string[]`):** Tipado explicitamente para declarar que a função entrega apenas os nomes resultantes do `.map()`.
- **Abordagem:** Utilizei a combinação funcional de `.filter()` e `.map()`, garantindo que o array original não seja alterado e que apenas os nomes sejam alterados.

Seu retorno foi:
```text
 [ 'Ana', 'Pedro' ]
```

# Função Genérica (`filtroGeral`) e `NumericKeys<T>`

Para tornar a função flexível a qualquer coluna e campo numérico sem abrir mão do modelo de interface criado, foi criado o tipo utilitário:
```typescript
type NumericKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];
```

Ele coleta todas as colunas da interface `T`, verifica se são do tipo `number`; se não forem, atribui `never`; se forem, ele guarda.

