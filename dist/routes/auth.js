"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validate_1 = require("../middlewares/validate");
const login_dto_1 = require("../dto/auth/login.dto");
const router = (0, express_1.Router)();
router.post('/login', login_dto_1.loginValidation, validate_1.validate, auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map