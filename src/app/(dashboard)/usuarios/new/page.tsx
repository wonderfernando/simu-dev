"use client"
import { Input } from "@/components/ui/input"
import * as zod from "zod"

import { ReactNode, useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { GET_GROUP_PERMISSION, GET_PERMISSION, POST_USER } from "@/app/API"
import toast from "react-hot-toast"
import { Loader2, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GroupDropDown } from "../new/GroupDropDown"
import { Button } from "@/components/ui/button"


 

const schema = zod.object({
    name: zod.string().nonempty("Nome é obrigatório"),
    email: zod.string().email("Email inválido"),
    phone_number: zod.string().nonempty("Número de telefone é obrigatório"),
    nif: zod.string().nonempty("NIF é obrigatório"),
    gender: zod.enum(["M", "F"], {required_error:"Gênero é obrigatório",message:"Gênero inválido"}),
    password: zod.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    password_confirmation: zod.string().min(6, "Confirmação de senha deve ter no mínimo 6 caracteres")
})

type FormValues = zod.infer<typeof schema>

export default function SaveUserPage() {
    const [myGroup, setMyGroup] = useState<any[]>([])
/*     const [myPermission, setMyPermission] = useState<any[]>([])
 */    const [allGroup, setAllGroup] = useState<any[]>([])
    const [allPermission, setAllPermission] = useState<any[]>([])
    const [permitionRestriction, setPermitionRestriction] = useState<any[]>([])



    function alreadExists(list: Partial<{ id: string }>[], id: string) {
        const result = list.find((li) => li.id.toString() === id)
        return result
    }

    function alreadPermissionExists(list: Partial<{ permission_id: string }>[], id: string) {
        const result = list.find((li) => li.permission_id.toString() === id)
        return result
    }

    function tooglePermission(id: string, type: "Add" | "Remove") {
        if (type === "Add") {
            setPermitionRestriction([...permitionRestriction, { permission_id: id, type: "Remove", }])
        }
        if (type === "Remove") {
            const result = permitionRestriction.filter((cat) => cat.permission_id?.toString() != id)
            setPermitionRestriction(result)
        }
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

    function setPermission(id: string) {
        if (alreadPermissionExists(permitionRestriction, id)) return;
        const result = allPermission.find((ap) => ap.id.toString() === id)
        if (result) {
            setPermitionRestriction([...permitionRestriction, { permission_id: id, type: "Add", name: result.name, description: result.description }])
        }
    }
    function deletePermission(id: string) {
        const result = permitionRestriction.filter((cat) => cat.permission_id?.toString() != id)
        setPermitionRestriction(result)
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
        if (permission && group) 
        {
            if (group) 
                setAllGroup(group)
            const groupPermissionIds = group.flatMap(group =>
                group.permissions.map(permission => parseInt(permission.id))
            );
        
            
              const permissionsNotInGroups = permission.filter(permission =>
                !groupPermissionIds.includes(permission.id)
            );
            
            setAllPermission(permissionsNotInGroups)
        }         
    }, [group, permission])
     

    const client = useQueryClient()
    const { mutateAsync: savePermission, isPending: isLoading } = useMutation({
        mutationFn: POST_USER,
        onSuccess: (data) => {
            toast.success("Usuario salvo com sucesso")
            console.log("data", data)
            client.invalidateQueries({ queryKey: ["usuario"] })
            reset()
            setPermitionRestriction([])
            setMyGroup([])
/*             setMyPermission([])
 */            setOpen(false)
        },
        onError: (error) => {
            toast.error("Erro ao salvar permissão")
            console.log("error", error)
        }
    })
    async function handleSubmited(data: FormValues, event: React.FormEvent) {
        event.stopPropagation()
        event.preventDefault()
        const newData = {
            ...data, permissions: permitionRestriction.map((dt) =>
            ({
                permission_id: dt.permission_id, type: dt.type
            })),
            groups: myGroup.map((dt) => ({ group_id: dt.id }))
        }

         await savePermission(newData)
    }
    function onChangeGroup(field: string, value: string) {
        alert("das")
        setGroup(value)
    }
    function removeGroup(id: string) {
        const result = myGroup.filter((group) => group.id?.toString() != id)
        setMyGroup(result)
    }
    console.log("rest", permitionRestriction)
    return (
        <div className="w-full px-4 pb-4">
            <form className="w-full " onSubmit={handleSubmit(handleSubmited)}>
                <h1>Cadastrar novo usuário</h1>
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

                            <Select onValueChange={(e: "M" | "F") => setValue("gender", e, { shouldValidate: true })}>
                                <SelectTrigger className="flex-1">
                                    <SelectValue placeholder="Selecione o Genero" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0">Selecione o Genero</SelectItem>
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
                            {/*   <DialogSaveGroupPermission>
                                        <Button type="button" title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button>
                                    </DialogSaveGroupPermission> */}
                        </div>
                        {myGroup.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                            <GroupDropDown tooglePermission={tooglePermission} removeGroup={removeGroup} permitionRestriction={permitionRestriction} data={myGroup} />
                        </div> : <span className="text-xs font-bold text-zinc-700">Nenhum grupo de permissão selecionado</span>}
                    </fieldset>
                   <fieldset className="flex flex-col gap-1">
                        <span className="font-bold text-zinc-800 text-sm">Permissões especificas</span>
                        <div className="w-full flex   items-center gap-2 mb-2">
                            <Select onValueChange={(e) => setPermission(e)}>
                                <SelectTrigger className="flex-1">
                                    <SelectValue placeholder="Selecione a permissão" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        allPermission?.map((type: any) => (
                                            <SelectItem key={type.id} value={type.id.toString()}>{type.description}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            {/*    <DialogSaveGroupPermission>
                                        <Button type="button" title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button>
                                    </DialogSaveGroupPermission> */}
                        </div>
                        {permitionRestriction.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                            {permitionRestriction.map((g) => (
                                g.type === "Add" && (
                                    <li key={g.permission_id} className="flex border-b pb-1 last:pb-0 last:border-0 justify-between items-center text-sm">
                                        <span>{g.description}</span>
                                        <Button type="button" onClick={() => deletePermission(g.permission_id)} size="sm" className="p-0 px-2" variant="outline">
                                            <Trash2 />
                                        </Button>
                                    </li>))
                            )}
                        </div> : <span className="text-xs font-bold text-zinc-700">Nenhuma permissão selecionada</span>}
                    </fieldset>
                </div>
                <div className="flex  justify-end gap-2">
                    <Button variant={"outline"}>Cancelar</Button>
                    <Button disabled={isLoading} className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoading && <Loader2 className="animate-spin" />}</Button>
                </div>
            </form>
        </div>


    )
}




