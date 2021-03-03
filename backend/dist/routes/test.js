"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/test', (req, res) => {
    console.log(__dirname.slice(0, -11));
    res.sendFile(__dirname.slice(0, -11) + 'images/Robin_Kim.jpg');
});
module.exports = router;
//# sourceMappingURL=test.js.map