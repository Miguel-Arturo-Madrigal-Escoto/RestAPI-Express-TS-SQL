import { Router } from 'express';
import { getUsers, addUser, putUsers, deleteUsers } from '../controllers/user';
import { createUserValidation } from '../dto/create-user.dto';
import { deleteUserValidation } from '../dto/delete-user.dto';
import { getUserValidation } from '../dto/get-user.dto';
import { updateUserValidation } from '../dto/update-user.dto';
import { validate } from '../middlewares/validate';

const router = Router();


router.get('/',  getUserValidation, validate, getUsers);
router.post('/', createUserValidation, validate, addUser);
router.put('/:id', updateUserValidation, validate, putUsers);
router.delete('/:id', deleteUserValidation, validate, deleteUsers);


export default router;