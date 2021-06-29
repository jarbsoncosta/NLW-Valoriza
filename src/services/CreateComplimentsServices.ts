import { getCustomRepository } from "typeorm";
import { Compliments } from "../entities/Compliments";
import AppError from "../errors/AppError";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface CreateComplimentsRequest{
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}


class CreateComplimentsServices{
    async execute({ user_sender, user_receiver, tag_id, message }: CreateComplimentsRequest):Promise<Compliments> {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const usersRepositories = getCustomRepository(UsersRepositories)
        
        //verifica se o remetent e o destinatario são iguais
        if (user_sender === user_receiver) {
            throw new AppError("Incorrect User Receiver")
        }
        //verifica se o usuario remetente existe 
        const userReceiver = usersRepositories.findOne(user_receiver)
        if (!userReceiver) {
            throw new AppError("User Receiver does not Exists")
        }
        const compliments = complimentsRepositories.create({
            user_sender,
            user_receiver,
            tag_id,
            message
        })
        await complimentsRepositories.save(compliments)

        return compliments
               
    }
    


    }


export{CreateComplimentsServices}