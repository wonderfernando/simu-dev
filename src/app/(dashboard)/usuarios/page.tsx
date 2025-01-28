import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { TableUser } from "./TableUsers"
import { GET_USERS } from "@/app/API"
import { SearchForm } from "../SearchForm"
import Link from "next/link"


export default async function PermissionPage({ searchParams }: SearchParamProps) {
    const { search } = await searchParams
    console.log(search)
    let users = await GET_USERS()
    if (search) {
        const query = search as unknown as string
        users = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
        console.log(users)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between gap-2">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Usuarios</h1>
                    <SearchForm route="usuarios" />
                </div>
                <Link href="/usuarios/new"><Button className="bg-[#e67d06] hover:bg-[#a74e0b]"><span className="hidden md:flex items-start">Cadastrar</span> <Plus /></Button></Link>
            </div>
            <Card>
                <CardContent>
                    <TableUser users={users} />
                </CardContent>
            </Card>
        </div>
    )
}

export type SearchParamProps = {
    searchParams: Promise<{ [key: string]: string | undefined }>
}