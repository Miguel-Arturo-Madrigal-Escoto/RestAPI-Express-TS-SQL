import { Router } from 'express';
import { login } from '../controllers/auth';
import { validate } from '../middlewares/validate';
import { loginValidation } from '../dto/auth/login.dto';

const router = Router();

router.post('/login', loginValidation, validate, login);


export default router;