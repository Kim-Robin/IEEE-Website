import express from "express";
import {Events, eventModel} from "../model/events";
import cors from 'cors';

const router = express.Router();

/* event section endpoint*/

router.get('/events/past', (req, res, next) => {
    res.send("past event");
});

router.get('/events/future', (req, res, next) => {
    res.send("future event");
});

router.get('/events', cors(), (req: express.Request, res: express.Response ) =>{

    eventModel.getAllEvents()
        .then(events =>{
            res.json(events);
        })
        .catch(err => res.status(500).json({
            err: err.message
        }));
});


export = router;
