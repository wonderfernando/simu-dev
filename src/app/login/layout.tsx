import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) 
{
    /* const cookieStore = await cookies();
    const getCoockie = cookieStore.get('auth_token');
    if (getCoockie) {
       redirect('/');
    } */
    /* console.log(getCoockie); */
    return (
         children 
    );
}   