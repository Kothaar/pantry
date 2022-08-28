import express from 'express';
import { Sequelize } from 'sequelize-typescript';

const app = express();
const port = process.env.PORT || 8080; // default port to listen

const username = 'root';
const db = 'pantry-db';
const password = 'u4ouEEKTZkE8';

console.log('started');
const sequelize = new Sequelize(db, username, password, {
  host: 'mysql',
  dialect: 'mysql',
});

app.get(
  '/connect',
  function (req: any, res: { send: (arg0: string) => void }): void {
    sequelize
      .authenticate()
      .then(() => {
        console.log('working');
      })
      .catch((err) => {
        console.error('unable to connect to database: \n', err);
      });
    res.send('connected?');
  }
);

// define a route handler for the default home page
app.get('/', function (req: any, res: { send: (arg0: string) => void }): void {
  res.send('Hello world! updated');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
