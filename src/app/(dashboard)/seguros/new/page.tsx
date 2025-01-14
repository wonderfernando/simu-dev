"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit2, Loader2, PlusIcon, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { GET_APOLICE_TYPE, GET_CATEGORIES, GET_INSURE_TYPE, GET_INSURES, POST_INSURE_UNIQUE } from "@/app/API"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FormEvent, useEffect, useState } from "react"
import { ContextMenuGroup } from "../../grupo-opcao/ContextMenuGroup"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMutation, useQuery } from "@tanstack/react-query"
import { DialogSaveCategory } from "../../categorias/DialogSaveCategory"
import { DialogSaveApoliceType } from "../../tipo-apolice/DialogSaveApoliceType"
import { DialogSavaInsureType } from "../../tipo-seguro/DialogSaveInsureType"
import { SheetGroupNew } from "./components/Group"
import toast from "react-hot-toast"

interface OptionProp {
    id?: number;
    name: string;
    description?: string
}

interface GroupProp {
    id?: string;
    name: string;
    description: string;
    options: OptionProp[]
}

interface ApoliceType {
    id?: string;
    name: string,
}
interface InsureType {
    id?: string;
    name: string,
}

interface Categoria {
    id?: string;
    name: string,
}

export default function InsurePageNew() {

    const [apolices, setApoliceTypes] = useState<ApoliceType[]>([])
    const [insures, setInsureType] = useState<InsureType[]>([])
    const [categories, setCategories] = useState<Categoria[]>([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [nameError, setNameError] = useState("")
    function changeName(e) {
        if (e.target.value)
            setNameError("")
        setName(e.target.value)
    }
    const { data: securiType, isPending: isLoadingInsureType } = useQuery({
        queryKey: ["get-tipo-apolice"],
        queryFn: GET_INSURE_TYPE
    })

    const { data: category, isPending: isLoadingCategoria } = useQuery({
        queryKey: ["get-categories"],
        queryFn: GET_CATEGORIES
    })

    const { data: apoliceType, isPending: isLoadingApoliceType } = useQuery({
        queryKey: ["get-apolice-type"],
        queryFn: GET_APOLICE_TYPE
    })
    function alreadExists(list: Partial<{ id: string }>[], id: string) {
        const result = list.find((li) => li.id.toString() === id)
        return result
    }
    function setApolice(id: string) {
        if (alreadExists(apolices, id)) return;
        const result = apoliceType.find((ap) => ap.id.toString() === id)
        if (result) {
            setApoliceTypes([...apolices, result])
        }
    }
    function setInsure(id: string) {
        if (alreadExists(insures, id)) return;
        const result = securiType.find((ap) => ap.id.toString() === id)
        if (result) {
            setInsureType([...insures, result])
        }
    }
    const { mutateAsync: createInsure, isPending } = useMutation({
        mutationFn: POST_INSURE_UNIQUE,
        onSuccess: (data) => {
            toast.success("Seguro cadastrado com sucesso")
            setName("")
            setDescription("")
            setApoliceTypes([])
            setInsureType([])
            setCategories([])
            setGroupsState([])
        },
        onError: (error) => {
            console.log("Error")
        }
    })
    function setCategory(id: string) {
        if (alreadExists(categories, id)) return;
        const result = category.find((ap) => ap.id.toString() === id)
        if (result) {
            setCategories([...categories, result])
        }
    }

    function deleteInsure(id: string) {
        const result = insures.filter((insure) => insure.id?.toString() != id)
        setInsureType(result)
    }
    function deleteCategory(id: string) {
        const result = categories.filter((cat) => cat.id?.toString() != id)
        setCategories(result)
    }
    const [grouposState, setGroupsState] = useState<GroupProp[]>([])

    function removeOption(group_id: string, option_name: string) {
        console.log(group_id, option_name)
        const result = grouposState.map((group) => {
            if (group.id == group_id) {
                const options = group.options.filter((option) => option.name != option_name)
                console.log(options)
                return { ...group, options }
            }
            return group
        })
        console.log(result)
        setGroupsState(result)
    }
    console.log(grouposState)

    function removeGroup(id: string) {
        const result = grouposState.filter((group) => group.id?.toString() != id)
        setGroupsState(result)
    }

    async function handleSubmit(params: FormEvent) {
        params.preventDefault()
        if (name === "") {
            setNameError("O nome é obrigatório")
            return
        }
        await createInsure({ name, description, policy_type_ids: apolices.map(i => i.id), insurance_type_ids: insures.map(i => i.id), category_ids: categories.map(i => i.id), option_groups: grouposState })
    }

    function deleteApolices(id: string) {
        const result = apolices.filter((apolice) => apolice.id.toString() != id)
        setApoliceTypes(result)
    }
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between gap-2">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Cadastrar Seguro</h1>
                </div>
            </div>
            <Card>
                <CardContent>
                    <ScrollArea className="md:w-[calc(100vw-350px)]">
                        <form onSubmit={handleSubmit}>
                            <div className="my-4 flex flex-col gap-2">
                                <fieldset className="flex flex-col gap-1">
                                    <span className="font-bold text-zinc-800 text-sm">Seguro</span>
                                    <Input value={name} onChange={changeName} className="" placeholder="Insira o nome do seguro" />
                                    {nameError && <span className="text-red-700">O nome é obrigatório</span>}
                                </fieldset>
                                <fieldset className="flex flex-col gap-1">
                                    <span className="font-bold text-zinc-800 text-sm">Descrição</span>
                                    <Input className="max-w-lg w-full" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Insira a descrição do seguro" />
                                </fieldset>
                                <div className="h-[1px] rounded-full bg-zinc-300 w-full"></div>
                                <br />
                                <div className="grid grid-cols-2 gap-2 items-start">
                                    <fieldset className="flex flex-col gap-1">
                                        <span className="font-bold text-zinc-800 text-sm">Tipo de Apolice</span>
                                        <div className="w-full flex   items-center gap-2">
                                            <Select onValueChange={(e) => setApolice(e)}>
                                                <SelectTrigger className="flex-1">
                                                    <SelectValue placeholder="Selecione o grupo" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        apoliceType?.map((type: any) => (
                                                            <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <DialogSaveApoliceType>
                                                <Button type="button" title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button>
                                            </DialogSaveApoliceType>
                                        </div>
                                        {apolices.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                                            {apolices.map((g) => <li key={g.id} className="flex border-b pb-1 last:pb-0 last:border-0 justify-between items-center"><span>{g.name}</span> <Button type="button" onClick={() => deleteApolices(g.id)} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                                        </div> : <span className="text-xs font-bold">Nenhum tipo de apolice selecionado</span>}
                                    </fieldset>
                                    <fieldset className="flex flex-col gap-1">
                                        <span className="font-bold text-zinc-800 text-sm">Tipo de seguro</span>
                                        <div className="w-full flex   items-center gap-2">
                                            <Select onValueChange={(e) => setInsure(e)}>
                                                <SelectTrigger className="flex-1">
                                                    <SelectValue placeholder="Selecione o grupo" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        securiType?.map((type: any) => (
                                                            <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <DialogSavaInsureType><Button title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button></DialogSavaInsureType>
                                        </div>
                                        {insures.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                                            {insures.map((g) => <li key={g.id} className="flex last:pb-0 border-b pb-1 last:border-0 justify-between items-center"><span>{g.name}</span> <Button type="button" onClick={() => deleteInsure(g.id)} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                                        </div> : <span className="text-xs font-bold">Nenhum tipo de seguro selecionado</span>}
                                    </fieldset>
                                </div>
                                <br />
                                <div className="grid grid-cols-2 gap-2 items-start">
                                    <fieldset className="flex flex-col gap-1">
                                        <span className="font-bold text-zinc-800 text-sm">Categoria</span>
                                        <div className="w-full flex   items-center gap-2">
                                            <Select onValueChange={(e) => setCategory(e)}>
                                                <SelectTrigger className="flex-1">
                                                    <SelectValue placeholder="Selecione o grupo" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        category?.map((cat: any) => (
                                                            <SelectItem key={cat.id} value={cat.id.toString()}>{cat.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <DialogSaveCategory><Button type="button" title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button></DialogSaveCategory>
                                        </div>
                                        {categories.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                                            {categories.map((g) => <li key={g.id} className="flex border-b pb-1 last:pb-0 last:border-0 justify-between items-center"><span>{g.name}</span> <Button type="button" onClick={() => deleteCategory(g.id)} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                                        </div> : <span className="text-xs font-bold">Nenhuma categoria selecionada</span>}
                                    </fieldset>

                                </div>
                                <br />
                                <div className="h-[1px] rounded-full bg-zinc-300 w-full"></div>

                                <fieldset className="flex flex-col gap-1 max-w-lg w-full">
                                    <div className="flex items-center gap-2">
                                        <h1>Grupo de opções</h1>
                                        <SheetGroupNew groups={grouposState} setGroups={setGroupsState}>
                                            <Button className="p-0 w-8 h-8 rounded-full"  ><Edit2 /></Button>
                                        </SheetGroupNew>
                                    </div>
                                    <Accordion type="single" collapsible>
                                        {
                                            grouposState?.map((option: any) => (
                                                <AccordionItem key={option.id} value={option.id} >
                                                    <AccordionTrigger className="text-sm font-semibold text-zinc-800">
                                                        <ContextMenuGroup removeGroup={removeGroup} group_id={option.id} >{option.name} </ContextMenuGroup>    </AccordionTrigger>
                                                    <AccordionContent className="flex flex-col gap-2">
                                                        {option.options.map((group: any) => (
                                                            <li className="flex items-center justify-between text-sm text-zinc-600 shadow border rounded-sm p-2" key={group.name}>
                                                                <span> {group.name}</span>
                                                                <Button onClick={() => removeOption(option.id, group.name)} type="button" variant={"outline"} size={"sm"}><Trash2 /></Button>
                                                            </li>))
                                                        }
                                                        {option.options.length === 0 && <p className="text-zinc-600 text-sm">Nenhuma cobertura cadastrada</p>}

                                                    </AccordionContent>

                                                </AccordionItem>
                                            ))
                                        }
                                    </Accordion>
                                </fieldset>
                            </div>
                            <div className="flex  justify-end gap-2">
                                <Button variant={"outline"}>Cancelar</Button>
                                <Button disabled={isPending} className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isPending && <Loader2 className="animate-spin" />}</Button>
                            </div>
                        </form>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div >
    )
}