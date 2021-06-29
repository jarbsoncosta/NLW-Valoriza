
import { Router } from 'express'
import { AuthenticateUserController } from '../controller/AuthenticateUserController'

const authenticateUserController = new AuthenticateUserController()

const authenticateRoutes = Router()


authenticateRoutes.post('/', authenticateUserController.handle )


export{authenticateRoutes}