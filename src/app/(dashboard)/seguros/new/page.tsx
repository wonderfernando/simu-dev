"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit2, Loader2, Plus, PlusIcon, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { GET_APOLICE_TYPE, GET_CATEGORIES, GET_INSURE_TYPE, POST_INSURE_UNIQUE } from "@/app/API"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FormEvent, useState } from "react"
import { ContextMenuGroup } from "../../grupo-opcao/ContextMenuGroup"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMutation, useQuery } from "@tanstack/react-query"
import { DialogSaveCategory } from "../../categorias/DialogSaveCategory"
import { DialogSaveApoliceType } from "../../tipo-apolice/DialogSaveApoliceType"
import { DialogSavaInsureType } from "../../tipo-seguro/DialogSaveInsureType"
import { SheetGroupNew } from "./components/Group"
import toast from "react-hot-toast"
import { InputField } from "./components/InputField"

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

export interface ApoliceType {
    id: string;
    name: string,
}
export interface InsureType {
    id?: string;
    name: string,
}

export interface Categoria {
    id?: string;
    name: string,
}

export interface KeyValue {
    id: string;
    name: string;
}
interface ShowOnCIP {
    category_ids: Number[];
    insurance_type_ids: Number[];
    policy_type_ids: Number[];
}

export interface FormInput {
    /* show_on_cip: ShowOnCIP;
     */id?: number | null;
    label: string;
    type: string;
    place_holder: string;
    maxlength: Number;
    required: boolean;
    user_get: boolean;
    tag: string;
    identify?: string;
    option_group_id : string
}

