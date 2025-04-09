# 📝 To-Do List React App

Uma aplicação simples de **lista de tarefas (To-Do List)** construída com **React + TypeScript**, focada em componentização, estilização com CSS Modules e controle de estados (em desenvolvimento).

## 🚧 Status do Projeto

> ⚠️ Ainda em desenvolvimento!  
> A lógica de estado para adicionar/remover tarefas dinamicamente será implementada em breve.

---

## ✨ Funcionalidades atuais

- Interface com input para adicionar novas tarefas
- Componentes visuais já estruturados:
  - `Header`: exibe logo
  - `InputTask`: campo para digitar nova tarefa
  - `TaskList`: área com contadores e tarefas
  - `Tasks`: tarefa individual com checkbox e botão de deletar (estático)
- Estilização modular com CSS Modules
- Marcação de tarefa concluída (com efeito visual)
- Contador de tarefas criado/concluídas (estático)

---

## 🧱 Estrutura de Componentes

```
src/
├── components/
│   ├── Header.tsx
│   ├── InputTask.tsx
│   ├── TaskList.tsx
│   └── Tasks.tsx
├── assets/
│   └── img/
│       └── Logo.svg
├── styles/
│   └── *.module.css
```

---

## 🚀 Como rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-repo
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Rode o projeto:
   ```bash
   npm run dev
   ```

---

## ✅ Melhorias planejadas

- [ ] Adicionar tarefas dinamicamente
- [ ] Remover tarefas dinamicamente
- [ ] Contadores automáticos (tarefas criadas e concluídas)
- [ ] Armazenamento local com `localStorage`
- [ ] Testes unitários com Jest/React Testing Library

---

## 📸 Prévia

> _(Coloque aqui um GIF ou imagem quando tiver o layout finalizado)_

---

## 🛠️ Tecnologias usadas

- React
- TypeScript
- CSS Modules
- Vite (sugestão para setup moderno)
- Lucide Icons

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Feito com 💙 por [José Santos](https://github.com/juniorjuarez)
