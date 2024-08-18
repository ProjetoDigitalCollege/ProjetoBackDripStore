import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "../Routes/index.js";

export const runServer = async () => {
  const app = express();

  app.use(cors());
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json());
  dotenv.config();
  
  const port = 3000;
  
  app.use('/api', router);
  
  
  app.listen(port, () => {
    try{
      console.log(`\nO servidor está rodando em: http://localhost:${port}\n`);
  
    } catch (error) {
      console.error(error);
    }
  });
};

