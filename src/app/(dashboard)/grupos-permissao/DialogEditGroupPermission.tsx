import { POST_CATEGORY, PUT_CATEGORY, PUT_PERMISSION } from "@/app/API"
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


export interface Permissao{
    id: string,
    name: string,
    description: string
}
interface PermissaoEditProps {
    id: string,
    permissao: Permissao,
    children: ReactNode
}
const schema = zod.object({
    name: zod.string().nonempty("Permissão é obrigatório"),
    description: zod.string()
})

type FormValues = zod.infer<typeof schema>

export  function DialogEditPermissao({ children, id, permissao }: PermissaoEditProps) {
   const [open, setOpen] = useState(false)
   
    const client = useQueryClient()
    const { mutateAsync: editCategory, isPending } = useMutation({
        mutationFn: PUT_PERMISSION,
        onSuccess: (data) => {
            console.log(data)
            toast.success("Permissão editada com sucesso")
            setOpen(false)
            client.invalidateQueries({ queryKey: ["get-permission"] })
        },
        onError: (error) => {
            toast.error("Erro ao editar a permissão")
        }
    })

    async function handleSubmited(data: FormValues) {
        await editCategory({ id, data})
    }
    
    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: permissao.name,
            description: permissao.description
        }
    })
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Editar Permissão</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Permissão</span>
                            <Input {...register("name")} placeholder="Insira a Permissão" />
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Descricao</span>
                            <Input {...register("description")} placeholder="Insira a descrição da Permissão" />
                        </fieldset>
                    </div>
                    <DialogFooter className="flex  justify-end gap-2">
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button disabled={isPending} className="text-white bg-orange-600 hover:bg-orange-700">Salvar {isPending && <Loader2 className="animate-spin"/>}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}