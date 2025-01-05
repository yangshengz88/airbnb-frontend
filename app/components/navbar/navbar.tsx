import Link from "next/link";
import Image from "next/image";
import SearchFilters from "./search-filter";
import UserNav from "./user-nav";
import AddPropertyButton from "./add-property-button";

export default function Navbar(){
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src="/airbnb_logo.svg" 
                            alt = "Airbnb Logo"
                            width={180}
                            height={38}
                        />
                    </Link>

                    <div className="flex space-x-6">
                        <SearchFilters/>
                       
                    </div>

                    <div className="flex items-center space-x-6">
                        <AddPropertyButton/>
                        <UserNav/>
                    </div>
                </div>
            </div>
        </nav>
    )
}