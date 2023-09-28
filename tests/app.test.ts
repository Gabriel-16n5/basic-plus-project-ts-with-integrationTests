import app from "../src";
import prisma from "../src/database/database";
import supertest from "supertest";
import { buildUser, buildUserRandom, randomUser } from "./factories/users.factory";

const server = supertest(app);

beforeAll(async () => {
    await prisma.users.deleteMany();
})

beforeEach(async () => {
    await prisma.users.deleteMany();
  });

describe("create /users tests", () => {
    it("deve criar user", async () => {
        const user = await randomUser();
        const { status, body } = await server.post(`/users`).send(user);
        expect(status).toBe(201);

    })
})

describe("testando o supertest e o endpoint health", () => {
    it("/health", async () => {
        const result = await server.get("/health")

        const {status} = result;
        expect(status).toBe(200)
    })
    it("/health", async () => {
        const result = await server.get("/health")

        const {text} = result;
        expect(text).toBe("aplicação up")
    })
})

describe("GET all /users tests", () => {
    it("deve retornar todos users criados", async () => {
        await buildUserRandom()
        await buildUserRandom()
        const {status, body} = await server.get("/users");
        expect(status).toBe(200);
        expect(body).toHaveLength(2);
    

    })
})

describe("GET /users user by id tests", () => {
    it("get com id específico", async () => {
        const user = await buildUserRandom();
        
        const { status, body } = await server.get(`/users/${user.userId}`);
        expect(status).toBe(200);
        // expect(body).toHaveLength(1);
          expect(body).toEqual(expect.objectContaining({
            userId: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            password: expect.any(String)
          }))
    })
})

describe("GET /users userName by name tests", () => {
    it("get nameespecífico", async () => {
        const user = await buildUserRandom();
        
        const userName = await prisma.users.findFirst({
            where:{
                name: user.name
            }
        })
          expect(userName).toEqual(expect.objectContaining({
            userId: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            password: expect.any(String)
          }))
    })
})

describe("POST /users create tests", () => {
        it("post create a user", async () => {
        const user = await buildUserRandom();
        expect(user).toEqual(expect.objectContaining({
            userId: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            password: expect.any(String)
          }))
    })
})

describe("DELETE /users delete user tests", () => {
    it("get delete de id específico", async () => {
        const user = await buildUserRandom();
        const {status} = await server.delete(`/users/${user.userId}`);
        expect(status).toBe(200);
        
    })
})

describe("PUT /users update tests", () => {
    it("get update de id específico", async () => {
        const user = await buildUserRandom();
        const {status} = await server.put(`/users`).send(user);
        expect(status).toBe(200);
    })
})