import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"
import { TableCategory } from "./TableCategory"
import { DialogSaveCategory } from "./DialogSaveCategory"
import { Input } from "@/components/ui/input"
import { GET_CATEGORIES } from "@/app/API"
import { FormEvent } from "react"
import { redirect } from "next/navigation"
import { SearchForm } from "../SearchForm"


export default async function Categoria({ searchParams }: SearchParamProps) {
    const {search} = await searchParams
    console.log(search)
    let categorias = await GET_CATEGORIES()
    if (search) {
        categorias = categorias.filter((categoria) => categoria.name.includes(search as unknown as string || ""))
        console.log(categorias)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between gap-2">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Categorias</h1>
                    <SearchForm route="categorias" />
                </div>
                <DialogSaveCategory>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]"><span className="hidden md:flex items-start">Cadastrar</span> <Plus /></Button>
                </DialogSaveCategory>
            </div>
            <Card>
                <CardContent>
                    <TableCategory categories={categorias} />
                </CardContent>
            </Card>
        </div>
    )
}

export interface SearchParamProps{
    [key: string]: string | undefined 
}