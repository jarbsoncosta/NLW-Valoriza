import { Request, Response } from "express";
import { CreateTagsServices } from "../services/CreateTagsServices";





class CreateTagController{
    async handle(request: Request, response: Response): Promise<Response>{
        const {name} = request.body
        const createTagsServices = new CreateTagsServices()
        const tag = await createTagsServices.execute({ name })
        
        return response.status(201).json(tag)
    }
}

export{CreateTagController}