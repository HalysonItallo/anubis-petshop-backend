import { Pet } from '../../domain/entities/Pet';
import { PetRepository } from '../repositories/PetRepository';

export class CreatePetCommand {
    private petRepository: PetRepository;

    constructor(petRepository: PetRepository) {
        this.petRepository = petRepository;
    }

    public async execute(data: Pet): Promise<Pet> {
        return await this.petRepository.create(data);
    }
}