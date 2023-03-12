import { Router } from 'express';
import { getUsers, addUser, putUsers, deleteUsers } from '../controllers/user';
import { createUserBodyValidation } from '../dto/create-user.dto';
import { getUserBodyValidation } from '../dto/get-user.dto';
import { updateUserBodyValidation } from '../dto/update-user.dto';
import { validate } from '../middlewares/validate';

const router = Router();


router.get('/',  getUserBodyValidation, validate, getUsers);
router.post('/', createUserBodyValidation, validate, addUser);
router.put('/:id', updateUserBodyValidation, validate, putUsers);
router.delete('/', deleteUsers);


export default router;