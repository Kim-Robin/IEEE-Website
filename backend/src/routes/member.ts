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

router.get('/members/:year/:name', (req, res)=>{
	console.log(req.params.name);
	res.sendFile(__dirname.slice(0,-11) + 'images/' + req.params.year + '/'+ req.params.name + ".jpg");

});

router.get('/members/placeholder', (req, res) => {
    res.sendFile(__dirname.slice(0, -11) + 'images/profile_placeholder_0.jpg');
});


export = router;
