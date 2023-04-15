import { Router } from 'express';
import { getUsers, addUser, putUsers, deleteUsers } from '../controllers/user';

import { validate } from '../middlewares/validate';
import { getUserValidation } from '../dto/user/get-user.dto';
import { createUserValidation } from '../dto/user/create-user.dto';
import { updateUserValidation } from '../dto/user/update-user.dto';
import { deleteUserValidation } from '../dto/user/delete-user.dto';

const router = Router();


router.get('/',  getUserValidation, validate, getUsers);
router.post('/', createUserValidation, validate, addUser);
router.put('/:id', updateUserValidation, validate, putUsers);
router.delete('/:id', deleteUserValidation, validate, deleteUsers);


export default router;