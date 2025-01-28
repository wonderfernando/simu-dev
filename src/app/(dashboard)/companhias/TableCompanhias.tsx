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
import { DialogDeleteCompanhia } from "./DialogDeleteCompanhia"
import { DialogEditCompanhia } from "./DialogEditCompanhia"
import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { GET_CATEGORIES, GET_COMPANHIAS } from "@/app/API"
export interface CompanhiaProps {
    id?: string,
    name: string,
    email: string
}

interface CompanhiaListProps {
    companhias: CompanhiaProps[]
}

export function TableCompanhias({ companhias: data }: CompanhiaListProps) {


    const [openModal, setOpenModal] = useState(false)
    const [selectedCategory] = useState<string | null>(null)
    const queryClient = useQueryClient()
    useEffect(() => {
        if (data) {
            queryClient.setQueryData(["get-companhias"], data);
        }
    }, [data, queryClient]);
    const { data: companhias, isLoading, isError, error } = useQuery({
        initialData: data,
        queryKey: ["get-companhias"],
        queryFn: GET_COMPANHIAS,
    })
    console.log(companhias)
    return (
        <>
            <Table>
                <TableCaption>Lista de Companhias</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Companhia</TableHead>
                        <TableHead>Email</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companhias?.map((companhia, index) => (
                        <TableRow key={companhia.id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{companhia.name}</TableCell>
                            <TableCell>
                                <span className="w-64 truncate cursor-pointer">{companhia.email}</span>
                            </TableCell>
                            <TableCell>
                                <PopoverSettingButton companhia={companhia} id={companhia.id}>
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
    companhia: CompanhiaProps
}
export function PopoverSettingButton({ children, id, companhia }: PopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <div className="gap-4 flex flex-col items-start">
                    <DialogEditCompanhia id={id} companhia={companhia}>
                        <Button variant={"outline"}>Editar <PencilIcon className="" /></Button>
                    </DialogEditCompanhia>
                    <DialogDeleteCompanhia id={id}>
                        <Button variant={"outline"}>Apagar <Trash2 className="text-red-400" /></Button>
                    </DialogDeleteCompanhia>
                </div>
            </PopoverContent>
        </Popover>)
}

