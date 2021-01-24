import express from 'express';

import logger from './config/logger';
import indexRouter from './routes/index';
import eventRouter from './routes/event';



const app = express();

app.use(logger);

app.use(express.json());
app.use('/', indexRouter);
app.use('/', eventRouter);

app.get("/yo",(req, res) =>{
    console.log("Connected");
    res.send("Hello world!");
});

app.listen(5000, ()=>{
        console.log("server is running on<Plug>PeepOpenort 5000");
});

app.listen()

