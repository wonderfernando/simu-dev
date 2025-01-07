import { POST_CATEGORY, PUT_CATEGORY, PUT_INSURE_TYPE } from "@/app/API"
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


export interface Category {
    id: string,
    name: string,
    description: string
}
interface CategoriaEditProps {
    id: string,
    categoria: Category,
    children: ReactNode
}
const schema = zod.object({
    name: zod.string().nonempty("Categoria é obrigatória"),
    description: zod.string()
})

type FormValues = zod.infer<typeof schema>

export default function DialogEditInsureType({ children, id, categoria }: CategoriaEditProps) {
    const [open, setOpen] = useState(false)

    const client = useQueryClient()
    const { mutateAsync: editInsureType, isPending: isLoading } = useMutation({
        mutationFn: PUT_INSURE_TYPE,
        onSuccess: (data) => {
            console.log(data)
            toast.success("Tipo de seguro editado com sucesso")
            setOpen(false)
            client.invalidateQueries({ queryKey: ["get-insure-type"] })
        },
        onError: (error) => {
            toast.error("Erro ao editar o tipo de seguro")
        }
    })

    async function handleSubmited(data: FormValues) {
        await editInsureType({ id, data: {...data, icon: ""} })
    }

    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: categoria.name,
            description: categoria.description
        }
    })
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Editar tipo de seguro</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Tipo de seguro</span>
                            <Input {...register("name")} placeholder="Insira o nome do tipo de seguro" />
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Descricao</span>
                            <Input {...register("description")} placeholder="Insira a descrição do tipo de seguro" />
                        </fieldset>
                    </div>
                    <DialogFooter>
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button disabled={isLoading} className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoading && <Loader2 className="animate-spin" />}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}