"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const create_user_dto_1 = require("../dto/create-user.dto");
const get_user_dto_1 = require("../dto/get-user.dto");
const update_user_dto_1 = require("../dto/update-user.dto");
const validate_1 = require("../middlewares/validate");
const router = (0, express_1.Router)();
router.get('/', get_user_dto_1.getUserBodyValidation, validate_1.validate, user_1.getUsers);
router.post('/', create_user_dto_1.createUserBodyValidation, validate_1.validate, user_1.addUser);
router.put('/:id', update_user_dto_1.updateUserBodyValidation, validate_1.validate, user_1.putUsers);
router.delete('/', user_1.deleteUsers);
exports.default = router;
//# sourceMappingURL=user.js.map