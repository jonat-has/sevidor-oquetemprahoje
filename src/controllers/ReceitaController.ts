import { Request, Response } from 'express' 
import { AppDataSource } from '../data-source'

export default {

    async exibirReceitaEIngredientes(req: Request, res: Response) {
        try {
            const query = AppDataSource
            .createQueryBuilder()
            .select('*')
            .from(
                subQuery =>
                subQuery
                    .select('codigo_receita')
                    .from('ingredientes_receita', 'IR')
                    .leftJoin('ingredientes_despensa', 'ID', 'IR.codigo_ingrediente = ID.codigo_ingrediente')
                    .andWhere('codigo_despensa = 1')
                    .andWhere('ir.qtd_ingrediente <= ID.qtd_ingrediente')
                    .groupBy('codigo_receita')
                    .having('count(IR.codigo_ingrediente) = count(ID.codigo_ingrediente)'),
                'receitas_OK'
            )
            .innerJoin('receita', 'receita', 'receitas_OK.codigo_receita = receita.codigo')
            .innerJoin('ingredientes_receita', 'ingredientes_receita', 'ingredientes_receita.codigo_receita = receitas_OK.codigo_receita')
            .innerJoin('ingredientes', 'ingredientes', 'ingredientes.codigo = ingredientes_receita.codigo_ingrediente');

            const result = await query.getRawMany();

            return res.status(200).send(result);

        } catch (err){
            return res.status(404).send('Erro');
        }
    },

    async exibirReceitasEncotradas(req: Request, res: Response) {
        try {
            const query = AppDataSource
            .createQueryBuilder()
            .select('*')
            .from('receita', 'r')
            .where(`r.codigo IN (
                SELECT codigo_receita
                FROM ingredientes_receita IR
                LEFT JOIN ingredientes_despensa ID ON IR.codigo_ingrediente = ID.codigo_ingrediente
                AND codigo_despensa = 1 AND ir.qtd_ingrediente <= ID.qtd_ingrediente
                GROUP BY codigo_receita
                HAVING COUNT(IR.codigo_ingrediente) = COUNT(ID.codigo_ingrediente)
            )`);

             const result = await query.getRawMany();
             return res.status(200).send(result);

        } catch (err) {
            return res.status(404).send('Erro');
        }

    },

    async exibirIngredientesReceitasEncontradas(req: Request, res: Response) {
        try {

            const query = AppDataSource
            .createQueryBuilder()
            .select('*')
            .from('ingredientes', 'i')
            .where(`i.codigo IN (
                SELECT codigo_ingrediente
                FROM ingredientes_receita
                WHERE codigo_receita IN (
                SELECT codigo_receita
                FROM ingredientes_receita IR
                LEFT JOIN ingredientes_despensa ID ON IR.codigo_ingrediente = ID.codigo_ingrediente
                AND codigo_despensa = 1 AND ir.qtd_ingrediente <= ID.qtd_ingrediente
                GROUP BY codigo_receita
                HAVING COUNT(IR.codigo_ingrediente) = COUNT(ID.codigo_ingrediente)
                )
            )`);

            const result = await query.getRawMany();
            return res.status(200).send(result);

        } catch (err) {
            return res.status(404).send('Erro');
        }
    }
}