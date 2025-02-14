'use client'
import React, { useState} from "react"
import MenuLink from "./menu-link"
import useLoginModal from "@/app/hooks/use-login-modal"
import LoginModal from "../modals/login-modal";
import useSignupModal from "@/app/hooks/use-signup-modal";
import LogoutButton from "../logout-button";
import { useRouter } from "next/navigation";
import ProfileModal from "../modals/profile-modal";
import useProfileModal from "@/app/hooks/use-profile-modal";


interface UsernavProps {
    userId?: string | null;

}

const UserNav: React.FC<UsernavProps>=  (
    {userId}
)=>
    {
    const loginModal = useLoginModal();
    const signupModal = useSignupModal();
    const profileModal = useProfileModal();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button 
                className="flex items-center"
                onClick={()=> setIsOpen(!isOpen)}
            >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>

            {isOpen &&(
                <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
                    {userId ? (
                        <>
                            <MenuLink
                                label='Inbox'
                                onClick={()=>{
                                    setIsOpen(false);
                                    router.push('/inbox')
                                }}
                            />
                            <MenuLink
                                label='My properties'
                                onClick={()=>{
                                    setIsOpen(false);
                                    router.push('/myproperties')
                                }}
                            />
                            <MenuLink
                                label='My reservations'
                                onClick={()=>{
                                    setIsOpen(false);
                                    router.push('/myreservations')
                                }}
                            />

                            <MenuLink
                                label='My favorites'
                                onClick={()=>{
                                    setIsOpen(false);
                                    router.push('/myfavorites')
                                }}
                            />
                            <MenuLink
                                label='Edit profile'
                                onClick={()=>{
                                    setIsOpen(false);
                                    profileModal.open();
                                }}
                            />
                            <LogoutButton/>

                        </>

                    ): (
                    <>
                        <MenuLink
                            label="Log in"
                            onClick={()=>{
                                setIsOpen(false);
                                loginModal.open();
                            }}
                        />
                        <MenuLink
                            label="Sign up"
                            onClick={()=>{
                                setIsOpen(false);
                                signupModal.open();
                            }}
                        />
                    </>
                    )}
                </div>

            )}
        </div>
    
    );
}

export default UserNav;