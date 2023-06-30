import { Router } from 'express'
import IngredienteController from '../controllers/IngredienteController'
const router = Router();

router.get('/ingredientes',  IngredienteController.exibirIngredient)

export default router;