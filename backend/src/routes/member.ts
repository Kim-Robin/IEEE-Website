import express from "express";
import {Members, memberModel} from '../model/members'

const router = express.Router();

router.get('/members/eboard', (req, res, next) => {
    res.send("eboard member");
});


router.get('/memebers/jboard', (req, res, next) => {
    res.send("jboard member");
});

router.get('/members/dboard', (req, res, next) =>{
    res.send("dboard member");
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
