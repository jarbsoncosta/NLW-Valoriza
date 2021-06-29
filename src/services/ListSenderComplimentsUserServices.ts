import { getCustomRepository } from "typeorm"
import { Compliments } from "../entities/Compliments"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"






class ListSenderComplimentsUserServices{
    async execute(user_id:string): Promise<Compliments[]> {
      
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const compliments = await complimentsRepositories.find({
            where: {
                user_sender:user_id
            }
        })

        return compliments
        
    }
}
export{ListSenderComplimentsUserServices}