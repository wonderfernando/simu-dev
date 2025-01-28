import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"

import { GET_APOLICE_TYPE, GET_CATEGORIES } from "@/app/API"
import { Input } from "@/components/ui/input"
import { DialogSaveApoliceType } from "./DialogSaveApoliceType"
import { TableApolice } from "./TableApolice"
import { SearchParamProps } from "../categorias/page"
import { SearchForm } from "../SearchForm"

export default async function ApoliceType({ searchParams }: SearchParamProps) {
    const { search } = await searchParams
    console.log(search)
    let apolices = await GET_APOLICE_TYPE()
    if (search) {
        const query = search as unknown as string
        apolices = apolices.filter((apolice) => apolice.name.toLowerCase().includes(query.toLowerCase()))
        console.log(apolices)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Tipos de apolices</h1>
                    <SearchForm route="tipo-apolice" />
                </div>
                <DialogSaveApoliceType>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]">Cadastrar <Plus /></Button>
                </DialogSaveApoliceType>
            </div>
            <Card>
                <CardContent>
                    <TableApolice apolices={apolices} />
                </CardContent>
            </Card>
        </div>
    )
}