import {z} from "zod"

export const messageSchema = z.object({
    content : z.string()
        .min(10,{message:"message must be atleast 10 character long"})
        .max(300,{message:"message should not be longer than 300 character"})
})