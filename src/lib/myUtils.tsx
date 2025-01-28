import { link } from "fs";
import { Album, ContactRound, HomeIcon, LogOut, Settings, Shield, ShieldQuestion, TagIcon, User, Users2 } from "lucide-react";
import { ReactNode } from "react";
export type menuSideBarProps = Array<{ icon: ReactNode, label: string, link: string }>
export const menuSideBar: menuSideBarProps = [
  {
    icon: <HomeIcon />,
    label: "Inicio",
    link: "/",
  },
  {
    icon: <Users2 />,
    label: "Entidades",
    link: "/entidades",
  },
  {
    icon: <User />,
    label: "Perfil",
    link: "/perfil",
  },
  {
    icon: <Settings />,
    label: "Configurações",
    link: "/configuracoes",
  },
  {
    icon: <LogOut />,
    label: "Sair",
    link: "/sair",
  },

]
/* export const menuSideBar: menuSideBarProps = [
  {
    icon: <HomeIcon />,
    label: "Inicio",
    link: "/",
  },
  {
    icon: <TagIcon />,
    label: "Categorias",
    link: "/categorias",
  },
  {
    icon: <TagIcon />,
    label: "Seguros",
    link: "/seguros",
  },
  {
    icon: <TagIcon />,
    label: "Tipo de seguros",
    link: "/tipo-seguros",
  },
  {
    icon: <TagIcon />,
    label: "Tipo de apolice",
    link: "/tipo-apolice",
  },
  {
    icon: <ShieldQuestion />,
    label: "Meus clientes",
    link: "/meus-clientes",
  },
  {
    icon: <Album />,
    label: "Tipo de apolice",
    link: "/tipo-apolice",
  },
]
 */
