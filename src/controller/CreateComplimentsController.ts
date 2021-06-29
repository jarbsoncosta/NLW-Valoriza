import { Request, Response } from "express";
import { CreateComplimentsServices } from "../services/CreateComplimentsServices";




class CreateComplimentsController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { user_receiver, tag_id, message } = request.body
        const {user_id}=request
        const createComplimentsServices = new CreateComplimentsServices()

        const compliments = await createComplimentsServices.execute({
            user_sender:user_id,
            user_receiver,
            tag_id,
            message

        })
        return response.status(201).json(compliments)
    }
}
export{CreateComplimentsController}