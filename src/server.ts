import express from "express";
import path from "node:path";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.static(path.join(process.cwd(), "public")));

app.listen(port, () => {
  console.log(`Site running at http://localhost:${port}`);
});
