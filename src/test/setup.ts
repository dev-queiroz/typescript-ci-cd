import { server } from "../server";

afterAll(async () => {
  // Garante que o servidor seja fechado após os testes
  server.close();
});

