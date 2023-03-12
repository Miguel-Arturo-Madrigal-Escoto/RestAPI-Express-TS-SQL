import { Router } from 'express';
import { getUsers, addUser, putUsers, deleteUsers } from '../controllers/user';
import { createUserBodyValidation } from '../dto/create-user.dto';
import { updateUserBodyValidation } from '../dto/update-user.dto';
import { validate } from '../middlewares/validate';

const router = Router();


router.get('/',  getUsers);
router.post('/', createUserBodyValidation, validate, addUser);
router.put('/:id', updateUserBodyValidation, validate, putUsers);
router.delete('/', deleteUsers);


export default router;