"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const members_1 = require("../model/members");
const router = express_1.default.Router();
router.get('/members/eboard', (req, res) => {
    members_1.memberModel.getEboardMembers()
        .then(members => {
        res.json(members);
    })
        .catch(err => res.status(500).json({
        err: err.message
    }));
});
router.get('/members/jboard', (req, res) => {
    members_1.memberModel.getJboardMembers()
        .then(members => {
        res.json(members);
    })
        .catch(err => res.status(500).json({
        err: err.message
    }));
});
router.get('/members/dboard', (req, res) => {
    members_1.memberModel.getDboardMembers()
        .then(members => {
        res.json(members);
    })
        .catch(err => res.status(500).json({
        err: err.message
    }));
});
router.get('/members', (req, res) => {
    //console.log(memberModel.getAllMembers());
    members_1.memberModel.getAllMembers()
        .then(members => {
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
router.get('/members/:year/:name', (req, res) => {
    console.log(req.params.name);
    res.sendFile(__dirname.slice(0, -11) + 'images/' + req.params.year + '/' + req.params.name + ".jpg");
});
router.get('/members/placeholder', (req, res) => {
    res.sendFile(__dirname.slice(0, -11) + 'images/profile_placeholder_0.jpg');
});
module.exports = router;
//# sourceMappingURL=member.js.map