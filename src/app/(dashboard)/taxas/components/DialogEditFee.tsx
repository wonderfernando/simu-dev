import { POST_CATEGORY, PUT_CATEGORY } from "@/app/API"
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
import { ReactNode, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as zod from "zod"


export interface Fee{
    id: string,
    name: string,
    description: string
}
interface FeeEditProps {
    id: string,
    fee: Fee,
    children: ReactNode
}
const schema = zod.object({
    name: zod.string().nonempty("Taxa é obrigatória"),
    description: zod.string().nonempty("Descrição é obrigatória")
})

type FormValues = zod.infer<typeof schema>

export  function DialogEditFee({ children, id, fee }: FeeEditProps) {
   const [open, setOpen] = useState(false)
   
    const client = useQueryClient()
    const { mutateAsync: editCategory } = useMutation({
        mutationFn: PUT_CATEGORY,
        onSuccess: (data) => {
            console.log(data)
            toast.success("Taxa editada com sucesso")
            setOpen(false)
            client.invalidateQueries({ queryKey: ["get-fees"] })
        },
        onError: (error) => {
            toast.error("Erro ao editar a taxa")
        }
    })

    async function handleSubmited(data: FormValues) {
        await editCategory({ id, data})
    }
    
    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: fee.name,
            description: fee.description
        }
    })
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Editar taxa</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Taxa (%)</span>
                            <Input {...register("name")} placeholder="Insira a taxa" />
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Descricao</span>
                            <Input {...register("description")} placeholder="Insira a descrição da taxa" />
                        </fieldset>
                    </div>
                    <DialogFooter>
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button className="text-white bg-orange-600 hover:bg-orange-700">Salvar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}