'use client'
import Modal from "./modal";
import { useState } from "react";
import CustomButton from "../forms/custom-buttom";
import useSignupModal from "@/app/hooks/use-signup-modal";
import { useRouter } from "next/navigation";
import { errorToJSON } from "next/dist/server/render";
import apiService from "@/app/services/api-service";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = ()=>{
    // use hooks
    const router = useRouter();
    const signupModal= useSignupModal();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    // submit functionality
    const submitSignup = async() =>{
        const formData ={
            email: email,
            password1: password1,
            password2: password2
        }
        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData));
        if (response.access){
            handleLogin(response.user.pk, response.access, response.refresh);
            signupModal.close();
            router.push('/');
        }
        else{
            const tmpErrors: string[] = Object.values(response).map((error:any)=>{
                return error;
            })
            setErrors(tmpErrors)
        }
    
    }
    const content= (
        <>
            <form 
                action={submitSignup}
                className="space-y-4"
            >
                <input placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" onChange={(e)=>setPassword1(e.target.value)} />
                <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" onChange={(e)=>setPassword2(e.target.value)}/>
                {errors.map((error, index)=>{
                    return (
                        <div 
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                            key={`error_${index}`}
                        >
                            {error}
                        </div>                    
                    )
                })}
            
                <CustomButton
                    label="Submit"
                    onClick={submitSignup}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content= {content}
        />
    )

}
export default SignupModal;