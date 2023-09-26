import app from ".";

const port: Number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server rodando na porta ${port}`));