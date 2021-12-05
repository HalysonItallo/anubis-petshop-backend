import express from 'express'
import cors from 'cors'
import './infrastructure/persistence/firestore/repositories/FirestoreUserRepository'
import { UserController } from './presentation/controllers/UserControllers';
import { PetController } from './presentation/controllers/PetControllers';
import { AppointmentController } from './presentation/controllers/AppointmentControllers';


const app = express()
app.use(express.json())
app.use(cors())

const userController = new UserController()
const petController = new PetController()
const appointmentController = new AppointmentController()

app.post('/createUser', userController.createUser)

app.post('/login', userController.login)

app.post('/registerPet', petController.registerPet)

app.get('/getAllPetsForOwner/:idOwner', petController.getAllPetsForOwner)

app.post('/createAppointment', appointmentController.createAppointment)

app.get('/getAllAppointments', appointmentController.getAllAppointments)

app.get('/setAcceptAppointment/:id', appointmentController.setAcceptAppointment)

app.get('/setRejectAppointment/:id', appointmentController.setRejectAppointment)

app.listen(3333, () => {
    console.log('App running...')
})