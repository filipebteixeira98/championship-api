import { Request, Response } from 'express';

import { CreateChampionshipUseCase } from './CreateChampionshipUseCase';

export class CreateChampionshipController {
  async handle(request: Request, response: Response) {
    const { name, description, award } = request.body;

    const createChampionshipUseCase = new CreateChampionshipUseCase();

    const championship = await createChampionshipUseCase.execute({
      name,
      description,
      award,
    });

    return response.json(championship);
  }
}
