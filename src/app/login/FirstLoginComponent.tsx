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
import { DialogDescription } from "@radix-ui/react-dialog"
import { Loader2 } from "lucide-react"
import { FormEvent, ReactNode, useState } from "react"
import toast from "react-hot-toast"
import * as zod from "zod"
export function FirstLoginComponet({open , setOpen} : {open:boolean, setOpen: (open:boolean) => void}) {
    const [password,  setPasswrd] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    async function handleSubmit(params:FormEvent) {
        params.preventDefault()
        if (!password) {
            toast.error("Insira a senha")
            return;
        }
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setOpen(false)
            toast.success("Senha alterada com sucesso")
        }, 2000)

    }
    return (<Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <form onSubmit={handleSubmit}>
                <DialogHeader>
                    <DialogTitle>Primeiro Login</DialogTitle>
                    <DialogDescription><span className="text-sm text-zinc-800">Precisa insirerir uma nova senha</span></DialogDescription>
                </DialogHeader>
                <div className="my-4 flex flex-col gap-2">
                    <fieldset className="flex flex-col gap-1">
                        <span className="font-bold text-zinc-800 text-sm">Insira a nova senha</span>
                        <Input value={password} onChange={(e)=> setPasswrd(e.target.value)} placeholder="Insira a nova palavra-passe" />
                     </fieldset>
                </div>
                <DialogFooter className="flex  justify-end gap-2">
                    <Button variant={"outline"}>Cancelar</Button>
                    <Button className="text-white bg-orange-600 hover:bg-orange-700 flex items-center">Salvar {isLoading && <Loader2 className="animate-spin" />}</Button>
                </DialogFooter>
            </form>
        </DialogContent>

    </Dialog>
    )
}