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
import { POST_CATEGORY, POST_COMPANHIAS } from "@/app/API"
import toast, { Toaster } from "react-hot-toast"
import { Loader2 } from "lucide-react"
interface DialogSaveCompanhiaProps {
    children: ReactNode
}

const userShema = zod.object({
    name: zod.string().nonempty("Nome é obrigatória"),
    email: zod.string().email("Digite um email válido")
})

const schema = zod.object({
    name: zod.string().nonempty("Nome é obrigatória"),
    email: zod.string().email("Digite um email válido"),
    users: userShema
})
 

type FormValues = zod.infer<typeof schema>

export function DialogSaveCompanhia({ children }: DialogSaveCompanhiaProps) {
    const [open, setOpen] = useState(false)
    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema)
    })
    const client = useQueryClient()
    const { mutateAsync: SaveCompanhia, isPending: isLoading } = useMutation({
        mutationFn: POST_COMPANHIAS,
        onSuccess: () => {
            toast.success("Companhia salva com sucesso")
            reset()
            client.invalidateQueries({ queryKey: ["get-companhias"] })
            setOpen(false)

        }
    })
    function handleSubmited(data: FormValues) {
        SaveCompanhia(data)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Cadastrar nova Companhia</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Nome</span>
                            <Input {...register("name")} placeholder="Insira o nome da companhia" />
                            {formState.errors.name && <span className="text-red-500 text-sm">{formState.errors.name.message}</span>}
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Email</span>
                            <Input   {...register("email")} placeholder="Insira o email da companhia" />
                            {formState.errors.email && <span className="text-red-500 text-sm">{formState.errors.email.message}</span>}
                        </fieldset>
                    </div>
                    <div className="border shadow rounded">
                        <div className="w-full bg-zinc-100 ">
                            <span className="text-sm text-zinc-700">Dados do usuario administrador</span>
                        </div>
                        <div className="my-4 flex flex-col gap-2 px-1">
                            <fieldset className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-800 text-sm">Nome</span>
                                <Input {...register("users.name")} placeholder="Insira o nome do usuario" />
                                {formState.errors.users?.name && <span className="text-red-500 text-sm">{formState.errors.users.name.message}</span>}
                            </fieldset>
                            <fieldset className="flex flex-col gap-1 px-1">
                                <span className="font-bold text-zinc-800 text-sm">Email</span>
                                <Input   {...register("users.email")} placeholder="Insira o email do usuario" />
                                {formState.errors.users?.email && <span className="text-red-500 text-sm">{formState.errors.users.email.message}</span>}
                            </fieldset>
                        </div>
                    </div>
                    <DialogFooter className="flex  justify-end gap-2">
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button disabled={isLoading} className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoading && <Loader2 className="animate-spin" />}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}