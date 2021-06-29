import { Router } from "express";
import { CreateComplimentsController } from "../controller/CreateComplimentsController";
import { ListReceiverComplimentsController } from "../controller/ListReceiverComplimentsController";
import { ListSenderComplimentsController } from "../controller/ListSenderComplimentsController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";



const createComplimentsController = new CreateComplimentsController()
const listReceiverComplimentsController = new ListReceiverComplimentsController()
const listSenderComplimentsController = new ListSenderComplimentsController()
const complimentsRouter = Router()


complimentsRouter.post("/", ensureAuthenticated, createComplimentsController.handle)
complimentsRouter.get("/receiver", ensureAuthenticated, listReceiverComplimentsController.handle)
complimentsRouter.get("/sender",ensureAuthenticated, listSenderComplimentsController.handle)

export{complimentsRouter}