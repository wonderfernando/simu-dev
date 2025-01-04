
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
import { ReactNode } from "react"
  
  interface DialogProps {
     id?: string | null,
     children: ReactNode
 }
 
 
export default function DialogDeleteQuestion({id, children} : DialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tem a certeza absoluta?</DialogTitle>
                    <DialogDescription>
                        Tem a certeza que deseja eliminar este dado?  
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={"outline"}>Cancelar</Button>
                    <Button className="bg-red-800 text-white">Confirmar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}