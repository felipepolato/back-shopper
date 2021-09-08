import express, { Express } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", route);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address();
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
