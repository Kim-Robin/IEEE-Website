"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbQuery = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const DATABASE_FILE = "./IEEE_Info_DB.db";
const dbQuery = (query, params) => __awaiter(void 0, void 0, void 0, function* () {
    let db = new sqlite3_1.default.Database(DATABASE_FILE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connection to the in-memory SQL");
    });
    const process = new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    })
        .finally(() => {
        db.close();
    });
    return process;
});
exports.dbQuery = dbQuery;
//# sourceMappingURL=db.js.map