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
 
import { ReactNode } from "react"

interface DialogSaveCategoryProps {
    children: ReactNode
}
export default function DialogSaveCategory({ children }: DialogSaveCategoryProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <form action="">
                    <DialogHeader>
                        <DialogTitle>Cadastrar nova companhia</DialogTitle>
                    </DialogHeader>
                    <div className="my-4 flex flex-col gap-2">
                        <fieldset className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-800 text-sm">Companhia</span>
                              <Input placeholder="Insira a companhia"/>
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-800 text-sm">Descrição</span>
                              <Input placeholder="Insira a descrição da companhia"/>
                        </fieldset>
                    </div>
                    <DialogFooter>
                        <Button variant={"outline"}>Cancelar</Button>
                        <Button className="text-white bg-orange-600">Salvar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}