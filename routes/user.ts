import { Router } from 'express';
import { getUsers, addUser, putUsers, deleteUsers } from '../controllers/user';
import { reqUserBodyValidation } from '../dto/create-user.dto';
import { validate } from '../middlewares/validate';

const router = Router();


router.get('/',  getUsers);
router.post('/', reqUserBodyValidation, validate, addUser);
router.put('/:id', putUsers);
router.delete('/', deleteUsers);


export default router;