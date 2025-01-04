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
import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useQuery } from "@tanstack/react-query"
import { GET_CATEGORIES, GET_INSURES } from "@/app/API"
import { Category } from "../categorias/DialogEditCategory"
import DialogEditInsure from "./DialogEditInsure"
import DialogDeleteInsure from "./DialogDeleteInsure"
import { SheetGroup } from "../grupo-opcao/group"

export interface CategoriaProps {
    id: string,
    name: string,
    description: string
}

interface CategoryListProps {
    insures: CategoriaProps[]
}

export default function TableInsure({ insures: data }: CategoryListProps) {
    const [openModal, setOpenModal] = useState(false)
    const [selectedCategory] = useState<string | null>(null)
    const { data: categories, isLoading, isError, error } = useQuery({
        initialData: data,
        queryKey: ["get-seguros"],
        queryFn: GET_INSURES
    })
    return (
        <>
            <Table>
                <TableCaption>Lista de seguros</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Seguro</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Coberturas</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((cat, index) => (
                        <TableRow key={cat.id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{cat.name}</TableCell>
                            <TableCell>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <span className="w-64 truncate cursor-pointer">{cat.description.length > 50 ? cat.description.slice(0, 50) + "..." : cat.description}</span>
                                    </TooltipTrigger>
                                    <TooltipContent className="w-96">
                                        <span className="overflow-hidden text-ellipsis">{cat.description}</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TableCell>
                            <TableCell>
                                <SheetGroup insure_id={cat.id}>
                                    <Button variant="outline">12 <EyeIcon /></Button>
                                </SheetGroup>
                            </TableCell>

                            <TableCell>
                                <PopoverSettingButton category={cat} id={cat.id}>
                                    <Button className="py-0 px-0 h-8 w-8" variant={"outline"}><Settings /> </Button>
                                </PopoverSettingButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
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
                    <DialogEditInsure id={id} categoria={category}>
                        <Button variant={"outline"}>Editar <PencilIcon className="" /></Button>
                    </DialogEditInsure>
                    <DialogDeleteInsure id={id}>
                        <Button variant={"outline"}>Apagar <Trash2 className="text-red-400" /></Button>
                    </DialogDeleteInsure>
                </div>
            </PopoverContent>
        </Popover>)
}

