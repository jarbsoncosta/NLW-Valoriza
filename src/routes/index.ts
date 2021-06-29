
import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { complimentsRouter } from './compliments.routes'
import { tagsRouter } from './tags.routes'
import { usersRouter } from './users.routes'


const routes = Router()

routes.use('/users', usersRouter)
routes.use('/tags', tagsRouter)
routes.use('/sessions', authenticateRoutes)
routes.use('/compliments', complimentsRouter)

export {routes}