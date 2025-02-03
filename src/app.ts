import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";


dotenv.config()

console.log("PORT",process.env.PORT)
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("DEPLOYMENT SUCCESS test 7  (:");
});

app.listen(8080, () => {
  console.log(`App is listening on port 8080`);
});
