"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get('/', user_1.getUsers);
router.post('/', user_1.addUser);
router.put('/:id', user_1.putUsers);
router.delete('/', user_1.deleteUsers);
exports.default = router;
//# sourceMappingURL=user.js.map