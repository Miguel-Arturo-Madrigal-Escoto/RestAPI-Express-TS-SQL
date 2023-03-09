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
exports.deleteUsers = exports.putUsers = exports.postUsers = exports.getUsers = void 0;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        ok: true,
        msg: 'ola'
    });
});
exports.getUsers = getUsers;
const postUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        ok: true,
        msg: req.body
    });
});
exports.postUsers = postUsers;
const putUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        ok: true,
        msg: req.params,
        msg2: req.query
    });
});
exports.putUsers = putUsers;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        ok: true,
        msg: 'delete users'
    });
});
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=user.js.map