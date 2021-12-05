import { Appointment } from '../../domain/entities/Appointment';

export interface AppointmentRepository {
    create(data: Appointment): Promise<Appointment>;
    getAllAppointments(): Promise<Appointment[]>;
    setAcceptAppointment(id: string): Promise<Appointment>;
    setRejectAppointment(id: string): Promise<Appointment>;
}