import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronDownCircle,
  PlusCircleIcon,
  PlusIcon,
  Settings,
} from "lucide-react";
import { PopoverSettingButton } from "./categorias/TableCategory";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ensures = [
  {
    id: 1,
    icon: "/steering-wheel.png",
    label: "Seguro Automóvel",
    description: "200 a faltar",
  },
  {
    id: 2,
    icon: "/doctor.png",
    label: "Seguro de vida",
    description: "400 a faltar",
  },
  {
    id: 3,
    icon: "/house-circle-check.png",
    label: "Seguro Mobiliário",
    description: "610 a faltar",
  },
  {
    id: 4,
    icon: "/steering-wheel.png",
    label: "Seguro Automóvel",
    description: "1500 a faltar",
  },
  {
    id: 5,
    icon: "/health-insurance.png",
    label: "Seguro de Saúde",
    description: "300 a faltar",
  },
  {
    id: 6,
    icon: "/travel-insurance.png",
    label: "Seguro de Viagem",
    description: "120 a faltar",
  },
  {
    id: 7,
    icon: "/home-insurance.png",
    label: "Seguro de Habitação",
    description: "450 a faltar",
  },
  {
    id: 8,
    icon: "/pet-insurance.png",
    label: "Seguro de Animais",
    description: "50 a faltar",
  },
  {
    id: 9,
    icon: "/gadget-insurance.png",
    label: "Seguro de Gadgets",
    description: "75 a faltar",
  },
];
type Order = {
  id: number;
  client: string;
  description: string;
  coverage: string;
  expiresIn: string;
  premium: string;
  status: string;
};

// contagem das simulações
export default async function HomePage() {
  const orders: Order[] = [
    {
      id: 1,
      client: "João Silva",
      description: "Seguro Automóvel",
      coverage: "Cobertura Total",
      expiresIn: "2023-12-31",
      premium: "Kz 1200,00",
      status: "Ativo",
    },
    {
      id: 2,
      client: "Maria Oliveira",
      description: "Seguro de Vida",
      coverage: "Cobertura Parcial",
      expiresIn: "2024-05-15",
      premium: "Kz 800,00",
      status: "Ativo",
    },
    {
      id: 3,
      client: "Carlos Pereira",
      description: "Seguro Mobiliário",
      coverage: "Cobertura Total",
      expiresIn: "2023-11-20",
      premium: "Kz$ 950,00",
      status: "Expirado",
    },
    {
      id: 4,
      client: "Ana Costa",
      description: "Seguro Automóvel",
      coverage: "Cobertura Parcial",
      expiresIn: "2024-01-10",
      premium: "Kz 1100,00",
      status: "Ativo",
    },
    {
      id: 5,
      client: "Pedro Santos",
      description: "Seguro de Saúde",
      coverage: "Cobertura Total",
      expiresIn: "2024-03-22",
      premium: "Kz 1300,00",
      status: "Ativo",
    },
    {
      id: 6,
      client: "Luisa Fernandes",
      description: "Seguro de Viagem",
      coverage: "Cobertura Parcial",
      expiresIn: "2023-12-05",
      premium: "Kz 700,00",
      status: "Expirado",
    },
    {
      id: 7,
      client: "Ricardo Almeida",
      description: "Seguro de Habitação",
      coverage: "Cobertura Total",
      expiresIn: "2024-06-30",
      premium: "Kz 1500,00",
      status: "Ativo",
    },
    {
      id: 8,
      client: "Sofia Martins",
      description: "Seguro de Automóvel",
      coverage: "Cobertura Parcial",
      expiresIn: "2024-02-14",
      premium: "Kz 900,00",
      status: "Ativo",
    },
  ];

 

  return (
    <div>
      <h1>Os teus seguros</h1>
      <ScrollArea className="white-space-nowrap w-screen md:w-[calc(100vw-300px)]">
        <div className="flex gap-4 w-max">
          {ensures.map((ensure) => (
            <div className="rounded-3xl bg-zinc-100 p-4 flex flex-col gap-4 min-w-[200px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-center bg-white rounded-full p-2">
                  <img width={18} src={ensure.icon} />
                </div>
                <h1 className="text-sm text-zinc-500">{ensure.label}</h1>
              </div>
              <Diviser />
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-500">
                  {ensure.description}
                </span>
                <ChevronDownCircle className="text-sm text-zinc-500" />
              </div>
            </div>
          ))}
          <div className="flex justify-end ">
            <div className="bg-orange-700 w-[70px] cursor-pointer flex items-center justify-center rounded-3xl">
              <PlusCircleIcon fill="#fff" className="text-orange-700" />
            </div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="mt-4">
        <h1 className="font-extrabold">Ultimos pedidos</h1>
        <ScrollArea className="w-screen md:w-[calc(100vw-300px)]">
          <Table className=" border-spacing-y-1 border-separate">
            <TableHeader className=" rounded-lg">
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Cobertura</TableHead>
                <TableHead>Expira em</TableHead>
                <TableHead>Premio</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acção</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  className="hover:bg-zinc-200/50 bg-zinc-50 "
                >
                  <TableCell className="rounded-full">{order.client}</TableCell>
                  <TableCell>{order.description}</TableCell>
                  <TableCell>{order.coverage}</TableCell>
                  <TableCell>{order.expiresIn}</TableCell>
                  <TableCell>{order.premium}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    <Button className="py-0 px-0 h-8 w-8" variant={"outline"}>
                      <Settings />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

function Diviser() {
  return (
    <div className="relative w-full h-1 rounded-full bg-zinc-300">
      <div className="absolute top-0 left-0 h-1 w-1/2 bg-orange-600 rounded-full"></div>
    </div>
  );
}
