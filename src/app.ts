import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";


dotenv.config()

const port = process.env.PORT
const name = process.env.NAME

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("DEPLOYMENT SUCCESS test 7  (:");
});

app.listen(port, () => {
  console.log(`Hi ${name} App is listening on port ${port}`);
});
