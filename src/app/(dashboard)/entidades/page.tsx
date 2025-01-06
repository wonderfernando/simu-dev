import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";


interface EntitiesPageProps {
    id: number;
    icon: string;
    label: string;
    link: string;
}

const entidades: EntitiesPageProps[] = [
    { id: 1, icon: "categoria.png", label: "Categorias", link: "/categorias" },
    { id: 2, icon: "/companhia.png", label: "Companhia" , link: "/companhias" },
    { id: 3, icon: "/shield-plus.png", label: "Seguros", link: "/seguros" },
    { id: 4, icon: "/trofeu.png", label: "Premio" , link: "/premios" },
    { id: 5, icon: "/usershild.png", label: "Apólice" , link: "/apolices" },
    { id: 6, icon: "/warranty.png", label: "Tipo de Seguro" , link: "/tipo-seguro" },
    { id: 7, icon: "/paper.png", label: "Tipo de apolice" , link: "/tipo-apolice" },
    { id: 8, icon: "/paper.png", label: "Grupo de opções" , link: "/grupo-opcao" },
/*     { id: 9, icon: "/paper.png", label: "opções" , link: "/opcoes" },
 */]

export default  async function EntitiesPage() {
    const categorias = await new Promise((resolve, reject) => { setTimeout(() => resolve([]), 2000) })
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                entidades.map((item) => (
                    <Link key={item.id} href={item.link}>
                        <div className="flex gap-4 bg-zinc-100 rounded-2xl p-2 hover:bg-zinc-200/50 hover:scale-105 shadow-lg md:shadow transition-all">
                            <div className="bg-orange-600 rounded-2xl p-4 flex items-center">
                                <img width={48} src={item.icon} />
                            </div>
                            <div className="flex items-center justify-between w-full text-orange-500">
                                <h1 className="font-bold ">{item.label}</h1>
                                <ChevronRightCircle />
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}