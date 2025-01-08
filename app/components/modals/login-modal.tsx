'use client'
import Modal from "./modal";
import { useState } from "react";
import CustomButton from "../forms/custom-buttom";
import useLoginModal from "@/app/hooks/use-login-modal";
const LoginModal = ()=>{

    const loginModal= useLoginModal()
    const content= (
        <>
        <form className="space-y-4">
            <input placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
            <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                The error message
            </div>
            <CustomButton
                label="Submit"
                onClick={()=>console.log("TEST")}
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