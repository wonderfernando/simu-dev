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
import { DialogDeletePermission } from "./DialogDeleteUser"
import { DialogEditPermissao, Permissao } from "./DialogEditUser"
import { Tooltip } from "@radix-ui/react-tooltip"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { GET_USERS } from "@/app/API"
export interface UserProps {
    id: string,
    name: string,
    description: string
}

interface UserListProps {
    users: UserProps[]
}

export function TableUser({ users: data }: UserListProps) {


    const [openModal, setOpenModal] = useState(false)
    const [selectedCategory] = useState<string | null>(null)
    const queryClient = useQueryClient()
    useEffect(() => {
        if (data) {
            queryClient.setQueryData(["users"], data);
        }
    }, [data, queryClient]);
    const { data: users, isLoading, isError, error } = useQuery({
        initialData: data,
        queryKey: ["users"],
        queryFn: () => GET_USERS(),
    })
    console.log(users)
    return (
        <>
          
            <Table>
                <TableCaption>Lista de usuarios</TableCaption>
                <TableHeader>
                    <TableRow>
                         <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>NIF</TableHead>
                        <TableHead>Genero</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users?.map((user, index) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone_number}</TableCell>
                            <TableCell>{user.nif}</TableCell>
                            <TableCell>{user.gender}</TableCell>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                                <PopoverSettingButton permissao={user} id={user.id}>
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

