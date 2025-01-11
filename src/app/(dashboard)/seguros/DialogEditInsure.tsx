import { POST_CATEGORY, PUT_CATEGORY, PUT_INSURE } from "@/app/API"
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { ReactNode, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as zod from "zod"


export interface Insure {
    id: string,
    name: string,
    description: string
}
interface InsureEditProps {
    id: string,
    insure: Insure,
    children: ReactNode
}
const schema = zod.object({
    name: zod.string().nonempty("Nome do seguro é obrigatória"),
    description: zod.string()
})

type FormValues = zod.infer<typeof schema>

export function DialogEditInsure({ children, id, insure }: InsureEditProps) {
    const [open, setOpen] = useState(false)

    const client = useQueryClient()
    const { mutateAsync: editInsure, isPending: isLoading } = useMutation({
        mutationFn: PUT_INSURE,
        onSuccess: (data) => {
            console.log(data)
            toast.success("Seguro editado com sucesso")
            setOpen(false)
            client.invalidateQueries({ queryKey: ["get-seguros"] })
        },
        onError: (error) => {
            toast.error("Erro ao editar seguro")
        }
    })

    async function handleSubmited(data: FormValues) {
        await editInsure({ id, data })
    }

    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: insure.name,
            description: insure.description
        }
    })
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Editar Seguro</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Seguro</span>
                            <Input {...register("name")} placeholder="Insira o nome do seguro" />
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Descricao</span>
                            <Input {...register("description")} placeholder="Insira a descrição do seguro" />
                        </fieldset>
                    </div>
                    <DialogFooter className="flex  justify-end gap-2">
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button disabled={isLoading} className="text-white bg-orange-600 hover:bg-orange-700 flex items-center justify-center gap-2">Salvar {isLoading && <Loader2 className="animate-spin"/>}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}