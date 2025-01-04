import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"

import { GET_APOLICE_TYPE, GET_CATEGORIES } from "@/app/API"
import { Input } from "@/components/ui/input"
import {DialogSaveApoliceType} from "./DialogSaveApoliceType"
import { TableApolice } from "./TableApolice"

export default async function ApoliceType() {

    
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Tipo de apolices</h1>
                    <div className="flex relative w-full">
                        <Input className="rounded-xl p-6" placeholder="Procurar" />
                        <SearchIcon size={24} className="text-zinc-500 absolute right-2 -translate-y-1/2 top-1/2" />
                    </div>

                </div>
                <DialogSaveApoliceType>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]">Cadastrar <Plus /></Button>
                </DialogSaveApoliceType>
            </div>
            <Card>
                <CardContent>
                    <TableApolice apolices={[]} />
                </CardContent>
            </Card>
        </div>
    )
}