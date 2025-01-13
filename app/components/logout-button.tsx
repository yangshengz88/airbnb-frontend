'use client';

import { useRouter } from "next/navigation";
import MenuLink from "./navbar/menu-link";
import { resetAuthCookies } from "../lib/actions";

const LogoutButton: React.FC= ()=>{
    const router = useRouter();
    const submitLogout = async ()=>{
        resetAuthCookies();
        router.push('/');

    }
    return (
        <MenuLink
            label="Log out"
            onClick={submitLogout}
        />
    )
}

export default LogoutButton