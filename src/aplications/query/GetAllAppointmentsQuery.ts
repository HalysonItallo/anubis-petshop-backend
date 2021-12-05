import { Appointment } from '../../domain/entities/Appointment';
import { AppointmentRepository } from '../repositories/AppointmentRepository';

export class GetAllAppointmentsQuery {
    private appointmentRepository: AppointmentRepository;

    constructor(appointmentRepository: AppointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public async execute(): Promise<Appointment[]> {
        return await this.appointmentRepository.getAllAppointments();
    }
}
