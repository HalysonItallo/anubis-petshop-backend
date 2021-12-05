import { Request, Response } from 'express';
import { CreateAppointmentCommand } from '../../aplications/command/CreateAppointmentCommand';
import { GetAllAppointmentsQuery    } from '../../aplications/query/GetAllAppointmentsQuery';
import { FirestoreAppointmentRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreAppointmentRepository';
import { SetAcceptAppointment } from '../../aplications/query/SetAcceptAppointment';
import { SetRejectAppointment } from '../../aplications/query/SetRejectAppointment';


export class AppointmentController {
    public async createAppointment(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreAppointmentRepository();
        const query = new CreateAppointmentCommand(repoService);
        const { idAnimal,
            idClient,
            date,
            hour,
            adress,
            appointment
        } = req.body.data;
        const appointmentObj = await query.execute({
           idAnimal,
           idClient,
           date,
           hour,
           adress,
           appointment,
           status: "wait"
        });
        return res.status(200).json(appointmentObj)
    }

    public async getAllAppointments(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreAppointmentRepository();
        const query = new GetAllAppointmentsQuery(repoService);
        const pet = await query.execute();
        return res.status(200).json(pet)
    }
    
    public async setAcceptAppointment(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreAppointmentRepository();
        const query = new SetAcceptAppointment(repoService);
        const { id } = req.params;
        const appointment = await query.execute(id);
        return res.status(200).json(appointment);
        
    }

    public async setRejectAppointment(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreAppointmentRepository();
        const query = new SetRejectAppointment(repoService);
        const { id } = req.params;
        const appointment = await query.execute(id);
        return res.status(200).json(appointment);
    }
}
