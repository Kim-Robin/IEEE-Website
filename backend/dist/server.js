"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("./config/logger"));
const index_1 = __importDefault(require("./routes/index"));
const event_1 = __importDefault(require("./routes/event"));
const member_1 = __importDefault(require("./routes/member"));
const schedule_1 = __importDefault(require("./routes/schedule"));
const app = express_1.default();
app.use(cors_1.default());
app.use(logger_1.default);
app.use(express_1.default.json());
app.use('/', index_1.default);
app.use('/', event_1.default);
app.use('/', schedule_1.default);
app.use('/', member_1.default);
app.get("/yo", (req, res) => {
    console.log("Connected");
    res.send("Hello world!");
});
app.listen(5000, () => {
    console.log("server is running on<Plug>PeepOpenort 5000");
});
//# sourceMappingURL=server.js.map