import { Router } from 'express';

import { CreateChampionshipController } from './modules/championship/useCases/createChampionship/CreateChampionshipController';

const routes = Router();

const createChampionshipController = new CreateChampionshipController();

routes.post('/championship', createChampionshipController.handle);

export { routes };
