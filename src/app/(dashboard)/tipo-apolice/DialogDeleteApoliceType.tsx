
import { DELETE_APOLICE_TYPE, DELETE_CATEGORY } from "@/app/API"
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
 
 
export  function DialogDeleteQuestion({id, children} : DialogProps) {
    const[open, setOpen] = useState(false)
    const client = useQueryClient()
    const {mutateAsync: deleteApolice, isPending: isLoading} = useMutation({
        mutationFn: DELETE_APOLICE_TYPE,
        onSuccess: () => {
            toast.success("Tipo de apolice eliminado com sucesso")
            client.invalidateQueries({ queryKey: ["get-tipo-apolice"] })
            setOpen(false)
        }
    })

   async function handleDelete() {
      await  deleteApolice(id)
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
                    <Button disabled={isLoading} onClick={handleDelete} className="bg-red-800 text-white flex items-center justify-center gap-2">Confirmar {isLoading && <Loader2 className="animate-spin"/>}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}