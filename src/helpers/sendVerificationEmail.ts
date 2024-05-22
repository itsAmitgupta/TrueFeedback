import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string,
): Promise<ApiResponse>{

    try {
         await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'True feedback |Verification code',
            react: VerificationEmail({username,otp:verifyCode}),
          });

        return{
            success:true,
            message:"Email verification send successfully"
        }
    } catch (error) {
        console.error("Send verification email failed",error)
        return {
            success:false,
            message:"Error while sending the email verification code"
        }
    }
}