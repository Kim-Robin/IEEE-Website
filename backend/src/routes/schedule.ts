import express from 'express';
import {scheduleModel} from '../model/schedule';


const router = express.Router();

/* schedule section endpoint */

router.get('/schedule', (req: express.Request, res: express.Response) =>{

    scheduleModel.getAllSchedule()
        .then(schedule =>{
            res.json(schedule);
        })
        .catch(err => res.status(500).json({
            err: err.message
        }));
});

export = router;
