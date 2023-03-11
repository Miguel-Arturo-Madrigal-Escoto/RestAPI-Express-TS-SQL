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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.putUsers = exports.addUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield user_1.default.findAll({ attributes: ['nombre', 'email', 'role'] });
        res.status(200).json({
            ok: true,
            usuarios
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.getUsers = getUsers;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /*const usuario = User.build(req.body);
        await usuario.save();*/
        const usuario = yield user_1.default.create(req.body);
        usuario.validate(); // se llama opcionalmente
        const _a = usuario.dataValues, { password } = _a, _usuario = __rest(_a, ["password"]);
        res.status(201).json({
            ok: true,
            usuario: _usuario
        });
    }
    catch (error) {
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({
                ok: true,
                msg: error.errors.map((e) => ({ message: e.message, path: e.path }))
            });
        }
        else {
            res.status(400).json({
                ok: true,
                msg: 'Hable con el administrador'
            });
        }
    }
});
exports.addUser = addUser;
const putUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _b = req.body, { google, estado } = _b, usuario = __rest(_b, ["google", "estado"]);
        const [affectedRows, _usuario] = yield Promise.all([
            user_1.default.update(usuario, { where: { id: +req.params.id } }),
            user_1.default.findByPk(+req.params.id, { attributes: ['nombre', 'email', 'role'] })
        ]);
        res.status(200).json({
            ok: true,
            affectedRows: affectedRows[0] || 0,
            usuario: _usuario
        });
    }
    catch (error) {
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({
                ok: true,
                msg: error.errors.map((e) => ({ message: e.message, path: e.path }))
            });
        }
        else {
            res.status(400).json({
                ok: true,
                msg: 'Hable con el administrador'
            });
        }
    }
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