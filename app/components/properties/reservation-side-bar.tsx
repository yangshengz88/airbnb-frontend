'use client';

import useLoginModal from "@/app/hooks/use-login-modal";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import React, { useEffect, useState } from "react";
import {Range} from "react-date-range";
import DatePicker from "./calendar";
import apiService from "@/app/services/api-service";
import CustomButton from "../forms/custom-buttom";


const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
}

export type Property = {
    id: string;
    price_per_night: number;
    guests: number;
}

interface ReservationSideBarProps {
    userId: string | null,
    property: Property,
}

const ReservationSideBar: React.FC<ReservationSideBarProps>=({
    property,
    userId
})=> {
    const loginModal = useLoginModal();
    const [fee, setFee] = useState<number>(0);
    const [nights, setNights] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [minDate, setMinDate] = useState<Date>(new Date());
    const [bookedDates, setBookedDates] = useState<Date[]>([]);
    const [guests, setGuests] = useState<string>('1');
    const guestsRange = Array.from({length:property.guests}, (_, index)=> index + 1)

    const performBooking = async () =>{
        if(userId){
            if(dateRange.startDate && dateRange.endDate){
                const formData = new FormData();
                formData.append('guests', guests);
                formData.append('start_date', format(dateRange.startDate, 'yyyy-MM-dd'));
                formData.append('end_date', format(dateRange.endDate, 'yyyy-MM-dd'));
                formData.append('number_of_nights', nights.toString());
                formData.append('total_price', totalPrice.toString());
                try{
                    const response = await apiService.post(`/api/properties/${property.id}/book/`, formData);
                    if(response.success){
                        console.log('booking successfully');
                    }
                    else{
                        console.log('something went wrong');
                    }

                }catch (error){ 
                    console.error('Error during booking:', error);
                }
            }
        }
        else{
            loginModal.open();
        }
    }
    const _setDateRange = (selection:any) =>{
        const newStartDate = new Date(selection.startDate);
        const newEndDate = new Date(selection.endDate);

        if (newEndDate <= newStartDate){
            newEndDate.setDate(newStartDate.getDate() + 1);
        }
        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate
        })
    }

    const getReservations = async ()=>{
        const reservations = await apiService.get(`/api/properties/${property.id}/reservations/`)
        let dates: Date[] = [];

        reservations.forEach((reservation: any) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.start_date),
                end: new Date(reservation.end_date)
            });
            dates = [...dates, ...range];

        });
        setBookedDates(dates);
    }


    useEffect(()=>{
        getReservations();
        if (dateRange.startDate && dateRange.endDate ){
            const dayCount = differenceInDays(
                dateRange.endDate,
                dateRange.startDate
            );
            if (dayCount && property.price_per_night){
                const _fee = ((dayCount * property.price_per_night)/100)* 5;
                setFee(_fee);
                setTotalPrice((dayCount * property.price_per_night) + _fee);
                setNights(dayCount);
            }
            else{
                const _fee = (property.price_per_night/100)* 5;
                setFee(_fee);
                setTotalPrice( property.price_per_night + _fee);
                setNights(1);                
            }
        }

    }, [dateRange])

    return (
        <aside className="mt-4 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">${property.price_per_night} per night</h2>
            
            <DatePicker
                value={dateRange}
                bookedDates={bookedDates}
                onChange={(value)=>_setDateRange(value.selection)}
            />
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>
                <select 
                    className="w-full -ml-1 text-xm"
                    value={guests}
                    onChange={(e)=>setGuests(e.target.value)}
                >
                        {guestsRange.map(number=>(
                            <option key={number} value ={number}>{number}</option>
                        ))}
                </select>
            </div>

            <CustomButton
                    label="Book"
                    className="w-[100px] mb-6 py-6"
                    onClick={performBooking}
                    
                />
            <div className="mb-4 flex justify-between align-center">
                <p>${property.price_per_night} * {nights} nights</p>
                <p>${property.price_per_night * nights}</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>airbnb fee</p>
                <p>${fee}</p>
    
            </div>
            <hr/>
            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>${totalPrice}</p>

            </div>
        </aside>
    );
}

export default ReservationSideBar;