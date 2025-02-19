import { Loader2 } from "lucide-react";

export function Loader() {
    return (
        <span className='font-xs flex gap-2 items-center'>Buscando <Loader2 width={14} className='animate-spin'/></span>
    )
}