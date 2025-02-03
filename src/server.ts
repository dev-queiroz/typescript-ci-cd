import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello CI/CD World!");
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Exporte para uso nos testes
export { app, server };
