import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routers/userRouter';


const port = 5000;
dotenv.config();
const app = express();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));
app.use(bodyParser.json());
app.use("/api/users", userRoute);
const server = app.listen(5000, () => {
    console.log('Listening on http://localhost:', server.address().port);
});