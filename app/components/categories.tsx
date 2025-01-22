'use client'
import Image from "next/image";
import useSearchModal, { SearchQuery } from "../hooks/use-search-modal";
import { useState } from "react";

export default function Categories(){
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');
    const _setCategory = (_category: string)=>{
        setCategory(_category);
        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }
        searchModal.setQuery(query);
    }

    
    return (
        <div className="pt-6 cursor-pointer pb-6 flex items-center space-x-12">
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == ''? 'border-black': 'border-white'} opacity-60 hover:opacity-100`}
                onClick={()=>_setCategory('')}
            >
                <Image src="/amazing_pools.jpg" alt = " Category-Amazing Pools" width={20} height={20}/>
                <span className="text-xs">All</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'amazing_pools'? 'border-black': 'border-white'} opacity-60 hover:opacity-100`}
                onClick={()=>_setCategory('amazing_pools')}
            >
                <Image src="/amazing_pools.jpg" alt = " Category-Amazing Pools" width={20} height={20}/>
                <span className="text-xs">Amazing pools</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'luxe'? 'border-black': 'border-white'} opacity-60 hover:opacity-100`}
                onClick={()=>_setCategory('luxe')}
            >                
                <Image src="/luxe.jpg" alt = " Category-Luxe" width={20} height={20}/>
                <span className="text-xs">Luxe</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'amazing_views'? 'border-black': 'border-white'} opacity-60 hover:opacity-100`}
                onClick={()=>_setCategory('amazing_views')}
            >                
                <Image src="/amazing_views.jpg" alt = " Category-Amazing Views" width={20} height={20}/>
                <span className="text-xs">Amazing views</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'beachfront'? 'border-black': 'border-white'} opacity-60 hover:opacity-100`}
                onClick={()=>_setCategory('beachfront')}
            >                
                <Image src="/beach_front.jpg" alt = " Category- Amazing Pools" width={20} height={20}/>
                <span className="text-xs">Beachfront</span>
            </div>
        </div>
    );
};