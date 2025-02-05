# Express + TypeScript com CI/CD Integrado

Este projeto demonstra a criação de uma aplicação backend utilizando Express e TypeScript, com integração de um pipeline CI/CD automatizado através do GitHub Actions e deploy contínuo na plataforma Render.

## Índice

- [Descrição](#descrição)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Testes](#testes)
- [CI/CD com GitHub Actions](#cicd-com-github-actions)
- [Deploy na Render](#deploy-na-render)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

Este projeto exemplifica como configurar uma aplicação Node.js utilizando Express e TypeScript, implementando testes automatizados com Jest e Supertest, e estabelecendo um pipeline de Integração e Entrega Contínua (CI/CD) com GitHub Actions para deploy automático na Render.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```plaintext
express-typescript-ci-cd/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── app.ts
│   └── test/
│       └── app.test.ts
├── dist/
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

- **.github/workflows/deploy.yml**: Configuração do pipeline CI/CD com GitHub Actions.
- **src/**: Contém o código-fonte da aplicação e os testes.
- **dist/**: Diretório para os arquivos JavaScript compilados.
- **package.json**: Gerenciamento de dependências e scripts do projeto.
- **tsconfig.json**: Configurações do compilador TypeScript.
- **jest.config.js**: Configurações do Jest para testes.

## Configuração do Ambiente

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/express-typescript-ci-cd.git
cd express-typescript-ci-cd
```

Instale as dependências:

```bash
npm install
```

Compile o projeto:

```bash
npm run build
```

## Scripts Disponíveis

No arquivo `package.json`, os seguintes scripts estão disponíveis:

- `start`: Inicia a aplicação a partir dos arquivos compilados na pasta `dist`.

  ```bash
  npm start
  ```

- `build`: Compila o código TypeScript para JavaScript na pasta `dist`.

  ```bash
  npm run build
  ```

- `dev`: Inicia a aplicação em modo de desenvolvimento com recarga automática usando `ts-node-dev`.

  ```bash
  npm run dev
  ```

- `test`: Executa os testes utilizando o Jest.
  ```bash
  npm test
  ```

## Testes

Os testes são escritos utilizando Jest e Supertest. O arquivo de teste principal está localizado em `src/test/app.test.ts`. Para executar os testes, utilize:

```bash
npm test
```

## CI/CD com GitHub Actions

O pipeline de CI/CD está configurado no arquivo `.github/workflows/deploy.yml`. Ele é acionado a cada push na branch `main` e executa as seguintes etapas:

1. Checkout do código: Faz o download do código do repositório.
2. Configuração do Node.js: Define a versão do Node.js a ser utilizada.
3. Instalação de dependências: Instala as dependências do projeto.
4. Execução de testes: Roda os testes automatizados.
5. Compilação do projeto: Compila o código TypeScript.
6. Deploy na Render: Dispara o deploy na plataforma Render utilizando um Deploy Hook.

## Deploy na Render

Para configurar o deploy automático na Render:

1. Crie uma conta na Render: [https://render.com](https://render.com)
2. Crie um novo serviço: Configure um novo serviço conectando-o ao seu repositório GitHub.
3. Obtenha o Deploy Hook: No painel do serviço na Render, acesse a seção de Deploy Hooks e copie a URL fornecida.
4. Configure o GitHub Actions: No arquivo .github/workflows/deploy.yml, utilize o Deploy Hook na etapa de deploy:
   ```yaml
   - name: Disparar deploy na Render
     run: |
       curl -X POST "URL_DO_SEU_DEPLOY_HOOK"
   ```
   Substitua "URL_DO_SEU_DEPLOY_HOOK" pela URL fornecida pela Render.

## Contribuição

Contribuições não são aceitas neste projeto.

## Licença

Este projeto não possui licença, pois não está aberto para uso de terceiros.
