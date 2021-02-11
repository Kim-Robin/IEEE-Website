"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const events_1 = require("../model/events");
const cors_1 = __importDefault(require("cors"));
const router = express_1.default.Router();
/* event section endpoint*/
router.get('/events/past', (req, res, next) => {
    res.send("past event");
});
router.get('/events/future', (req, res, next) => {
    res.send("future event");
});
router.get('/events', cors_1.default(), (req, res) => {
    events_1.eventModel.getAllEvents()
        .then(events => {
        res.json(events);
    })
        .catch(err => res.status(500).json({
        err: err.message
    }));
});
module.exports = router;
//# sourceMappingURL=event.js.map