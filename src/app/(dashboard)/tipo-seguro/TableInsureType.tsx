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
import { ReactNode, useEffect, useState } from "react"
import DialogEditCategory, { Category } from "./DialogEditInsureType"
import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { GET_CATEGORIES, GET_INSURE_TYPE } from "@/app/API"
import { DialogDeleteInsureType } from "./DialogDeleteInsureType"
import DialogEditInsureType from "./DialogEditInsureType"
export interface CategoriaProps {
    id: string,
    name: string,
    description: string
}

interface InsureTypeListProps {
    insureType: CategoriaProps[]
}

export function TableInsureType({ insureType: data }: InsureTypeListProps) {
    const [openModal, setOpenModal] = useState(false)
    const [selectedCategory] = useState<string | null>(null)
    const queryClient = useQueryClient()
    useEffect(() => {
        if (data) {
            queryClient.setQueryData(["get-insure-type"], data);
        }
    }, [data, queryClient]);
    const { data: insure, isLoading, isError, error } = useQuery({
        initialData: data,
        queryKey: ["get-insure-type"],
        queryFn: GET_INSURE_TYPE
    })
    return (
        <>
            <Table>
                <TableCaption>Lista de Tipos de seguros</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Tipo de seguro</TableHead>
                        <TableHead>Descrição</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {insure?.map((cat, index) => (
                        <TableRow key={cat?.id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{cat.name}</TableCell>
                            <TableCell>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <span className="w-64 truncate cursor-pointer">{cat?.description?.length > 50 ? cat?.description?.slice(0, 50) + "..." : cat?.description}</span>
                                    </TooltipTrigger>
                                    <TooltipContent className="w-96">
                                        <span className="overflow-hidden text-ellipsis">{cat?.description}</span>
                                    </TooltipContent>
                                </Tooltip>
                            </TableCell>
                            <TableCell>
                                <PopoverSettingButton category={cat} id={cat?.id}>
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
                    <DialogEditInsureType id={id} categoria={category}>
                        <Button variant={"outline"}>Editar <PencilIcon className="" /></Button>
                    </DialogEditInsureType>
                    <DialogDeleteInsureType id={id}>
                        <Button variant={"outline"}>Apagar <Trash2 className="text-red-400" /></Button>
                    </DialogDeleteInsureType>
                </div>
            </PopoverContent>
        </Popover>)
}

