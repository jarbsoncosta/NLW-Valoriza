import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import AppError from "../errors/AppError";
import {hash} from 'bcryptjs'

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IRequest{
    name: string,
    email: string,
    password:string,
    admin?: boolean,
    

}

class CreateUserServices{
    async execute({name,email,password, admin=false}:IRequest):Promise<User> {
        const userRepository = getCustomRepository(UsersRepositories)
        
        if (!email) {
            throw new AppError("Email incorrect")
        }
        const userExist = await userRepository.findOne({email})

        if (userExist) {
            throw new AppError("User already exists");
            
        }

        const passwordHash = await hash(password, 8);
        const user = userRepository.create({
            name,
            email,
            password:passwordHash,
            admin
        })
        await userRepository.save(user)

        return user       
        
    }
}
export{CreateUserServices}