'use client';
import useSearchModal, { SearchQuery } from "@/app/hooks/use-search-modal";
import Modal from "./modal";
import DatePicker from "../properties/calendar";
import { Range} from "react-date-range";
import { useState } from "react";
import SelectCountry, { SelectCountryValue } from "../forms/select-country";
import CustomButton from "../forms/custom-buttom";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
}
const SearchModal = ()=>{
    let content = (<></>);
    const searchModal = useSearchModal();
    const [numGuests, setNumGuests] = useState<string>('1');
    const [numBedrooms, setNumBedrooms] = useState<string>('0');
    const [numBathrooms, setNumBathrooms] = useState<string>('0');
    const [country, setCountry] =useState<SelectCountryValue>();
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    
    // 
    const closeAndSearch = () =>{
        const newSearchQuery: SearchQuery = {
            country: country?.label,
            checkIn: dateRange.startDate,
            checkOut:dateRange.endDate,
            guests: parseInt(numGuests),
            bedrooms: parseInt(numBedrooms),
            bathrooms: parseInt(numBathrooms),
            category: ''


        }
        searchModal.setQuery(newSearchQuery);
        searchModal.close()

    }
    // Set date range
    const _setDateRange = (selection: Range)=>{
        if(searchModal.step ==='checkin'){
            searchModal.open('checkout');
        }
        else if ( searchModal.step == 'checkout'){
            searchModal.open('details');
        }
        setDateRange(selection);
    }

    // Set the content
    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Where would you like to go?</h2>
            <SelectCountry
                value={country}
                onChange={(value)=>setCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label={"Check-in Date ->"} 
                    onClick={() => searchModal.open('checkin')} 
                />                   
            </div>
        </>
    )

    const contentCheckin= (
        <>
            <h2 className="mb-6 text-2xl">When would you like to check in?</h2>
            <DatePicker   
                value={dateRange}
                onChange={(value)=> _setDateRange(value.selection)}
            />
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label={"<- Location"} 
                    onClick={() => searchModal.open('location')} 
                />       
                <CustomButton 
                    label={"Check-out Date ->"} 
                    onClick={() => searchModal.open('checkout')} 
                />                   
            </div>
        </>
    )

    const contentCheckout= (
        <>
            <h2 className="mb-6 text-2xl">When would you like to check out?</h2>
            <DatePicker   
                value={dateRange}
                onChange={(value)=> _setDateRange(value.selection)}
            />
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label={"<- Check-in Date"} 
                    onClick={() => searchModal.open('checkin')} 
                />       
                <CustomButton 
                    label={"Details ->"} 
                    onClick={() => searchModal.open('details')} 
                />                   
            </div>
        </>
    )
    const contentDetails= (
        <>
            <h2 className="mb-6 text-2xl">Details</h2>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label>Number of guests:</label>
                    <input 
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                        type="number" 
                        min="1" 
                        value={numGuests} 
                        onChange={(e)=>setNumGuests(e.target.value)}
                    />
                </div>
                <div className="space-y-4">
                    <label>Number of bedrooms:</label>
                    <input 
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                        type="number" 
                        min="0" 
                        value={numBedrooms}
                        onChange={(e)=>setNumBedrooms(e.target.value)}
                    />
                </div>
                <div className="space-y-4">
                    <label>Number of bathrooms:</label>
                    <input 
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                        type="number" 
                        min="1" 
                        value={numBathrooms}
                        onChange={(e)=>setNumBathrooms(e.target.value)}
                    />
                </div>
            </div>

            
            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label={"<- Check-out Date"} 
                    onClick={() => searchModal.open('checkout')} 
                />       
                <CustomButton 
                    label={"Search"} 
                    onClick={closeAndSearch} 
                />                   
            </div>
        </>
    )


    if (searchModal.step== 'location'){
        content = contentLocation;
    }
    else if (searchModal.step == 'checkin'){
        content= contentCheckin;
    }
    else if (searchModal.step == 'checkout'){
        content= contentCheckout;
    }
    else if (searchModal.step == 'details'){
        content= contentDetails;
    }

    return (
        <Modal
            label="Search"
            content={content}
            close={searchModal.close}
            isOpen={searchModal.isOpen}
        />

    )
}

export default SearchModal;