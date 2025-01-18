'use client';

import useAddPropertyModal from "@/app/hooks/use-add-property-modal"
import useLoginModal from "@/app/hooks/use-login-modal";
import React from "react";

interface AddPropertyButtonProps {
    userId?: string | null;
}
const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) =>{
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();
    const airbnbYourHome =  ()=> {
        if (userId){
            addPropertyModal.open();
        }
        else{
            loginModal.open();
        }
    }
    return (
        <div 
            className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200"
            onClick ={airbnbYourHome}
        >
            Airbnb your home
        </div>
    )
}

export default AddPropertyButton;