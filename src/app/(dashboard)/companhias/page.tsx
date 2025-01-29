import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { TableCompanhias } from "./TableCompanhias"
import { DialogSaveCompanhia } from "./DialogSaveCampanhia"
import { GET_COMPANHIAS } from "@/app/API"
import { SearchForm } from "../SearchForm"


export default async function Categoria({ searchParams }: SearchParamProps) {
    const { search } = await searchParams

    let companhias = await GET_COMPANHIAS()
    if (search) {
        const query = search as unknown as string
        companhias = companhias.filter((companhia) => companhia.name.toLowerCase().includes(query.toLowerCase()))
        console.log(companhias)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between gap-2">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Companhias</h1>
                    <SearchForm route="companhias" />
                </div>
                <DialogSaveCompanhia>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]"><span className="hidden md:flex items-start">Cadastrar</span> <Plus /></Button>
                </DialogSaveCompanhia>
            </div>
            <Card>
                <CardContent>
                    <TableCompanhias companhias={companhias} />
                </CardContent>
            </Card>
        </div>
    )
}

export type SearchParamProps = {
    searchParams: Promise<{ [key: string]: string | undefined }>
}