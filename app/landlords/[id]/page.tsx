import ContactButton from "@/app/components/contact-button";
import PropertyList from "@/app/components/properties/property-list";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/api-service";
import Image from "next/image";
import { Suspense } from "react";


type Params = Promise<{ id: string }>
export default async function LandlordDetailPage({ params}: {params: Params}){
    const {id} = await params;
    const landlord = await apiService.get(`/api/auth/${id}`)
    const userId = await getUserId();

    return (
        
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            src={landlord.avatar_url}
                            width={200}
                            height={200}
                            alt="Landlord profile"
                            className="rounded-full"
                        />
                        <h1 className="mt-6 text-2xl">{landlord.name}</h1>
                        {userId != id && (
                            <ContactButton
                                userId={userId}
                                landlordId={landlord.id}
                            
                            />
                        )}
                        
                    </div>
                    
                </aside>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Suspense>
                            <PropertyList landlord_id= {id}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </main>
    );
}