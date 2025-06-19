# React + TypeScript + Vite

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

---

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (ou Yarn) instalados em seu computador.

* **Node.js**: Recomenda-se a versão LTS (Long Term Support). Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
* **npm** (Node Package Manager): Geralmente vem junto com a instalação do Node.js.
* **Yarn** (Opcional): Se preferir usar Yarn, você pode instalá-lo com `npm install -g yarn`.

---

## Como Começar

Siga estes passos para ter o projeto rodando localmente em sua máquina:

1.  **Clone o repositório:**
    Abra seu terminal ou prompt de comando e execute:
    ```bash
    git clone [https://github.com/igorgameiro/desafio-tecnico.git](https://github.com/igorgameiro/desafio-tecnico.git)
    ```
    (Certifique-se de que `igorgameiro/desafio-tecnico` é o link correto do seu repositório).

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd desafio-tecnico
    ```

3.  **Instale as dependências:**
    Use npm:
    ```bash
    npm install
    ```
    Ou se preferir Yarn:
    ```bash
    yarn install
    ```

4.  **Inicie o projeto:**
    Com as dependências instaladas, você pode iniciar o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    Isso iniciará o aplicativo em modo de desenvolvimento, geralmente acessível em `http://localhost:5173` no seu navegador.

---

## Expanding the ESLint configuration

Se você estiver desenvolvendo uma aplicação de produção, recomendamos atualizar a configuração para habilitar regras de lint sensíveis a tipos:

```js
export default tseslint.config({
  extends: [
    // Remova ...tseslint.configs.recommended e substitua por isso
    ...tseslint.configs.recommendedTypeChecked,
    // Alternativamente, use isso para regras mais estritas
    ...tseslint.configs.strictTypeChecked,
    // Opcionalmente, adicione isso para regras de estilo
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // outras opções...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})