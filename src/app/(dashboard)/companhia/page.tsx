import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"

import { GET_CATEGORIES } from "@/app/API"
import { Input } from "@/components/ui/input"
import {DialogSaveCategory} from "./DialogSaveCategory"
import {TableCategory} from "./TableCategory"


export default async function CompanhiaPage() {
    const categorias = await new Promise((resolve, reject) => { setTimeout(() => resolve([]), 2000) })
    console.log(categorias)
    return (
        <div className="fflex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Companhia</h1>
                    <div className="flex relative w-full">
                        <Input className="rounded-xl p-6" placeholder="Procurar" />
                        <SearchIcon size={24} className="text-zinc-500 absolute right-2 -translate-y-1/2 top-1/2"/>
                    </div>

                </div>
                <DialogSaveCategory>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]">Cadastrar <Plus /></Button>
                </DialogSaveCategory>
            </div>
            <Card>
                <CardContent>
                    <TableCategory categories={[]} />
                </CardContent>
            </Card>
        </div>
    )
}