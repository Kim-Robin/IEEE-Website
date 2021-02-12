import express from "express";
import {Members, memberModel} from '../model/members'

const router = express.Router();

router.get('/members/eboard', (req: express.Request, res: express.Response) => {
    
    memberModel.getEboardMembers()
        .then(members => {
            res.json(members);
        })
        .catch(err => res.status(500).json({
            err: err.message
        }));
});


router.get('/members/jboard', (req: express.Request, res: express.Response) => {

    memberModel.getJboardMembers()
        .then(members => {
            res.json(members);
        })
        .catch(err => res.status(500).json({
            err: err.message
        }));
});

router.get('/members/dboard', (req: express.Request, res: express.Response) =>{
    
    memberModel.getDboardMembers()
        .then(members => {
            res.json(members);
        })
        .catch(err => res.status(500).json({
            err: err.message
        }));
});

router.get('/members', (req: express.Request, res: express.Response) => {
    //console.log(memberModel.getAllMembers());

    memberModel.getAllMembers()
        .then(members =>{
            res.json(members);
        })
        .catch(err => res.status(500).json({
            err: err.message
        }));

});


export = router;
