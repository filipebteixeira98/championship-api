import { prisma } from '../../../../database/prismaClient';

interface ICreateChampionship {
  name: string;
  description: string;
  award: number;
}

export class CreateChampionshipUseCase {
  async execute({ name, description, award }: ICreateChampionship) {
    const championshipExists = await prisma.championship.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
      },
    });

    if (championshipExists) {
      throw new Error('Championship already exists!');
    }

    const championship = await prisma.championship.create({
      data: {
        name,
        description,
        award,
      },
    });

    return championship;
  }
}
