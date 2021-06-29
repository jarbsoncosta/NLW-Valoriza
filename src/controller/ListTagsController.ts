import { Request, Response } from "express";
import { ListTagsServices } from "../services/ListTagsServices";




class ListTagsController{
    async handle(request: Request, response: Response): Promise<Response>{
        
        const listTagsServices = new ListTagsServices()
        const tags = await listTagsServices.execute()

        return response.status(201).json(tags)
    }
}

export {ListTagsController}