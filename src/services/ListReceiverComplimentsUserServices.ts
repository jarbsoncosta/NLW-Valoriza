import { getCustomRepository } from "typeorm";
import { Compliments } from "../entities/Compliments";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";




class ListReceiverComplimentsUserServices{
    async execute(user_id:string): Promise<Compliments[]> {
      
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver:user_id
            }
        })
      

        return compliments
        
    }
}
export{ListReceiverComplimentsUserServices}