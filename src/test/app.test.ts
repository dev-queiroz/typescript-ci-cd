import request from "supertest";
import { app } from "../app";

describe("Teste do endpoint GET /", () => {
  it("deve retornar 'Hello from Express + TypeScript!' com status 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello from Express + TypeScript!");
  });
});
