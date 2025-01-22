import Image from "next/image";
interface CategoriesProps{
    dataCategory: string;
    setCategory: (category:string)=> void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
})=>{
    return (
        <div className="pt-6 cursor-pointer pb-6 flex items-center space-x-12">
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Amazing pools' ? 'border-gray-800': 'border-white'} opacity-60 hover: border-gray-200 hover:opacity-100`}
                onClick={()=> setCategory('amazing_pools')}
            >
                <Image src="/amazing_pools.jpg" alt = " Category-Amazing Pools" width={20} height={20}/>
                <span className="text-xs">Amazing pools</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'luxe' ? 'border-gray-800': 'border-white'} opacity-60 hover: border-gray-200 hover:opacity-100`}
                onClick={()=> setCategory('luxe')}
            >
                <Image src="/luxe.jpg" alt = " Category-Luxe" width={20} height={20}/>
                <span className="text-xs">Luxe</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Amazing views' ? 'border-gray-800': 'border-white'} opacity-60 hover: border-gray-200 hover:opacity-100`}
                onClick={()=> setCategory('amazing_views')}
            >
                <Image src="/amazing_views.jpg" alt = " Category-Amazing Views" width={20} height={20}/>
                <span className="text-xs">Amazing views</span>
            </div>
            <div 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'beach front' ? 'border-gray-800': 'border-white'} opacity-60 hover: border-gray-200 hover:opacity-100`}
                onClick={()=> setCategory('beachFront')}
            >
                <Image src="/beach_front.jpg" alt = " Category- Amazing Pools" width={20} height={20}/>
                <span className="text-xs">Beachfront</span>
            </div>
        </div>
    )
}
export default Categories;