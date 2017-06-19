# Employees API - Fullstack Challenge

REST API desenvolvida para o desafio **{ "developer": "fullstack" } ao CUBO \o/**.

Stack utilizada no projeto: [NodeJS](http://nodejs.org) / [MongoDB](https://www.mongodb.com) e testes unitários com [Mocha](https://mochajs.org).

## Demonstração

Para ver um exemplo de app consumindo essa API, acesse o repositório [employee-app](https://github.com/HenriqueSilverio/employee-app).

## Instalação

Para que a API funcione corretamente, pressupõe-se que você já tenha instalado e configurado o **MongoDB** em sua máquina. Caso precise de ajuda para instalar o **MongoDB**, consulte a [documentação oficial](https://docs.mongodb.com/manual/administration/install-community).

Após ter instalado o **MongoDB**, basta seguir os seguintes passos:

**1. Clonar repositório e acessá-lo:**

```
git clone http://github.com/HenriqueSilverio/employee-api && cd employee-api
```

**2. Instalar as dependências:**

```
npm i
```

**3. Iniciar o servidor:**

```
npm start
```

Pronto! A API estará rodando em `http://localhost:3000/employees`.

### Testes unitários

Para rodar os testes unitários com o **Mocha**:

```
npm test
```

### Build otimizada para produção

Para gerar uma build otimizada do servidor para produção:

```
npm run build
```

Pronto! Será gerada uma pasta `/dist` com os arquivos compilados pelo [Babel](http://babeljs.io).
