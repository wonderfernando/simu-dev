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
import { GET_INSURES, POST_GROUP } from "@/app/API"
import toast, { Toaster } from "react-hot-toast"
import { Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DialogSaveGroupProps {
    children: ReactNode,
    insurance_id?: string
}

const schema = zod.object({
    name: zod.string().nonempty("Grupo é obrigatório"),
    description: zod.string(),
    insurance_id: zod.string().optional(),

})

type FormValues = zod.infer<typeof schema>

export default function DialogSaveOptionGroup({ children, insurance_id }: DialogSaveGroupProps) {
    const [open, setOpen] = useState(false)
    const { data: insures, isPending } = useQuery({
        queryKey: ["get-seguros"],
        queryFn: GET_INSURES
    })
    const { handleSubmit, formState, register, reset, setValue,watch } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            insurance_id: insurance_id?.toString() || ""
        }
    })
     

    console.log(insurance_id)
    const client = useQueryClient()
    const { mutateAsync: saveGroup, isPending: isLoading } = useMutation({
        mutationFn: POST_GROUP,
        onSuccess: () => {
            toast.success("Grupo salvo com sucesso")
            reset()
            setOpen(false)
            client.invalidateQueries({ queryKey: ["get-grupo"] })
            client.invalidateQueries(["get-grupos-insure", insurance_id])
        }
    })
    async function handleSubmited(data: FormValues) {
        await saveGroup({ ...data, insurance_id: Number(data.insurance_id) })
        console.log(data)
    }

    console.log(watch())

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Cadastrar novo grupo</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Grupo</span>
                            <Input {...register("name")} placeholder="Insira o grupo" />
                            {formState.errors.name && <span className="text-red-500 text-sm">{formState.errors.name.message}</span>}
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <Select disabled={insurance_id} value={watch("insurance_id")}  onValueChange={(value) =>  setValue("insurance_id", value)} {...register("insurance_id")}>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Selecione o seguro" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        insures?.map((seguro: any) => (
                                            <SelectItem key={seguro.id.toString()} value={seguro.id.toString()}>{seguro.name}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Descrição</span>
                            <Input   {...register("description")} placeholder="Insira a descrição da categoria" />
                            {formState.errors.description && <span className="text-red-500 text-sm">{formState.errors.description.message}</span>}
                        </fieldset>
                    </div>
                    <DialogFooter>
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button disabled={isLoading} className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoading && <Loader2 className="animate-spin" />}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
            <Toaster position="top-left" />
        </Dialog>
    )
}