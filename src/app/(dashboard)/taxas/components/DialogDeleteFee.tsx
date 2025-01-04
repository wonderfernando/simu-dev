
import { DELETE_CATEGORY } from "@/app/API"
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
import { ReactNode, useState } from "react"
import toast from "react-hot-toast"
  
  interface DialogProps {
     id: string,
     children: ReactNode
 }
 
 
export default function DialogDeleteFee({id, children} : DialogProps) {
    const[open, setOpen] = useState(false)
    const client = useQueryClient()
    const {mutateAsync: deleteCategory} = useMutation({
        mutationFn: DELETE_CATEGORY,
        onSuccess: () => {
            toast.success("Taxa eliminada com sucesso")
            client.invalidateQueries({queryKey: ["get-fees"]})
            setOpen(false)
        }
    })

   async function handleDelete() {
      await  deleteCategory(id)
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
                <DialogFooter>
                    <Button onClick={()=>setOpen(false)} variant={"outline"}>Cancelar</Button>
                    <Button onClick={handleDelete} className="bg-red-800 text-white">Confirmar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}