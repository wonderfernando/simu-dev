
import { DELETE_CATEGORY, DELETE_INSURE } from "@/app/API"
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


export function DialogDeleteInsure({ id, children }: DialogProps) {
    const [open, setOpen] = useState(false)
    const client = useQueryClient()
    const { mutateAsync: deleteCategory, isPending: isLoading } = useMutation({
        mutationFn: DELETE_INSURE,
        onSuccess: (data) => {
            console.log(data)
            toast.success("Seguro eliminado com sucesso")
            client.invalidateQueries({ queryKey: ["get-seguros"] })
            setOpen(false)
        }
    })

    async function handleDelete() {
        await deleteCategory(id)
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
                    <Button disabled={isLoading} onClick={handleDelete} className="bg-red-800 hover:bg-red-700 text-white flex items-center justify-center gap-2">Confirmar {isLoading && <Loader2 className="animate-spin"/>}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}