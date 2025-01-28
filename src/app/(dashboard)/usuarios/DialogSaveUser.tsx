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

import { ReactNode, useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { GET_GROUP_PERMISSION, GET_PERMISSION, POST_CATEGORY, POST_PERMISSION } from "@/app/API"
import toast, { Toaster } from "react-hot-toast"
import { Loader2, PlusIcon, Trash2 } from "lucide-react"
import { revalidatePath } from "next/cache"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DialogSaveGroupPermission } from "../grupos-permissao/DialogSaveGroupPermission"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContextMenuGroupPermission } from "./ContextMenuGroupPermission"

 

const schema = zod.object({
    name: zod.string().nonempty("Nome é obrigatório"),
    email: zod.string().email("Email inválido"),
    phone_number: zod.string().nonempty("Número de telefone é obrigatório"),
    nif: zod.string().nonempty("NIF é obrigatório"),
    gender: zod.string().nonempty("Gênero é obrigatório"),
    password: zod.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    password_confirmation: zod.string().min(6, "Confirmação de senha deve ter no mínimo 6 caracteres")
})

type FormValues = zod.infer<typeof schema>

export function DialogSaveUser({ children }: { children: ReactNode}) {
    const [myGroup, setMyGroup] = useState<any[]>([])
    const [myPermission, setMyPermission] = useState<any[]>([])
    const [allGroup, setAllGroup] = useState<any[]>([])
    const [allPermission, setAllPermission] = useState<any[]>([])


    function alreadExists(list: Partial<{ id: string }>[], id: string) {
        const result = list.find((li) => li.id.toString() === id)
        return result
    }
    function setGroup(id: string) {
        if (alreadExists(myGroup, id)) return;
        const result = allGroup.find((ap) => ap.id.toString() === id)
        if (result) {
            setMyGroup([...myGroup, result])
        }
    }
    function deleteGroup(id: string) {
        const result = myGroup.filter((cat) => cat.id?.toString() != id)
        setMyGroup(result)
    }

    function sePermission(id: string) {
        if (alreadExists(myPermission, id)) return;
        const result = allPermission.find((ap) => ap.id.toString() === id)
        if (result) {
            setMyPermission([...myPermission, result])
        }
    }
    function deletePermission(id: string) {
        const result = myPermission.filter((cat) => cat.id?.toString() != id)
        setMyPermission(result)
    }

    const [open, setOpen] = useState(false)
    const { handleSubmit, formState, register, reset, setValue } = useForm<FormValues>({
        resolver: zodResolver(schema)
    })
    const { data: group } = useQuery({
        queryKey: ["gp-permission"],
        queryFn: () => GET_GROUP_PERMISSION(),
    })

    const { data: permission } = useQuery({
        queryKey: ["permission"],
        queryFn: () => GET_PERMISSION(),
    })

    useEffect(() => {
        if (group) {
            setAllGroup(group)
        }
        if (permission) {
            setAllPermission(permission)
        }
    }, [group, permission])
    const client = useQueryClient()
    const { mutateAsync: savePermission, isPending: isLoading } = useMutation({
        mutationFn: POST_PERMISSION,
        onSuccess: () => {
            toast.success("Permissão salva com sucesso")

            client.invalidateQueries({ queryKey: ["permission"] })
            reset()
            setOpen(false)
        }
    })
    async function handleSubmited(data: FormValues, event: React.FormEvent) {
        event.stopPropagation()
        event.preventDefault()
        await savePermission(data)
    }
    function onChangeGroup(field: string, value: string) {
        alert("das")
        setGroup(value)
    }
    function removeGroup(id: string) {
        const result = myGroup.filter((group) => group.id?.toString() != id)
        setMyGroup(result)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="min-w-[900px]">
                <ScrollArea className="w-full h-[80vh] px-8">
                    <form className="w-full" onSubmit={handleSubmit(handleSubmited)}>
                        <DialogHeader>
                            <DialogTitle>Cadastrar novo usuário</DialogTitle>
                        </DialogHeader>
                        <div className="my-4 flex flex-col gap-2">
                            <fieldset className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-800 text-sm">Nome</span>
                                <Input {...register("name")} placeholder="Insira o nome" />
                                {formState.errors.name && <span className="text-red-500 text-sm">{formState.errors.name.message}</span>}
                            </fieldset>
                            <div className="grid grid-cols-2 gap-4">
                                <fieldset className="flex flex-col gap-1">
                                    <span className="font-bold text-zinc-800 text-sm">Email</span>
                                    <Input {...register("email")} placeholder="Insira o Email" />
                                    {formState.errors.email && <span className="text-red-500 text-sm">{formState.errors.email.message}</span>}
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <span className="font-bold text-zinc-800 text-sm">Número de Telefone</span>
                                    <Input {...register("phone_number")} placeholder="Insira o Número de Telefone" />
                                    {formState.errors.phone_number && <span className="text-red-500 text-sm">{formState.errors.phone_number.message}</span>}
                                </fieldset>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <fieldset className="flex flex-col gap-1">
                                    <span className="font-bold text-zinc-800 text-sm">NIF</span>
                                    <Input {...register("nif")} placeholder="Insira o NIF" />
                                    {formState.errors.nif && <span className="text-red-500 text-sm">{formState.errors.nif.message}</span>}
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <span className="font-bold text-zinc-800 text-sm">Gênero</span>

                                    <Select onValueChange={(e) => setValue("gender", String(e), { shouldValidate: true })}>
                                        <SelectTrigger className="flex-1">
                                            <SelectValue placeholder="Selecione o Grupo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="M">Masculino</SelectItem>
                                            <SelectItem value="F">Femenino</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {formState.errors.gender && <span className="text-red-500 text-sm">{formState.errors.gender.message}</span>}
                                </fieldset>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <fieldset className="flex flex-col gap-1">
                                    <span className="font-bold text-zinc-800 text-sm">Senha</span>
                                    <Input type="password" {...register("password")} placeholder="Insira a Senha" />
                                    {formState.errors.password && <span className="text-red-500 text-sm">{formState.errors.password.message}</span>}
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <span className="font-bold text-zinc-800 text-sm">Confirmação de Senha</span>
                                    <Input type="password" {...register("password_confirmation")} placeholder="Confirme a Senha" />
                                    {formState.errors.password_confirmation && <span className="text-red-500 text-sm">{formState.errors.password_confirmation.message}</span>}
                                </fieldset>
                            </div>
                            <fieldset className="flex flex-col gap-1 my-8">
                                <span className="font-bold text-zinc-800 text-sm">Grupo</span>
                                <div className="w-full flex   items-center gap-2 mb-2">
                                    <Select onValueChange={(e) => setGroup(e)}>
                                        <SelectTrigger className="flex-1">
                                            <SelectValue placeholder="Selecione o Grupo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                allGroup?.map((type: any) => (
                                                    <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <DialogSaveGroupPermission>
                                        <Button type="button" title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button>
                                    </DialogSaveGroupPermission>
                                </div>
                                {myGroup.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                                   <GroupDropDown removeGroup={removeGroup} data={myGroup} />
                                </div> : <span className="text-xs font-bold text-zinc-700">Nenhum grupo de permissão selecionado</span>}
                            </fieldset>

                            <fieldset className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-800 text-sm">Permissões especificas</span>
                                <div className="w-full flex   items-center gap-2 mb-2">
                                    <Select onValueChange={(e) => sePermission(e)}>
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
                                    <DialogSaveGroupPermission>
                                        <Button type="button" title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button>
                                    </DialogSaveGroupPermission>
                                </div>
                                {myPermission.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                                    {myPermission.map((g) => <li key={g.id} className="flex border-b pb-1 last:pb-0 last:border-0 justify-between items-center text-sm"><span>{g.name}: {g.description}</span> <Button type="button" onClick={() => deletePermission(g.id)} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                                </div> : <span className="text-xs font-bold text-zinc-700">Nenhuma permissão selecionada</span>}
                            </fieldset>
                        </div>
                        <DialogFooter className="flex  justify-end gap-2">
                            <Button variant={"outline"}>Cancelar</Button>
                            <Button className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoading && <Loader2 className="animate-spin" />}</Button>
                        </DialogFooter>
                    </form>
                </ScrollArea>
            </DialogContent>

        </Dialog>
    )
}


function GroupDropDown({data, removeGroup}: {data: any[], removeGroup?: (group_id: string) => void}) {
    return (
        <Accordion type="single" className="bg-zinc-50 p-4" collapsible>
            {data?.map((row)=>(<AccordionItem value={row.id} key={row.id}>
                <AccordionTrigger value={row.id}>
                  <ContextMenuGroupPermission removeGroup={removeGroup} group_id={row.id} >{row.name}</ContextMenuGroupPermission>
            </AccordionTrigger>
                <AccordionContent className="grid">
                   {row.description}
                   <GroupPermissionDropDown data={row.permissions} />
                </AccordionContent>
            </AccordionItem>))}
        </Accordion>
    )
}

function GroupPermissionDropDown({data}: {data: any[]}) {
    return (
        <Accordion type="single" className="bg-zinc-100 rounded-lg p-4" collapsible>
         <AccordionItem value={"item-1"}>
                <AccordionTrigger className="text-zinc-800 font-bold" value={"item-1"}>Ver permissões</AccordionTrigger>
               <AccordionContent>
                   {[{name:"group.index",description:"Listar grupos"},{name:"group.create",description:"Criar grupos"}].map((row)=>(<div key={row.name} className="flex justify-start items-center">
                    <span className="text-zinc-700">{row.name}</span>:&nbsp;
                    <span className="text-zinc-800">{row.description}</span>
                   </div>) )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}