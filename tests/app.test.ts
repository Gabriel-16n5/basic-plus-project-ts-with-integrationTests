import app from "../src";
import supertest from "supertest";

const server = supertest(app);

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