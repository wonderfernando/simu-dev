"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import * as zod from "zod"

import { FormEvent, ReactNode, useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { GET_PERMISSION, POST_CATEGORY, POST_GROUP_PERMISSION, POST_GROUP_PERMISSIONS_MANY, POST_PERMISSION } from "@/app/API"
import toast, { Toaster } from "react-hot-toast"
import { Loader2, PlusIcon, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DialogSavePermission } from "../permissoes/DialogSavePermission"
interface DialogSaveCategoryProps {
    children: ReactNode
}

const schema = zod.object({
    name: zod.string().nonempty("Grupo de permissão é obrigatória"),
    description: zod.string()
})

type FormValues = zod.infer<typeof schema>

export function DialogSaveGroupPermission({ children }: DialogSaveCategoryProps) {
   const[permissions, setPermissions] = useState<any[]>([])
   const[allPermission, setAlllPermission] = useState<any[]>([])
   const [open, setOpen] = useState(false)
    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema)
    })
    const {data: getPromission} = useQuery({
        queryKey: ["permission"],
        queryFn: GET_PERMISSION
    })
    useEffect(() => {
        console.log(getPromission)
        if(getPromission){
            setAlllPermission(getPromission)
        }
    }, [getPromission])
    const client = useQueryClient()
    const { mutateAsync: saveGRoupPermission, isPending: isLoadingPermission } = useMutation({
        mutationFn: POST_GROUP_PERMISSION,
        onSuccess: async (data) => {
            permissions.forEach(async (p) => savePermission({permission_id: p.id, group_id: data.data.id}))
            client.invalidateQueries({ queryKey: ["gp-permission"] })
            reset()
            setOpen(false)
        },
        onError: (error) => {
            console.log(error)
            toast.error("Erro ao salvar a permissão") 
        }
    })

    const { mutateAsync: savePermission, isPending: isLoading } = useMutation({
        mutationFn: POST_GROUP_PERMISSIONS_MANY,
        onSuccess: (data) => {
            console.log(data)
            client.invalidateQueries({ queryKey: ["gp-permission"] })
            reset()
            setOpen(false)
        },
        onError: (error) => {
            console.log(error)
            toast.error("Erro ao salvar a permissão") 
        }
    })
    
    async function handleSubmited(data: FormValues, event: FormEvent) {
      
        await saveGRoupPermission(data)
    }
    function alreadExists(list: Partial<{ id: string }>[], id: string) {
        const result = list.find((li) => li.id.toString() === id)
        return result
    }
   function setPermission(id: string) {
        if (alreadExists(permissions, id)) return;
        const result = allPermission.find((ap) => ap.id.toString() === id)
        if (result) {
            setPermissions([...permissions, result])
        }
    }
    function deletePermission(id: string) {
        const result = permissions.filter((cat) => cat.id?.toString() != id)
        setPermissions(result)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Cadastrar nova Grupo de permissão</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Grupo de permissão</span>
                            <Input {...register("name")} placeholder="Insira a Grupo de permissão" />
                            {formState.errors.name && <span className="text-red-500 text-sm">{formState.errors.name.message}</span>}
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Descrição</span>
                            <Input   {...register("description")} placeholder="Insira a descrição da Grupo de permissão" />
                            {formState.errors.description && <span className="text-red-500 text-sm">{formState.errors.description.message}</span>}
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Permissão</span>
                            <div className="w-full flex   items-center gap-2 mb-4">
                                <Select onValueChange={(e) => setPermission(String(e))}>
                                    <SelectTrigger className="flex-1">
                                        <SelectValue placeholder="Selecione a permissão" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            allPermission?.map((type: any) => (
                                                <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                                <DialogSavePermission><Button title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button></DialogSavePermission>
                            </div>
                            {permissions.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md max-h-52 overflow-y-scroll">
                                {permissions.map((g) => <li key={g.id} className="flex last:pb-0 border-b pb-1 last:border-0 justify-between items-center"><span>{g.name}</span> <Button type="button" onClick={() => deletePermission(g.id)} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                            </div> : <span className="text-xs font-bold">Nenhuma permissão selecionada</span>}
                        </fieldset>
                    </div>
                    <DialogFooter className="flex  justify-end gap-2">
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button disabled={isLoadingPermission} className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoadingPermission && <Loader2 className="animate-spin" />}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}