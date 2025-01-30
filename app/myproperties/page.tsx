import { Suspense } from "react";
import PropertyList from "../components/properties/property-list";
import { getUserId } from "../lib/actions";

export default async function MyPropertiesPage(){
    const userId = await getUserId();


    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My properties</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Suspense>
                    <PropertyList landlord_id={userId}/>
                </Suspense>

            </div>
        </main>
    );
}