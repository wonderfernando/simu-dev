import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { TableInsure } from "./TableInsure"
import { GET_INSURES } from "@/app/API"
import { DialogSaveInsure } from "./DialogSaveInsure"
import { SearchForm } from "../SearchForm"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { SearchParamProps } from "../categorias/page"


export default async function Categoria({ searchParams }: { searchParams: Record<string, string | undefined> }) {    let insures = await GET_INSURES()
    const { search } = await searchParams
   
    if (search) {
        const query = search as unknown as string
        insures = insures.filter((insure) => insure.name.toString().toLowerCase().includes(query.toLowerCase()|| ""))
        console.log(insures)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between gap-2">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Seguros</h1>
                    <SearchForm route="seguros" />
                </div>
                <DialogSaveInsure>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]"><span className="hidden md:flex items-start">Cadastrar</span> <Plus /></Button>
                </DialogSaveInsure>
            </div>
            <Card>
                <CardContent>
                    <ScrollArea className="md:w-[calc(100vw-350px)]">
                        <TableInsure insures={insures} />
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}