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
import { PencilIcon, Settings, Trash2 } from "lucide-react"
import { ReactNode, useState } from "react"

import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import {useQuery} from "@tanstack/react-query"
import { Category, GET_CATEGORIES } from "@/app/API"
import { DialogEditCategory } from "./categorias/DialogEditCategory"
import { DialogDeleteQuestion } from "./categorias/DialogDeleteCategory"
export interface CategoriaProps {
    id: string,
    name: string,
    description	: string
}

interface CategoryListProps {
    categories: CategoriaProps[]
}

export function TableCategory({categories: data} : CategoryListProps) {
    const [openModal, setOpenModal] = useState(false)
    const [selectedCategory] = useState<string | null>(null)
   const {data: categories, isLoading, isError, error} = useQuery({
    initialData: data,
    queryKey: ["get-categories"],
    queryFn: GET_CATEGORIES
   })
    return (
        <>
        <Table>
            <TableCaption>Lista de Categorias de seguros</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Descrição</TableHead>

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

interface PopoverProps{
    id: string, 
    children: ReactNode,
    category:Category
}
export function PopoverSettingButton({ children, id, category  }:PopoverProps) {
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

