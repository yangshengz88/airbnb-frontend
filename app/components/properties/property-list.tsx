'use client';
import { useEffect, useState } from 'react';
import PropertyListItem from "./property-list-item";
import apiService from '@/app/services/api-service';

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}
export default function PropertyList(){
    const [properties, setProperties] = useState<PropertyType[]>([ ]);
    const getProperties = async () => {
        const tmpProperties =await apiService.get("/api/properties") 
        setProperties(tmpProperties.data);
    };
    useEffect(()=>{
        getProperties();

    }, []);
    return (
        <>
            {properties.map((property)=>{
                return (
                    <PropertyListItem
                        key={property.id}
                        property={property}
                    />

                )
            })}
            

        </>
    );
}