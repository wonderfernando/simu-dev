import { POST_CATEGORY, PUT_CATEGORY, PUT_COMPANHIAS } from "@/app/API"
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
import { CompanhiaProps } from "./TableCompanhias"



interface CompanhiaEditProps {
    id: string,
    companhia: CompanhiaProps,
    children: ReactNode
}
const schema = zod.object({
    name: zod.string().nonempty("Companhia é obrigatória"),
    email: zod.string().email("Digite um email válido")
})

type FormValues = zod.infer<typeof schema>

export  function DialogEditCompanhia({ children, id, companhia }: CompanhiaEditProps) {
   const [open, setOpen] = useState(false)
   
    const client = useQueryClient()
    const { mutateAsync: editCategory, isPending } = useMutation({
        mutationFn: PUT_COMPANHIAS,
        onSuccess: (data) => {
            console.log(data)
            toast.success("Companhia editada com sucesso")
            setOpen(false)
            client.invalidateQueries({ queryKey: ["get-companhias"] })
        },
        onError: (error) => {
            toast.error("Erro ao editar a Companhia")
        }
    })

    async function handleSubmited(data: FormValues) {
        await editCategory({ id, data})
    }

    const { handleSubmit, formState, register, reset } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: companhia.name,
            email: companhia.email
        }
    })
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmited)}>
                    <DialogHeader>
                        <DialogTitle>Editar Companhia</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Companhia</span>
                            <Input {...register("name")} placeholder="Insira a Companhia" />
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Email</span>
                            <Input {...register("email")} placeholder="Insira a descrição da Companhia" />
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