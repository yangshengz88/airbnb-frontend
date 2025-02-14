'use client'
import Modal from "./modal";
import { ChangeEvent, useState } from "react";
import CustomButton from "../forms/custom-buttom";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/api-service";
import Image from "next/image";
import useProfileModal from "@/app/hooks/use-profile-modal";

const ProfileModal = ()=>{

    const [dataName, setDataName] = useState('');
    const [dataAvatar, setDataAvatar] = useState<File |null>(null);
   
    const [errors, setErrors] = useState<string[]>([]);
    const router = useRouter();
    const profileModal = useProfileModal();

    
    const setAvatar = (event:ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files &&event.target.files.length >0 ){
            const tmpAvatar = event.target.files[0];
            setDataAvatar(tmpAvatar);
        }
    }
    
    //submit profile
    const submitForm = async()=>{
        console.log('submitProfileForm');
        if(
            dataName &&
            dataAvatar
        ){
            const formData = new FormData();
            formData.append('name', dataName);
            formData.append('avatar', dataAvatar);

            const response= await apiService.post('/api/auth/profile/', formData);

            if(response.success){
                console.log("Success!  ")
                router.push('/?updated=True');
                profileModal.close();

            }else{
                
                console.log('Error');
                const tmpErrors : string[]= Object.values(response).map((error:any)=>{
                    return error;
                })
                setErrors(tmpErrors);
            }

        }

    }

    const content= (

        <>
            
                    <h2 className= 'mb-6 text-2xl'>Set your username</h2>   
                    <div className='pt-3 pb-6 space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <input 
                                className='w-full p-4 border border-gray-600 rouned-xl'
                                type="string"
                                value={dataName}
                                onChange={(e)=>setDataName(e.target.value)}
                            />
                        </div> 
                       
                    </div> 
                    <h2 className= 'mb-6 text-2xl'>Your Image</h2>
                    <div className='pt-3 pb-6 space-y-4'>
                        <div className='py-4 px-6 bg-gray-600 text-white rounded-xl'>
                            <input 
                                type="file"
                                accept='image/*'
                                onChange={setAvatar}
                            />
                        </div>
                        {dataAvatar && (
                            <div className= 'w-[200px] h-[150px] relative'>
                                <Image
                                    className='w-full h-full object-cover rounded-xl'
                                    fill
                                    alt ="Upload avatar"
                                    src={URL.createObjectURL(dataAvatar)}
                                />
                            </div>
                        )}
                    </div>
                        
                    <CustomButton
                        label='Save'
                        onClick={submitForm}
                    />  
           
        </>
    )

    return (
        <Modal
            isOpen={profileModal.isOpen}
            close={profileModal.close}
            label="my profile"
            content= {content}
        />
    )

}
export default ProfileModal;