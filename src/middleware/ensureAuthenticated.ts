import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IPayload{
    sub: string;

}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    //recebe token pelo headers.authorization
    const autheHeader = request.headers.authorization

    //verifica se o token está preenchido
    if (!autheHeader) {
        throw new AppError("Token missing", 401)        
    }
      const [, token] = autheHeader.split(" ");
    
    try {
        //verifica se token é válido
         const  { sub } = verify(
            token,
            'd41d8cd98f00b204e9800998ecf8427e',
         ) as IPayload;               
        //recupera informações do usúario
         request.user_id = sub       
        
        next();        
    } catch {
        throw new AppError("Invalid token", 401)
        
    }  
    
}