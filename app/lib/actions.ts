'use server'
import { cookies } from 'next/headers';

export async function handleLogin( userId: string, accessToken: string, refreshToken: string){
    (await cookies()).set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.MODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });
    (await cookies()).set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.MODE_ENV === 'production',
        maxAge: 60 * 60,
        path: '/'
    });
    (await cookies()).set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.MODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });
}

export async function resetAuthCookies(){
    (await cookies()).set('session_userid', '');
    (await cookies()).set('session_access_token', '');
    (await cookies()).set('session_refresh_token', '');
}

// Get data
export async function getUserId(){
    const userId = (await cookies()).get('session_userid')?.value;
    return userId ? userId : null;
}

export async function getAccessToken(){
    let accessToken = (await cookies()).get('session_access_token')?.value;
    return accessToken;
}