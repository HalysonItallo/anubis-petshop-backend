import { Pet } from '../../domain/entities/Pet';
import { PetRepository } from '../repositories/PetRepository';

export class GetAllPetsQuery {
    private petRepository: PetRepository;

    constructor(petRepository: PetRepository) {
        this.petRepository = petRepository;
    }

    public async execute(idOwner: string): Promise<Pet[]> {
        return await this.petRepository.getAllPets(idOwner);
    }
}
