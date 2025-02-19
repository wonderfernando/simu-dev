"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Edit, Plus } from "lucide-react";
import { SearchParamProps } from "@/app/(dashboard)/categorias/page";
import { use, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { GET_STEPS } from "@/app/API";


export default function CardList({ searchParams, params }: SearchParamProps) {
  const { id } = use(params)
  const { data } = useQuery({
    queryKey: ["steps", id],
    queryFn: () => GET_STEPS(id)
  })

  useEffect(() => {
    if (data)
      console.log(data)
  }, [data])
  return (
    <div className="grid gap-6 p-6">
      <div className="w-full flex items-end justify-end ">
        <Link href="step/new">
          <Button className="bg-[#e67d06] hover:bg-[#a74e0b]"><span className="hidden md:flex items-start">Cadastrar</span> <Plus /></Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {data?.map((item) => (
          <Card key={item?.id} className="hover:shadow-lg transition-shadow relative">
            {/* Link para a página de detalhes */}
            <Link href={`/seguros/${id}/step/${item?.id}`}>
              <CardHeader>
                <CardTitle className="text-lg font-bold">{item?.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Número: {item?.number}</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {item?.items?.map((subItem) => (
                    <li key={subItem?.id} className="text-gray-700">
                      - {subItem?.obj?.label || subItem?.obj?.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Link>

            {/* Área dos botões de ação */}
            <CardFooter className="flex justify-end space-x-2 border-t pt-2">
              <Link href={`/editar/${item.id}`}>
                <Button variant="outline" size="sm">
                  <Edit size={16} /> Editar
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => console.log("Remover", item.id)}
              >
                <Trash2 size={16} /> Remover
              </Button>
            </CardFooter>
          </Card>
        ))}
           {data?.length === 0 && <h1 className="text-3xl font-semibold"> Nenhum Step encotrado!</h1>}
      </div>
    </div>

  );
}