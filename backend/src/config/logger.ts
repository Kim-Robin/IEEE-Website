import express from 'express';

function logger(req: express.Request, res: express.Response, next: express.NextFunction){
    console.log(`${req.method} ${req.path}`);
    next();
}

export = logger;
