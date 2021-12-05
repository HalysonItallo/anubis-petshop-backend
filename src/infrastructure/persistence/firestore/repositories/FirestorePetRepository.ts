import { db } from "..";
import { PetRepository } from "../../../../aplications/repositories/PetRepository";
import { Pet } from "../../../../domain/entities/Pet";


export class FirestorePetRepository implements PetRepository {
    public async create(data: Pet): Promise<Pet> {

        const { name, typeAnimals, 
            height, weight, birthday, 
            gender, color, age, idOwner
        } = data

        const pet = {
            name: name,
            typeAnimals: typeAnimals,
            height: height,
            weight: weight,
            birthday: birthday,
            gender: gender,
            color: color,
            age: age,
            idOwner: idOwner
        }

        await db.collection('pets').add(pet)

        return pet as Pet
    }

    public async getAllPets(idOwner: string): Promise<Pet[]> {
        const petRef = db.collection('pets');
        const petDoc = await petRef.get();
        const pets: Pet[] = [];
        if (idOwner !== null){
            petDoc.forEach((doc: any) => {
                if (doc.data().idOwner === idOwner) {
                    pets.push({ id: doc.id, ...doc.data() })
                }
            });
        }
        return pets as Pet[];
    } 
}
