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
import {DialogEditFee} from "./DialogEditFee"
import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import {useQuery} from "@tanstack/react-query"
import { GET_CATEGORIES } from "@/app/API"
import {DialogDeleteFee} from "./DialogDeleteFee"
export interface FeeProps {
    id: string,
    name: string,
    description	: string
}

interface FeeListProps {
    fees: FeeProps[]
}

export  function TableFee({fees: data} : FeeListProps) {
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
            <TableCaption>Lista de taxas de seguros</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>taxa</TableHead>
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
                            <PopoverSettingButton fee={cat} id={cat.id}>
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
    fee:FeeProps
}
export function PopoverSettingButton({ children, id, fee  }:PopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <div className="gap-4 flex flex-col items-start">
                    <DialogEditFee id={id} fee={fee}> 
                        <Button variant={"outline"}>Editar <PencilIcon className="" /></Button>
                    </DialogEditFee>
                    <DialogDeleteFee id={id}>
                        <Button variant={"outline"}>Apagar <Trash2 className="text-red-400" /></Button>
                    </DialogDeleteFee>
                </div>
            </PopoverContent>
        </Popover>)
}

