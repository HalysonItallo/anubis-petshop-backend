import { Pet } from '../../domain/entities/Pet';

export interface PetRepository {
    create(data: Pet): Promise<Pet>;
    getAllPets(idOwner: string): Promise<Pet[]>;
}