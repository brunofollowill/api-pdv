const express = require("express");
const routerData = require("./src/routes");
const main = express();

main.use(express.json());

const port = 8000;

main.use("/", routerData);

main.listen(port, () => {
  console.log(`Escutando a porta... ${port}`);
});
