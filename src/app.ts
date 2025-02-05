import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

// Se o arquivo for executado diretamente, inicia o servidor.
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