export default function InsurePageNew() {


    const [apolicesInput, setApoliceTypesInput] = useState<ApoliceType[]>([])
    const [insuresInput, setInsureTypeInput] = useState<InsureType[]>([])
    const [categoriesInput, setCategoriesInput] = useState<Categoria[]>([])


    const [apolicesUserGet, setApoliceTypesUserGet] = useState<ApoliceType[]>([])
    const [insuresUserGet, setInsureTypeUserGet] = useState<InsureType[]>([])
    const [categoriesUserGet, setCategoriesUserGet] = useState<Categoria[]>([])


    const [apolices, setApoliceTypes] = useState<ApoliceType[]>([])
    const [insures, setInsureType] = useState<InsureType[]>([])
    const [categories, setCategories] = useState<Categoria[]>([])

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [nameError, setNameError] = useState("")

    const [inputs, setInputs] = useState<FormInput[]>([])

    const [userGets, setUserGet] = useState<FormInput[]>([])

    function changeName(e) {
        if (e.target.value)
            setNameError("")
        setName(e.target.value)
    }
    const { data: securiType, isPending: isLoadingInsureType } = useQuery({
        queryKey: ["get-tipo-secury"],
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
    function setCategory(id: string) {
        if (alreadExists(categories, id)) return;
        const result = category.find((ap) => ap.id.toString() === id)
        if (result) {
            setCategories([...categories, result])
        }
    }

    const { mutateAsync: createInsure, isPending } = useMutation({
        mutationFn: POST_INSURE_UNIQUE,
        onSuccess: (data) => {
            console.log(data)
            toast.success("Seguro cadastrado com sucesso")
            setName("")
            setDescription("")
         /*    setApoliceTypes([])
            setInsureType([])
            setCategories([]) */
            setGroupsState([])
        },
        onError: (error) => {
            toast.error("Erro ao cadastrar seguro")
            console.log(error)
        }
    })

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
        console.log(apolices)
        console.log({ name, description, policy_type_ids: apolices.map(i => i.id), insurance_type_ids: insures.map(i => i.id), category_ids: categories.map(i => i.id), option_groups: grouposState, inputs: inputs, user_gets: userGets })
        await createInsure({ name, description, policy_type_ids: apolices.map(i => i.id), insurance_type_ids: insures.map(i => i.id), category_ids: categories.map(i => i.id), option_groups: grouposState, inputs: inputs.map((i) => ({ ...i, option_group_id: null })), user_gets: userGets.map(i => ({...i, option_group_id: null })), icon: "", company_id: 10 })
    }

    function deleteApolices(id: string) {
        const result = apolices.filter((apolice) => apolice.id.toString() != id)
        setApoliceTypes(result)
    }
    function addInput() {
        const idd = `${crypto.getRandomValues(new Uint32Array(1))[0]}-${Date.now()}`
        setInputs([...inputs, {
          /*   show_on_cip: { category_ids: [], insurance_type_ids: [], policy_type_ids: [] },
           */  id: null,
           option_group_id: null,
            label: "",
            type: "",
            place_holder: "",
            maxlength: 100,
            required: false,
            user_get: false,
            tag: null,
            identify: idd
        }])
    }

    function removeInput(identify: string, isInput: boolean) {

        if (isInput) {
            removeInputGet(identify)
        } else {

            removeUserGet(identify)
        }

    }

    function removeInputGet(identify: string) {
        const result = inputs.filter((input) => input.identify != identify)
        setInputs(result)
    }
    function removeUserGet(identify: string) {

        const result = userGets.filter((input) => input.identify != identify)
        setUserGet(result)
    }
    function addUserGet() {
        const idd = `${crypto.getRandomValues(new Uint32Array(1))[0]}-${Date.now()}`
        setUserGet([...userGets, {
          /*   show_on_cip: { category_ids: [], insurance_type_ids: [], policy_type_ids: [] },
           */  id: null,
           option_group_id: null,
            label: "",
            type: "",
            place_holder: "",
            maxlength: 100,
            required: false,
            user_get: true,
            tag: "",
            identify: idd
        }])
    }

    /* function deleteInput(identify: string, id: string, isInput: boolean, field: "insure" | "category" | "apolices") {
        if (isInput) {
            const result = inputs.map((input) => {
                if (input.identify === identify) {
                    if (field === "apolices") {
                        const filter = input.show_on_cip.policy_type_ids.filter((apolice_id) => apolice_id.toString() !== id)
                        input.show_on_cip.policy_type_ids = filter
                    }
                    if (field === "category") {
                        const filter = input.show_on_cip.category_ids.filter((category_id) => category_id.toString() !== id)
                        input.show_on_cip.category_ids = filter
                    }
                    if (field === "insure") {
                        const filter = input.show_on_cip.insurance_type_ids.filter((insure_id) => insure_id.toString() !== id)
                        input.show_on_cip.insurance_type_ids = filter
                    }
                }
                return input
            })
            setInputs(result)
        } else {
            const result = userGets.map((input) => {
                if (input.identify === identify) {
                    if (field === "apolices") {
                        const filter = input.show_on_cip.policy_type_ids.filter((apolice_id) => apolice_id.toString() !== id)
                        input.show_on_cip.policy_type_ids = filter
                    }
                    if (field === "category") {
                        const filter = input.show_on_cip.category_ids.filter((category_id) => category_id.toString() !== id)
                        input.show_on_cip.category_ids = filter
                    }
                    if (field === "insure") {
                        const filter = input.show_on_cip.insurance_type_ids.filter((insure_id) => insure_id.toString() !== id)
                        input.show_on_cip.insurance_type_ids = filter
                    }
                }
                return input
            })
            setUserGet(result)
        }

    } */
    console.log(userGets)
    function onChangeInput(e: string | boolean, isInput: boolean, field: string, identify?: string) {

        if (isInput) {

           /*  if (field === "apolices") {
                if (alreadExists(apolicesInput, e)) return;
                const result = inputs.map(input => {
                    if (identify === input.identify) {
                        const apo = apoliceType?.find((ap) => ap.id.toString() === e)
                        input.show_on_cip.policy_type_ids.push(Number(apo.id))
                        setApoliceTypesInput([...apolicesInput, apo])
                    }
                    return { ...input }
                })

                setInputs(result)
                return;
            }
            if (field === "category") {

                if (alreadExists(categoriesInput, e)) return;
                const result = inputs.map(input => {
                    if (identify === input.identify) {
                        const apo = category?.find((ap) => ap.id.toString() === e)
                        input.show_on_cip.category_ids.push(Number(apo.id))
                        setCategoriesInput([...categoriesInput, apo])
                        return { ...input }
                    }
                })
                setInputs(result)
                return;
            }
            if (field === "ensure") {
                if (alreadExists(insuresInput, e)) return;
                const result = inputs.map(input => {
                    if (identify === input.identify) {
                        const apo = securiType?.find((ap) => ap.id.toString() === e)
                        input.show_on_cip.insurance_type_ids.push(Number(apo.id))
                        setInsureTypeInput([...insuresInput, apo])
                        return { ...input }
                    }
                })
                setInputs(result)
                return;
            } */
            const result = inputs.map((input) => {
                console.log(input)
                console.log(inputs)
                if (input?.identify === identify) {
                    return { ...input, [field]: e }
                }
                return input
            })
            setInputs(result)
        } else {
          /*   if (field === "apolices") {

                if (alreadExists(apolicesUserGet, e)) return;
                console.log(identify, inputs)
                const result = userGets.map(input => {
                    if (identify === input.identify) {
                        const apo = apoliceType?.find((ap) => ap.id.toString() === e)

                        input.show_on_cip.policy_type_ids.push(Number(apo.id))
                        setApoliceTypesUserGet([...apolicesUserGet, apo])
                        return { ...input }
                    }
                })
                setUserGet(result)
                return;
            }
            if (field === "category") {
                console.log(identify, inputs)
                if (alreadExists(categoriesUserGet, e)) return;

                const result = userGets.map(input => {
                    if (identify === input.identify) {
                        const apo = category?.find((ap) => ap.id.toString() === e)
                        input.show_on_cip.category_ids.push(Number(apo.id))
                        setCategoriesUserGet([...categoriesUserGet, apo])
                        return { ...input }
                    }
                })
                setUserGet(result)
                return;
            }
            if (field === "ensure") {
                if (alreadExists(insuresUserGet, e)) return;
                const result = userGets.map(input => {
                    if (identify === input.identify) {
                        const apo = securiType?.find((ap) => ap.id.toString() === e)
                        input.show_on_cip.insurance_type_ids.push(Number(apo.id))
                        setInsureTypeUserGet([...insuresUserGet, apo])
                        return { ...input }
                    }
                })
                setUserGet(result)
                return;
            }
 */
            const result = userGets.map((input) => {
                if (input.identify === identify) {
                    return { ...input, [field]: e }
                }
                return input
            })
            setUserGet(result)
        }

    }
    /* function changeAllCip(input: FormInput, cip: "category" | "apolice" | "ensure", list: KeyValue[], isInput: boolean) {
        if (cip === "category") {
            input.show_on_cip.category_ids = list.map((li) => Number(li.id))
        }
        if (cip === "apolice" && input) {
          //  input.show_on_cip.policy_type_ids.push(list.find((li) =>  li.id ==  input.id))
            console.log(input?.show_on_cip.policy_type_ids)
        }
        if (cip === "ensure") {
            input.show_on_cip.insurance_type_ids = list.map((li) => Number(li.id))
        }
        const result = inputs.map(i => {
            if (i.identify === input.identify)
                i.show_on_cip = input.show_on_cip
            return i
        })
        if (isInput)
            setInputs(result)
        else
            setUserGet(result)

    } */
    function changeCip(input: FormInput, cip: "category" | "apolice" | "ensure", list: KeyValue[], isInput: boolean) {
        /*  if (cip === "category") {
             input.show_on_cip.category_ids = list.map((li) => Number(li.id))
         }
         if (cip === "apolice" && input) {
             input.show_on_cip.policy_type_ids = list.map((li) => Number(li.id))
             console.log(input?.show_on_cip.policy_type_ids)
         }
         if (cip === "ensure") {
             input.show_on_cip.insurance_type_ids = list.map((li) => Number(li.id))
         }
         const result = inputs.map(i => {
             if (i.identify === input.identify)
                 i.show_on_cip = input.show_on_cip
             return i
         })
         if (isInput)
             setInputs(result)
         else
             setUserGet(result) */

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
                                <div className="grid grid-cols-2 gap-2 items-start ">
                                    <fieldset className="flex flex-col gap-1 ">
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
                                                        {option?.options?.map((group: any) => (
                                                            <li className="flex items-center justify-between text-sm text-zinc-600 shadow border rounded-sm p-2" key={group.name}>
                                                                <span> {group.name}</span>
                                                                <Button onClick={() => removeOption(option.id, group.name)} type="button" variant={"outline"} size={"sm"}><Trash2 /></Button>
                                                            </li>))
                                                        }
                                                        {option?.options?.length === 0 && <p className="text-zinc-600 text-sm">Nenhuma cobertura cadastrada</p>}

                                                    </AccordionContent>

                                                </AccordionItem>
                                            ))
                                        }
                                    </Accordion>
                                </fieldset>
                                <div className="h-[1px] rounded-full bg-zinc-300 w-full"></div>

                                <fieldset className="mt-4 grid gap-2">
                                    {
                                        inputs.map((input, index: number) => (
                                            <InputField
                                                apolices={apolicesInput}
                                                changeCip={changeCip}
                                                setApoliceTypes={setApoliceTypesInput}
                                                categories={categoriesInput}
                                                insures={insuresInput}
                                                setCategories={setCategoriesInput}
                                                setInsureType={setInsureTypeInput}
                                                onChangeInput={onChangeInput} removeInput={removeInput} isInput={true} key={index} inputs={input} />
                                        ))
                                    }
                                    <Button type="button" onClick={addInput}>Adicionar Campo ({inputs.length})  <Plus /></Button>
                                </fieldset>

                                <div className="h-[1px] rounded-full bg-zinc-300 w-full"></div>

                                <fieldset className="mt-4 grid gap-2">
                                    {
                                        userGets.map((input, index: number) => (
                                            <InputField
                                                changeCip={changeCip}
                                                apolices={apolicesUserGet}
                                                setApoliceTypes={setApoliceTypesUserGet}
                                                categories={categoriesUserGet}
                                                insures={insuresUserGet}
                                                setCategories={setCategoriesUserGet}
                                                setInsureType={setInsureTypeUserGet}
                                                onChangeInput={onChangeInput} removeInput={removeInput} isInput={false} key={index} inputs={input} />
                                        ))
                                    }
                                    <Button type="button" onClick={addUserGet}>Adicionar Campo do tomador de seguro ({userGets.length}) <Plus /></Button>
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
