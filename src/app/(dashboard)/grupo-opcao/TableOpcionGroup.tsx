"use client"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { EyeIcon, PencilIcon, Settings, Trash2 } from "lucide-react"
import { ReactNode, useState } from "react"
import DialogDeleteQuestion from "./DialogDeleteGrupoOpcao"
import DialogEditCategory, { Category } from "./DialogEditGrupoOpcao"
import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useQuery } from "@tanstack/react-query"
import { GET_CATEGORIES, GET_GROUP_OPTIN } from "@/app/API"
import { Badge } from "@/components/ui/badge"
import { SheetGroup } from "./group"
export interface group {
    id: string,
    name: string,
    description: string
}

interface CategoryListProps {
    group: group[]
}

export default function TableOpcionGroup({ group: data }: CategoryListProps) {
    const [openModal, setOpenModal] = useState(false)
    const [selectedCategory] = useState<string | null>(null)
    const { data: categories, isLoading, isError, error } = useQuery({
        initialData: data,
        queryKey: ["get-grupo"],
        queryFn: GET_GROUP_OPTIN
    })
    return (
        <>
            <Table>
                <TableCaption>Lista de grupos de opções</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Grupo</TableHead>
                        <TableHead>Requerido</TableHead>
                        <TableHead>Opcoes</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((cat: any, index: number) => (
                        <TableRow key={cat.id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell className="font-medium">{cat.name}</TableCell>
                            <TableCell><Badge variant={`${cat.required ? "destructive" : "default"}`}>{cat.required ? "Sim" : "Não"}</Badge></TableCell>
                            <TableCell>
                                 fd
                            </TableCell>
                            <TableCell>
                            </TableCell>
                            <TableCell>
                                <PopoverSettingButton category={cat} id={cat.id}>
                                    <Button className="py-0 px-0 h-8 w-8" variant={"outline"}><Settings /> </Button>
                                </PopoverSettingButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </>
    )
}

interface PopoverProps {
    id: string,
    children: ReactNode,
    category: Category
}
export function PopoverSettingButton({ children, id, category }: PopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <div className="gap-4 flex flex-col items-start">
                    <DialogEditCategory id={id} categoria={category}>
                        <Button variant={"outline"}>Editar <PencilIcon className="" /></Button>
                    </DialogEditCategory>
                    <DialogDeleteQuestion id={id}>
                        <Button variant={"outline"}>Apagar <Trash2 className="text-red-400" /></Button>
                    </DialogDeleteQuestion>
                </div>
            </PopoverContent>
        </Popover>)
}

