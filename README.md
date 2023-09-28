# basic-plus-project-ts-with-integrationTests
como instalar o jest em uma repo js/ts:
npm i -D jest ts-jest @types/jest typescript
criar o arquivo de configurações jest.config.ts:

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/tests/*.(test|spec).ts"],
};

arrumar o script de test do package.json para:

"scripts": {
  "test": "jest"
}

criar a pasta tests na raiz do projeto e o arquivo app.test.ts

agora precisamos instalar o supertest e arrumar o servidor
npm i -D supertest @types/supertest

tem que separar o server.ts do index.ts/app.ts 
arrumar o packeage json tbm
consgiurar o supertest no arquivo de app.test.ts:

import supertest from "supertest";
import app from "../src";

const server = supertest(app);

agora precisa separar o banco de development do de testes, para isso:
npm i -D dotenv-cli
após, criar o .env.test para o novo banco de tests, tem que mudar o nome do banco, provavelmente o .env principal vai se chamar = .env.development e o banco projeto_development e o de testes .env.test e o banco projeto_test
precisa colocar no package.json nos escrips o seguinte:

"test:load-envs": "dotenv -e .env.test jest",
"test:migration:run": "npm run test:load-envs prisma migrate deploy",
"test": "npm run load:tests:envs jest"

e rodar eles;

Usaremos factories:
Criar a pasta factories dentro da pasta de tests e dentro dela criar o arquivo.factory.ts
na factory é onde irei criar os cenários para usar nos testes, é basicamente tirar do arquivo de testes para não ficar muito verboso e nem ficar repetindo código

Usaremos faker:
npm i @faker-js/faker --save-dev
importa dentro dos arquivos das factories:
import { faker } from '@faker-js/faker';
Compensa fazer o teste normal da passando as infos que eu quero do jeito que eu quero e em baixo dele fazer o teste usando o faker, ai tenho as 2 opções.

colocar o coverage no script, ele irá criar uma pasta do relatório que ajuda muito a fazer os testes, maravilhoso essa ferramente. Além do coverage, também iremos forçar o jest a não fazer os testes emparalelo, pois, não queremos correr o risco de criar inconsistências.

"test": "npm run test:load-envs -- jest -- --coverage --runInBand"