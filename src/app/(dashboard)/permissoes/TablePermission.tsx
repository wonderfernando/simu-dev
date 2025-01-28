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
import { DialogDeletePermission } from "./DialogDeletePermission"
import { DialogEditPermissao, Permissao } from "./DialogEditPermission"
import { Tooltip } from "@radix-ui/react-tooltip"
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { GET_CATEGORIES, GET_PERMISSION } from "@/app/API"
export interface PermissionProps {
    id: string,
    name: string,
    description: string
}

interface PermissionListProps {
    permissions: PermissionProps[]
}

export function TablePermission({ permissions: data }: PermissionListProps) {


    const [openModal, setOpenModal] = useState(false)
    const [selectedCategory] = useState<string | null>(null)
    const queryClient = useQueryClient()
    useEffect(() => {
        if (data) {
            queryClient.setQueryData(["permission"], data);
        }
    }, [data, queryClient]);
    const { data: permissions, isLoading, isError, error } = useQuery({
        initialData: data,
        queryKey: ["permission"],
        queryFn: () => GET_PERMISSION(),
    })
    console.log(permissions)
    return (
        <>
            <Table>
                <TableCaption>Lista de Permisiões de usuarios</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Permissão</TableHead>
                        <TableHead>Descrição</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {permissions?.map((cat, index) => (
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
                                <PopoverSettingButton permissao={cat} id={cat.id}>
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
    permissao: Permissao
}
export function PopoverSettingButton({ children, id, permissao }: PopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <div className="gap-4 flex flex-col items-start">
                    <DialogEditPermissao id={id} permissao={permissao}>
                        <Button variant={"outline"}>Editar <PencilIcon className="" /></Button>
                    </DialogEditPermissao>
                    <DialogDeletePermission id={id}>
                        <Button variant={"outline"}>Apagar <Trash2 className="text-red-400" /></Button>
                    </DialogDeletePermission>
                </div>
            </PopoverContent>
        </Popover>)
}

