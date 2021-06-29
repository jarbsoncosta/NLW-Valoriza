import { Request, Response } from "express";
import { ListReceiverComplimentsUserServices } from "../services/ListReceiverComplimentsUserServices";



class ListSenderComplimentsController{
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { user_id } = request
        
        const listReceiverComplimentsUserServices = new ListReceiverComplimentsUserServices()
        const compliments = await listReceiverComplimentsUserServices.execute(user_id)

        return response.status(201).json(compliments)
    }

}
export{ListSenderComplimentsController}