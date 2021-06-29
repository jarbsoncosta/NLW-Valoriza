import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import {sign} from 'jsonwebtoken'
import AppError from "../errors/AppError";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IRequest{
    email: string;
    password: string;
}

interface IResponse{
    user: {
        name: string;
        email: string;
    }
    token:string
}


class AuthenticateUserUseCase{
    async execute({ email, password }: IRequest): Promise<IResponse>{

        const userRepository = getCustomRepository(UsersRepositories)

        const user = await userRepository.findOne({email})
        if (!user) {
            throw new AppError('Email ou password incorret!');
        }
        // senha é correta
        const passworMatch = await compare(password, user.password);
        if (!passworMatch) {
            throw new AppError('Email ou password incorret!');
        }
        // gerando token
        const token = sign({}, 'd41d8cd98f00b204e9800998ecf8427e', {
            subject: user.id,
            expiresIn: '1d',
        });
        return {
            user,
            token,
        };
        
        
    }

}
export {AuthenticateUserUseCase}