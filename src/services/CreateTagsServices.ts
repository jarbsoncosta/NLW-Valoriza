import { getCustomRepository } from "typeorm";
import { Tags } from "../entities/Tags";
import AppError from "../errors/AppError";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagsRequest{
    name:string
}



class CreateTagsServices{

    async execute({name}:ITagsRequest):Promise<Tags> {
        const tagsRepositories = getCustomRepository(TagsRepositories)

        if (!name) {
            throw new AppError("Tag not exists")
        }

        const tagExists = await tagsRepositories.findOne({name})
        if (tagExists) {
            throw new AppError("Tag already exists", 400)
        }

        const tag = tagsRepositories.create({ name })

        await tagsRepositories.save(tag)
        
        return tag
       


    }
}
export{CreateTagsServices}