import { ContextMenuGroup } from "@/app/(dashboard)/grupo-opcao/ContextMenuGroup"
import { DialogSaveOptionGroup } from "@/app/(dashboard)/grupo-opcao/DialogSaveOptionGroup"
import { DELETE_ONE, GET_GROUP_INSURE, GET_GROUP_OPTIN, GET_OPTION_BY_GROUP_INSURE, POST_OPTION } from "@/app/API"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Loader2, PlusIcon, Trash2 } from "lucide-react"
import { useState } from "react"
type Props = {
    groups: GroupProp[],
    children: React.ReactNode,
    setGroups: (groups: GroupProp[]) => void
}
interface OptionProp {
    id?: number;
    name: string;
    description?: string;
    abbreviation?: string,
    required?: boolean,
    auto_select?: boolean,
    selected?: boolean,
    taggle_ids?: number[]
}

interface GroupProp {
    id?: string;
    name: string;
    description: string;
    options: OptionProp[]
}

export function SheetGroupNew({ children, groups:groupsState, setGroups }: Props) {
    const { data: groups, isLoading, isError, error } = useQuery({
        queryKey: ["get-grupos-insure"],
        queryFn: GET_GROUP_OPTIN
    })
    const client = useQueryClient()
    const [groups_id] = useState<string>("")
console.log("groups ",groups)
    /*  const { data: options } = useQuery({
         queryKey: ["get-option", insure_id, groups_id],
         queryFn: () => GET_OPTION_BY_GROUP_INSURE({ insurance_id: insure_id, option_group_id: groups_id })
     }) */
    const [name, setName] = useState<string>("")
    const [group_id, setGroup_id] = useState<string>("")
    const [erro, setError] = useState<string>("")
    const { mutateAsync: createOption, isPending } = useMutation({
        mutationFn: POST_OPTION,
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["get-grupos-insure"]
            })
        }
    })

    const { mutateAsync: deleteOption, isPending: isLoadingOptionDelete } = useMutation({
        mutationFn: DELETE_ONE,
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["get-grupos-insure"]
            })
        }
    })

    function setGroupUp(id: string) {
        if (alreadExists(groupsState, id)) return;
        const result = groups?.find((group: any) => group.id == id)
        if (result) {
            setGroups([...groupsState, result])
        }
    }
    function alreadExists(list: Partial<{ id: string }>[], id: string) {
        const result = list.find((li) => li.id.toString() === id)
        return result
    }
    async function handleDelete(id: string) {
        await deleteOption(id)
    }
    function removeGroup(id: string) {
        const result = groupsState.filter((group) => group.id != id)
        setGroups(result)
    }
    function removeOption(group_id: string, option_name: string) {
        console.log(group_id, option_name)
        const result = groupsState.map((group) => {
            if (group.id == group_id) {
                const options = group.options.filter((option) => option.name != option_name)
                console.log(options)
                return { ...group, options }
            }
            return group
        })
        console.log(result)
        setGroups(result)
    }
    async function handleSubmit() {
        if (name === "") {
            setError("Nome é obrigatório")
            return
        }

        if (group_id === "") {
            setError("Grupo é obrigatório")
            return
        }
        setError("")
        const result = groupsState.find((group) => {
            return group.id == group_id
        })
        const newOption = { name: name, 
            description: "", 
            id: -1,
            abbreviation: null,
            required: false,
            auto_select: false,
            selected: false,
            taggle_ids: [] 
        }
        if(result?.options.find((option) => option.name === name)){
            setError("Cobertura já cadastrada")
            return
        }
        if (result) {
            result.options.push(newOption)
        }
        setGroups([...groupsState])
        setName("")
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Comberturas</SheetTitle>
                    <SheetDescription>
                        Salvar nova cobertura
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-1 py-4 ">
                    {erro && <p className="text-red-700">{erro}</p>}
                    <div className="grid grid-cols-4 items-center gap-1">
                        <Label htmlFor="name" className="text-left">
                            Name
                        </Label>
                        <Input value={name} onChange={(e) => { setError(""); setName(e.target.value) }} className="col-span-2" />

                    </div>
                    <div className="w-f grid grid-cols-4 items-center gap-1">
                        <Label className="text-left">
                            Grupo
                        </Label>
                        <Select onValueChange={(value) => { setGroupUp(value.toString()); setGroup_id(value) }} value={group_id} >
                            <SelectTrigger className="col-span-2">
                                <SelectValue placeholder="Selecione o grupo" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    groups?.map((group: any) => (
                                        <SelectItem key={group.id} value={group.id.toString()}>{group.name}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                        <DialogSaveOptionGroup><Button title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button></DialogSaveOptionGroup>
                    </div>
                    <div className="w-full flex items-center justify-end ">
                        <Button disabled={isPending} type="button" onClick={handleSubmit}>Salvar {isPending && <Loader2 className="animate-spin" />}</Button>
                    </div>
                    <section className="mt-4">
                        <h3 className="ml-4 text-zinc-800 font-semibold text-md">Coberturas</h3>
                        <ScrollArea className="h-80 px-4">
                            <div className="bg-zinc-200 h-[2px] w-full my-1 rounded-full"></div>
                            <Accordion type="single" collapsible>
                                {
                                    groupsState?.map((option: any) => (
                                        <AccordionItem key={option.id} value={option.id} >
                                            <AccordionTrigger className="text-sm font-semibold text-zinc-800">
                                                <ContextMenuGroup removeGroup={removeGroup} group_id={option.id} >{option.name} </ContextMenuGroup>
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-2">
                                                {option.options.map((group: any) => (
                                                    <li className="flex items-center justify-between text-sm text-zinc-600 shadow border rounded-sm p-2" key={group.id}>
                                                        <span> {group.name}</span>
                                                        <Button onClick={() => removeOption(option.id, group.name)} variant={"outline"} size={"sm"}>{isLoadingOptionDelete ? <Loader2 className="animate-spin" /> : <Trash2 />}</Button>
                                                    </li>))}
                                                {option.options.length === 0 && <p className="text-zinc-600 text-sm">Nenhuma cobertura cadastrada</p>}
                                            </AccordionContent>
                                        </AccordionItem>

                                    ))
                                }
                            </Accordion>

                        </ScrollArea>
                    </section>
                </div>

            </SheetContent>
        </Sheet >
    )
}
