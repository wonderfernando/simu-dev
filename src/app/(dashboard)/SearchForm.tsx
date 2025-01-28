"use client"
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce"
export function SearchForm({route}: {route: string}) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get("search")

    const [value, setValue] = useState(search || "")
    const [searchValue] = useDebounce(value, 800)
    const path = usePathname()

    useEffect(() => {
        if (!value) {
            console.log("entrou no false")
            return router.push(`/${route}`)
        }
        console.log(`/${route}?search=${searchValue}`)
        return router.push(`/${route}?search=${searchValue}`)

    }
        , [searchValue])

    function handleSubmit(params: FormEvent) {
        params.preventDefault()

        router.push(`/categorias?search=${searchValue}`)
    }
    return (
        <form onSubmit={handleSubmit} className="relative w-full">
            <Input value={value} onChange={(e) => setValue(e.target.value)} type="search" className="rounded-xl " placeholder="Procurar" />
            <SearchIcon size={24} className="text-zinc-500 absolute right-2 -translate-y-1/2 top-1/2" />
        </form>
    )
}