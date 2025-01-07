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

import { ReactNode, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { POST_APOLICE_TYPE, POST_CATEGORY } from "@/app/API"
import toast, { Toaster } from "react-hot-toast"
import { Loader2 } from "lucide-react"
interface DialogSaveCategoryProps {
    children: ReactNode
}

const schema = zod.object({
    name: zod.string().nonempty("Nome do tipo de apolice é obrigatória"),
    description: zod.string()
})

type FormValues = zod.infer<typeof schema>

export  function DialogSaveApoliceType({ children }: DialogSaveCategoryProps) {
    const [open, setOpen] = useState(false)
    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema)
    })
    const client = useQueryClient()
    const { mutateAsync: saveApolice, isPending: isLoading } = useMutation({
        mutationFn: POST_APOLICE_TYPE,
        onSuccess: () => {
            toast.success("Tipo de apolice salva com sucesso")
            reset()
            setOpen(false)
            client.invalidateQueries({ queryKey: ["get-tipo-apolice"] })
        },
        onError: (error) => {
            toast.error("Erro ao salvar tipo de apolice")
        }
    })
    async function handleSubmited(data: FormValues) {
        console.log(data)
       await saveApolice(data)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Cadastrar novo tipo de apolice</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Tipo de Apolice</span>
                            <Input {...register("name")} placeholder="Insira o nome do tipo de apolice" />
                            {formState.errors.name && <span className="text-red-500 text-sm">{formState.errors.name.message}</span>}
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Descrição</span>
                            <Input   {...register("description")} placeholder="Insira a descrição do tipo de apolice" />
                            {formState.errors.description && <span className="text-red-500 text-sm">{formState.errors.description.message}</span>}
                        </fieldset>
                    </div>
                    <DialogFooter>
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button disabled={isLoading} className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoading && <Loader2 className="animate-spin"/> }</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
            <Toaster position="top-left" />
        </Dialog>
    )
}