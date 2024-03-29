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
exports.existeUsuario = exports.existeUsuarioID = exports.existeRole = exports.existeEmail = void 0;
const role_1 = __importDefault(require("../models/role"));
const user_1 = __importDefault(require("../models/user"));
const existeEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield user_1.default.findOne({ where: { email } });
    if (usuario)
        throw new Error('Email en uso');
    return true;
});
exports.existeEmail = existeEmail;
const existeRole = (role) => __awaiter(void 0, void 0, void 0, function* () {
    const _role = yield role_1.default.findOne({ where: { role } });
    if (!_role)
        throw new Error('El rol no esta definido');
    return true;
});
exports.existeRole = existeRole;
const existeUsuarioID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const _usuario = yield user_1.default.findByPk(id);
    if (!_usuario)
        throw new Error('No existe un usuario con dicho id');
    return true;
});
exports.existeUsuarioID = existeUsuarioID;
const existeUsuario = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const _usuario = yield user_1.default.findOne({ where: { email, estado: true } });
    if (!_usuario)
        throw new Error(`Correo y/o contraseña incorrecta`);
    return true;
});
exports.existeUsuario = existeUsuario;
//# sourceMappingURL=validations.js.map