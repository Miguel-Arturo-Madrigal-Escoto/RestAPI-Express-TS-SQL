import { Router } from 'express';
import { getUsers, addUser, putUsers, deleteUsers } from '../controllers/user';

const router = Router();


router.get('/',  getUsers);
router.post('/', addUser);
router.put('/:id', putUsers);
router.delete('/', deleteUsers);


export default router;