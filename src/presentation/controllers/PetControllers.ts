import { Request, Response } from 'express';
import { CreatePetCommand } from '../../aplications/command/CreatePetCommand';
import { GetAllPetsQuery    } from '../../aplications/query/GetAllPetsQuery';
import { FirestorePetRepository } from '../../infrastructure/persistence/firestore/repositories/FirestorePetRepository';

export class PetController {
    public async registerPet(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestorePetRepository();
        const query = new CreatePetCommand(repoService);

        const { name, typeAnimals, 
            height, weight, birthday, 
            gender, color, age, idOwner
        } = req.body.data;
        const pet = await query.execute({
           name: name,
           typeAnimals: typeAnimals,
           height: Number(height),
           weight: Number(weight),
           birthday: birthday,
           gender: gender,
           color: color,
           age: Number(age),
           idOwner: idOwner
        });
        return res.status(200).json(pet)
    }

    public async getAllPetsForOwner(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestorePetRepository();
        const query = new GetAllPetsQuery(repoService);
        const { idOwner } = req.params;
        const pet = await query.execute(idOwner);
        return res.status(200).json(pet)
    }
}
