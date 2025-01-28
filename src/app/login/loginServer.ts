"use server"

import { cookies } from "next/headers";  
const URL2 = "https://simulator-auth.mtapp.ao/api"

export async function loginServer({email, password}: {email: string, password: string}) {
    const response = await fetch(`${URL2}/login`, {
        method: "POST",
        credentials: "include",

        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    const data = await response.json();
    if (data.success === false) {
        throw new Error("senha ou email errado!");
    }
    const ck = await cookies();
    console.log(data)
    ck.set("auth_token", data.user.token, { sameSite: "strict",httpOnly:true, secure: false });
   return {success: true}
}