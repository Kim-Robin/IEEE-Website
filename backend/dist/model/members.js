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
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberModel = void 0;
const db_1 = require("../database/db");
const getAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const values = yield db_1.dbQuery(`SELECT * FROM Members`);
    console.log("values" + values);
    return values;
});
exports.memberModel = {
    getAllMembers
};
//# sourceMappingURL=members.js.map