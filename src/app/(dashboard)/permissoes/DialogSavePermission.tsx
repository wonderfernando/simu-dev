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
import { POST_CATEGORY, POST_PERMISSION } from "@/app/API"
import toast, { Toaster } from "react-hot-toast"
import { Loader2 } from "lucide-react"
import { revalidatePath } from "next/cache"
interface DialogSaveCategoryProps {
    children: ReactNode
}

const schema = zod.object({
    name: zod.string().nonempty("Permissão é obrigatória"),
    description: zod.string()
})

type FormValues = zod.infer<typeof schema>

export function DialogSavePermission({ children }: DialogSaveCategoryProps) {
    const [open, setOpen] = useState(false)
    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema)
    })
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
    async function handleSubmited(data: FormValues) {
        await savePermission(data)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={(e) => {e.preventDefault(); e.stopPropagation(); handleSubmit(handleSubmited)}}>
                    <DialogHeader>
                        <DialogTitle>Cadastrar nova Permissão</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Permissão</span>
                            <Input {...register("name")} placeholder="Insira a Permissão" />
                            {formState.errors.name && <span className="text-red-500 text-sm">{formState.errors.name.message}</span>}
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Descrição</span>
                            <Input   {...register("description")} placeholder="Insira a descrição da Permissão" />
                            {formState.errors.description && <span className="text-red-500 text-sm">{formState.errors.description.message}</span>}
                        </fieldset>
                    </div>
                    <DialogFooter className="flex  justify-end gap-2">
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoading && <Loader2 className="animate-spin" />}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}