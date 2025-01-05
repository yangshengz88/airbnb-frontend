import Image from "next/image";

export default function Categories(){
    return (
        <div className="pt-6 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
                <Image src="/amazing_pools.jpg" alt = " Category-Amazing Pools" width={20} height={20}/>
                <span className="text-xs">Amazing pools</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
                <Image src="/luxe.jpg" alt = " Category-Luxe" width={20} height={20}/>
                <span className="text-xs">Luxe</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
                <Image src="/amazing_views.jpg" alt = " Category-Amazing Views" width={20} height={20}/>
                <span className="text-xs">Amazing views</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
                <Image src="/beach_front.jpg" alt = " Category- Amazing Pools" width={20} height={20}/>
                <span className="text-xs">Beachfront</span>
            </div>
        </div>
    );
}