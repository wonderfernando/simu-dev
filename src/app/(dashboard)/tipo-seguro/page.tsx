import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { TableInsureType } from "./TableInsureType"
import { DialogSavaInsureType } from "./DialogSaveInsureType"
import { GET_APOLICE_TYPE, GET_INSURE_TYPE } from "@/app/API"
import { SearchParamProps } from "../categorias/page"
import { SearchForm } from "../SearchForm"


export default async function InsureTypePage({ searchParams }: SearchParamProps) {

    const { search } = await searchParams
    
    let insureType = await GET_INSURE_TYPE()
    console.log(insureType)
    if (search) {
        const query = search as unknown as string
        insureType = insureType.filter((insure) => insure.name?.toLowerCase().includes(query.toLowerCase()))
        console.log(insureType)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Tipos de seguro</h1>
                    <SearchForm route="tipo-seguro" />
                </div>
                <DialogSavaInsureType>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]">Cadastrar <Plus /></Button>
                </DialogSavaInsureType>
            </div>
            <Card>
                <CardContent>
                    <TableInsureType insureType={insureType} />
                </CardContent>
            </Card>
        </div>
    )
}