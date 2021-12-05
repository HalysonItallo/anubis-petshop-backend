import { db } from "..";
import { AppointmentRepository } from "../../../../aplications/repositories/AppointmentRepository";
import { Appointment } from "../../../../domain/entities/Appointment";


export class FirestoreAppointmentRepository implements AppointmentRepository {
    public async create(data: Appointment): Promise<Appointment> {

        const { idAnimal,
            idClient,
            date,
            hour,
            adress,
            appointment, 
            status
        } = data

        const appointmentObj = {
            idAnimal,
            idClient,
            date,
            hour,
            adress,
            appointment,
            status
        }

        await db.collection('appointments').add(appointmentObj)

        return appointmentObj as Appointment
    }

    public async getAllAppointments(): Promise<Appointment[]> {
        const appointmentRef = db.collection('appointments');
        const appointmentDoc = await appointmentRef.get();
        const appointments: Appointment[] = [];
        appointmentDoc.forEach((doc: any) => {
            appointments.push({ id: doc.id, ...doc.data() })
        })
        return appointments as Appointment[];
    } 

    public async setAcceptAppointment(id: string): Promise<Appointment> {
        const appointmentRef = db.collection('appointments');
        const appointmentDoc = appointmentRef.doc(id);
        const appointment = {
            status: 'accepted'
        }
        await appointmentDoc.update({ status: 'accepted' })

        return appointment as Appointment;
    }


    public async setRejectAppointment(id: string): Promise<Appointment> {
        const appointmentRef = db.collection('appointments');
        const appointmentDoc = appointmentRef.doc(id);
        const appointment = {
            status: 'rejected'
        }
        await appointmentDoc.update({ status: "rejected" })

        return appointment as Appointment;
    }
}
