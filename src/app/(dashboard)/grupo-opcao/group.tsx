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
import {DialogSaveOptionGroup} from "./DialogSaveOptionGroup"
import { ContextMenuGroup } from "./ContextMenuGroup"
type Props = {
    insure_id: string,
    children: React.ReactNode
}
export function SheetGroup({ insure_id, children }: Props) {
    const { data: groups, isLoading, isError, error } = useQuery({
        queryKey: ["get-grupos-insure", insure_id],
        queryFn: ({ queryKey }) => GET_GROUP_INSURE(queryKey[1])
    })
    const client = useQueryClient()
    const [groups_id] = useState<string>("")

    const { data: options } = useQuery({
        queryKey: ["get-option", insure_id, groups_id],
        queryFn: () => GET_OPTION_BY_GROUP_INSURE({ insurance_id: insure_id, option_group_id: groups_id })
    })
    const [name, setName] = useState<string>("")
    const [group_id, setGroup_id] = useState<string>("")
    const [erro, setError] = useState<string>("")
    const { mutateAsync: createOption, isPending } = useMutation({
        mutationFn: POST_OPTION,
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["get-grupos-insure", insure_id]
            })
        }
    })

    const { mutateAsync: deleteOption, isPending: isLoadingOptionDelete } = useMutation({
        mutationFn: DELETE_ONE,
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["get-grupos-insure", insure_id]
            })
        }
    })

    async function handleDelete(id: string) {
        await deleteOption(id)
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
        await createOption({ name: name, option_group_id: Number(group_id), insurance_id: insure_id })
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
                    
                    <section className="mt-4">
                        <h3 className="ml-4 text-zinc-800 font-semibold text-md">Coberturas</h3>
                        <ScrollArea className="h-80 px-4">
                            <div className="bg-zinc-200 h-[2px] w-full my-1 rounded-full"></div>
                            <Accordion type="single" collapsible>
                                {
                                    groups?.map((option: any) => (


                                        <AccordionItem key={option.id} value={option.id} >
                                            <AccordionTrigger className="text-sm font-semibold text-zinc-800">
                                                <ContextMenuGroup  group_id={option.id} >{option.name} </ContextMenuGroup>    </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-2">
                                                {option.options.map((group: any) => (
                                                    <li className="flex items-center justify-between text-sm text-zinc-600 shadow border rounded-sm p-2" key={group.id}>
                                                        <span> {group.name}</span>
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
