import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('AoK!');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});