import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Sair() {
    const cookieStore = await cookies();
   const res = cookieStore.delete('auth_token');
   if (res) 
    redirect('/login');

    return (
        <></>
    )
}   