import express from 'express';

import logger from './config/logger';
import indexRouter from './routes/index';



const app = express();

app.use(logger);

app.use(express.json());
app.use('/', indexRouter)

app.get("/yo",(req, res) =>{
    console.log("Connected");
    res.send("Hello world!");
});

app.listen(5000);


