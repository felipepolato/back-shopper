require("dotenv/config")
require("./database/connection")
const express = require("express");
const cors = require("cors");
const productsRouter = require("./router/productsRouter");


const app = express();

app.use(express.json());
app.use(cors());

// console.log("Aqui", productsRouter)

app.use("/products", productsRouter);


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address();
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
