import { Router } from 'express'
import { CreateUserController } from '../controller/CreateUserController'
import { ListUsersController } from '../controller/ListUsersController'

import { ensureAuthenticated } from '../middleware/ensureAuthenticated'

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

const usersRouter = Router()

usersRouter.post('/', createUserController.handle)
usersRouter.get('/', ensureAuthenticated, listUsersController.handle)

export{usersRouter}