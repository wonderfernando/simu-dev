
import { DELETE_CATEGORY, DELETE_GROUP_PERMISSION, DELETE_ONE, DELETE_PERMISSION } from "@/app/API"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { ReactNode, useState } from "react"
import toast from "react-hot-toast"

interface DialogProps {
    id: string,
    children: ReactNode
}


export function DialogDeleteGroupPermission({ id, children }: DialogProps) {
    const [open, setOpen] = useState(false)
    const client = useQueryClient()
    const { mutateAsync: deleteGroup, isPending } = useMutation({
        mutationFn:  DELETE_GROUP_PERMISSION,
        onSuccess: () => {
            toast.success("grupo eliminado com sucesso.")
            client.invalidateQueries({ queryKey: ["gp-permission"] })
            setOpen(false)
        }
    })

    async function handleDelete() {
        await deleteGroup(id)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tem a certeza absoluta?</DialogTitle>
                    <DialogDescription>
                        Tem a certeza que deseja eliminar este dado?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex  justify-end gap-2">
                    <Button onClick={() => setOpen(false)} variant={"outline"}>Cancelar</Button>
                    <Button disabled={isPending} onClick={handleDelete} className="bg-red-800 hover:bg-red-700 text-white">Confirmar {isPending && <Loader2 className="animate-spin" />}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}