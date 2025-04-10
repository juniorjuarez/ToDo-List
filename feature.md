### 🔁 Fluxo de dados no React (sem backend)

Como você vai manter os dados só no front, o React precisa ter um lugar pra guardar e gerenciar esse **estado**. Nesse caso, o "estado" são as tarefas que o usuário vai criar. Aqui vai o raciocínio:

---

### 🧠 Onde guardar os dados?

Como você quer que o input crie uma nova task e o componente `TaskList` mostre elas, **ambos os componentes precisam "conversar" entre si**. E como o React funciona de cima pra baixo (top-down), o pai comum entre eles (`App`) é quem vai manter esse estado.

Ou seja:

- `App` vai manter um array com as tarefas (`useState`).
- `InputTask` vai receber do `App` uma **função** pra adicionar uma nova tarefa.
- `TaskList` vai receber do `App` a **lista de tarefas** pra exibir.

---

### 🧩 Como os componentes se comunicam?

#### 1. De filho para pai (InputTask → App)

React não permite que um componente "filho" altere diretamente o estado de um "pai". Mas você pode passar uma **função como prop** do pai pro filho.

Exemplo (em palavras):

> "Ei, `InputTask`, quando o usuário enviar o formulário, chama essa função aqui e me passa o que ele digitou."

Essa função está definida no `App`, e vai atualizar o array de tarefas com o novo valor recebido.

---

#### 2. De pai para filho (App → TaskList)

Aqui é o contrário. O `App` simplesmente envia o array de tarefas para o `TaskList` como uma prop. A função do `TaskList` é só **percorrer esse array** e renderizar cada item.

---

#### 3. Componente `Task`

O `TaskList` pode renderizar cada tarefa com um componente `Task`, só pra deixar as coisas organizadas. Ele só vai receber o texto da tarefa (ou um objeto no futuro) e exibir.

---

### 💡 Resumo prático do que você precisa fazer:

- [ ] Criar um `useState` no `App` com o array de tarefas.
- [ ] Criar uma função no `App` que adicione uma nova tarefa no array.
- [ ] Passar essa função como prop pro `InputTask`.
- [ ] No `InputTask`, capturar o que o usuário digitar e, ao enviar, chamar a função recebida via props com esse valor.
- [ ] Passar o array de tarefas como prop pro `TaskList`.
- [ ] No `TaskList`, percorrer esse array (com `.map()`) e renderizar um `Task` pra cada item.
