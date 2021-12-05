import { Appointment } from "../../domain/entities/Appointment";
import { AppointmentRepository } from "../repositories/AppointmentRepository";

export class CreateAppointmentCommand {
    private appointmentRepository: AppointmentRepository;

    constructor(appointmentRepository: AppointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public async execute(data: Appointment): Promise<Appointment> {
        return await this.appointmentRepository.create(data);
    }
}