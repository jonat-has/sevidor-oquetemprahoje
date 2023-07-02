import { Router } from 'express'
import IngredienteController from '../controllers/IngredienteController'
import ReceitaController from '../controllers/ReceitaController';
import DespensaController from '../controllers/DespensaController';
const router = Router();

router.get('/ingredientes',  IngredienteController.exibirIngredient)
router.get('/receitasEingredientes', ReceitaController.exibirReceitaEIngredientes)
router.get('/receitasEncontradas', ReceitaController.exibirReceitasEncotradas)
router.get('/ingredientesReceitasEncontradas', ReceitaController.exibirIngredientesReceitasEncontradas)
router.get('/ingredientesDespensa', DespensaController.exibirDespensa)

router.delete('/clearDespensa', DespensaController.limparDespensa)
router.delete('/excluirIngreDespensa', DespensaController.excluiUmIngrediente)

router.put('/alterQtdIngrediente', DespensaController.alterarQtdIngrediente)

router.post('/insertInDespensa', DespensaController.insertDespensa)

export default router;