import {z} from "zod"

export const acceptMessageSchema = z.object({
    acceptMesssages: z.boolean()
})