import { Request, Response } from "express";
import { ListUsersServices } from "../services/ListUsersServices";




class ListUsersController{
    async handle(request: Request, response: Response): Promise<Response>{
        
        const listUsersServices = new ListUsersServices()

        const users =await listUsersServices.execute()

        return response.status(201).json(users)
        
    }
}

export{ListUsersController}