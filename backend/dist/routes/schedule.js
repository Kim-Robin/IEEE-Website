"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const schedule_1 = require("../model/schedule");
const router = express_1.default.Router();
/* schedule section endpoint */
router.get('/schedule', (req, res) => {
    schedule_1.scheduleModel.getAllSchedule()
        .then(schedule => {
        res.json(schedule);
    })
        .catch(err => res.status(500).json({
        err: err.message
    }));
});
module.exports = router;
//# sourceMappingURL=schedule.js.map