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