"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* Get Home page. */
router.get('/', (req, res, next) => {
    res.send("index");
});
module.exports = router;
//# sourceMappingURL=index.js.map