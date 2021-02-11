"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const members_1 = require("../model/members");
const router = express_1.default.Router();
router.get('/members/eboard', (req, res, next) => {
    res.send("eboard member");
});
router.get('/memebers/jboard', (req, res, next) => {
    res.send("jboard member");
});
router.get('/members/dboard', (req, res, next) => {
    res.send("dboard member");
});
router.get('/members', (req, res) => {
    //console.log(memberModel.getAllMembers());
    members_1.memberModel.getAllMembers()
        .then(members => {
        res.json(members);
    })
        .catch(err => res.status(500).json({
        err: err.message
    }));
});
module.exports = router;
//# sourceMappingURL=member.js.map