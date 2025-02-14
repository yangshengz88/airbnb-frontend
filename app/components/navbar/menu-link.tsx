'use client'

import React from "react";

interface MenuLinkProps{
    label: string;
    onClick: () => void;

}

const MenuLink: React.FC<MenuLinkProps> = ({label, onClick})=>{
    return (
        <div 
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
            onClick={onClick}
        >
            {label}
        </div>
    );

}



export default MenuLink;