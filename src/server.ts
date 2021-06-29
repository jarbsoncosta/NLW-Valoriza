import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import AppError from './errors/AppError'

import './database'
import {routes} from './routes'


const app = express()
app.use(express.json())

app.use(routes)

app.get('/', (request, response) => {
    return response.send('Hello Holrd')
    
})
//tratamento de excessão
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            error: error.message
            
        })
        
    }
     console.log(error)
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
        
    })
   
})

 


app.listen(3333, () => {
    console.log("Servidor rodando na porta", 3333)
})