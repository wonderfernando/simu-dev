"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginServer() {
    const response = await fetch("http://192.168.1.35:8000/api/login", {
        method: "POST",
        credentials: "include",

        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            email: "marcelosetula@gmail.com",
            password: "password",
        }),
    });
    const data = await response.json();
    const ck = await cookies();
    console.log(data.data.token)
    ck.set("auth_token", data.data.token, { sameSite: "strict",httpOnly:true, secure: false });
   return redirect("/");
}