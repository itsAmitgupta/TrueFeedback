import {z} from 'zod'

export const usernameValidation = z.string()
    .min(2,"Username must be atleast 2 character long")
    .max(20,"Username should not be longer than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain any special character")

export const signUpSchema = z.object({
    username:usernameValidation,
    email: z.string().email({message:"Enter a valid email"}),
    password: z.string().min(6,{message:"password must be atleast 6 character"})
})