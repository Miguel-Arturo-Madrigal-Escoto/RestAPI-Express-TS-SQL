"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const validate_1 = require("../middlewares/validate");
const get_user_dto_1 = require("../dto/user/get-user.dto");
const create_user_dto_1 = require("../dto/user/create-user.dto");
const update_user_dto_1 = require("../dto/user/update-user.dto");
const delete_user_dto_1 = require("../dto/user/delete-user.dto");
const router = (0, express_1.Router)();
router.get('/', get_user_dto_1.getUserValidation, validate_1.validate, user_1.getUsers);
router.post('/', create_user_dto_1.createUserValidation, validate_1.validate, user_1.addUser);
router.put('/:id', update_user_dto_1.updateUserValidation, validate_1.validate, user_1.putUsers);
router.delete('/:id', delete_user_dto_1.deleteUserValidation, validate_1.validate, user_1.deleteUsers);
exports.default = router;
//# sourceMappingURL=user.js.map