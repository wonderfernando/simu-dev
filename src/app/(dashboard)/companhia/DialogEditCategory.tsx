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
interface CategoriaEditProps{
    id: string,
    categoria: string,
    children: ReactNode
}
export default function DialogEditCategory({children, id,categoria} : CategoriaEditProps) {
    return (
        <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
            <form action="">
                <DialogHeader>
                    <DialogTitle>Editar categoria categoria</DialogTitle>
                </DialogHeader>
                <div className="my-4">
                    <fieldset className="flex flex-col gap-1">
                            <span className="font-bold text-zinc-800 text-sm">Categoria</span>
                          <Input placeholder="Insira a categoria" value={categoria}/>
                    </fieldset>
                </div>
                <DialogFooter>
                    <Button variant={"outline"}>Cancelar</Button>
                    <Button className="text-white">Salvar</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
    )
}