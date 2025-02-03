import request from "supertest";
import { app } from "../server";

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Hello CI/CD World!");
  });
});
