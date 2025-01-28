import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { TableGroupPermission } from "./TableGroupPermission"
import { DialogSaveGroupPermission } from "./DialogSaveGroupPermission"
import {  GET_GROUP_PERMISSION, GET_PERMISSION } from "@/app/API"
import { SearchForm } from "../SearchForm"


export default async function PermissionPage({ searchParams }: SearchParamProps) {
    const { search } = await searchParams
    console.log(search)
    let permission = await GET_GROUP_PERMISSION()
    if (search) {
        const query = search as unknown as string
        permission = permission.filter((permiss) => permiss.name.toLowerCase().includes(query.toLowerCase()))
        console.log(permission)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between gap-2">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Grupo de permissões</h1>
                    <SearchForm route="grupos-permissao" />
                </div>
                <DialogSaveGroupPermission>
                    <Button type="button" className="bg-[#e67d06] hover:bg-[#a74e0b]"><span className="hidden md:flex items-start">Cadastrar</span> <Plus /></Button>
                </DialogSaveGroupPermission>
            </div>
            <Card>
                <CardContent>
                    <TableGroupPermission group={permission} />
                </CardContent>
            </Card>
        </div>
    )
}

export type SearchParamProps = {
    searchParams: Promise<{ [key: string]: string | undefined }>
}