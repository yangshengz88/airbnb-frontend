'use client'
import Modal from "./modal";
import { useState } from "react";
import CustomButton from "../forms/custom-buttom";
import useLoginModal from "@/app/hooks/use-login-modal";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/api-service";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = ()=>{
    const router = useRouter();
    const loginModal= useLoginModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);


    // submit functionality
    const submitLogin = async() =>{
        const formData ={
            email: email,
            password: password,
        
        }
        const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(formData));
        if (response.access){
            handleLogin(response.user.pk, response.access, response.refresh);
            loginModal.close();
            router.push('/');
        }
        else{
            
            setErrors(response.non_field_errors);
        }
    
    }

    const content= (
        <>
        <form 
            className="space-y-4"
            action={submitLogin}
        >
            <input placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" onChange={(e)=>setPassword(e.target.value)}/>
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
                onClick={submitLogin}
            />
        </form>
        </>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="log in"
            content= {content}
        />
    )

}
export default LoginModal;