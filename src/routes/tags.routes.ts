import { Router } from 'express'
import { CreateTagController } from '../controller/CreateTagController'
import { ListTagsController } from '../controller/ListTagsController'
import { ensureAdmin } from '../middleware/ensureAdmin'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated'

const createTagController = new CreateTagController()
const listTagsController = new ListTagsController()

const tagsRouter = Router()

tagsRouter.post('/', ensureAuthenticated, ensureAdmin, createTagController.handle)
tagsRouter.get('/',ensureAuthenticated, listTagsController.handle)

export{tagsRouter}