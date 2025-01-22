'use client';

import React from "react";
import useLoginModal from "../hooks/use-login-modal";
import { useRouter } from "next/navigation";
import apiService from "../services/api-service";
import { Router } from "next/router";


interface ContactButtonProps{
    userId: string | null;
    landlordId: string;
}

const ContactButton: React.FC<ContactButtonProps>=({
    userId,
    landlordId
})=>{
    const loginModal = useLoginModal();
    const router = useRouter();
    const startConversation=async ()=>{
        if (userId){
            const conversation = await apiService.get(`/api/chat/start/${landlordId}/`)
            if (conversation.conversation_id){
                router.push(`/inbox/${conversation.conversation_id}`)
            }
        }
        else {
            loginModal.open();
        }
    }
    return (
        <div 
            className="mt-6 py-4 px-6 cursor-pointer bg-airbnb text-white rounded-xl hover:bg-airbnb-dark transition"
            onClick={startConversation}
        >
            Contact
        </div>
    );
}
export default ContactButton;