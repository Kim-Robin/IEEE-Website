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
		console.log();
		console.log();
		console.log();
		console.log(typeof members);
		console.log(members.length);
		console.log(typeof members[1]);
		console.log(members[1]);
		res.json(members);
        })
        .catch(err => res.status(500).json({
            err: err.message
        }));

});

router.get('/members/:name', (req, res)=>{
	console.log(req.params.name);
	res.sendFile(__dirname.slice(0,-11) + 'images/'+ req.params.name + ".jpg");

});


export = router;
