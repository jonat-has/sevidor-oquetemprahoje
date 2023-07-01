import { Router } from 'express'
import IngredienteController from '../controllers/IngredienteController'
import ReceitaController from '../controllers/ReceitaController';
const router = Router();

router.get('/ingredientes',  IngredienteController.exibirIngredient)
router.get('/receitasEingredientes', ReceitaController.exibirReceitaEIngredientes)
router.get('/receitasEncontradas', ReceitaController.exibirReceitasEncotradas)
router.get('/ingredientesReceitasEncontradas', ReceitaController.exibirIngredientesReceitasEncontradas)

export default router;