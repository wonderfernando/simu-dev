import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ApoliceType, Categoria, FormInput, InsureType, KeyValue } from "../page";
import { GET_APOLICE_TYPE, GET_CATEGORIES, GET_GROUP_OPTIN, GET_INSURE_TYPE } from "@/app/API";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface Props {
    inputs: FormInput;
    isInput: boolean; removeInput: (identify: string, isInput: boolean) => void;
    onChangeInput: (e: string, isInput: boolean, label: string, identify: string) => void;
    setApoliceTypes: Dispatch<SetStateAction<ApoliceType[]>>;
    setInsureType: Dispatch<SetStateAction<InsureType[]>>;
    setCategories: Dispatch<SetStateAction<Categoria[]>>;
    apolices: ApoliceType[];
    insures: InsureType[];
    categories: Categoria[];
    changeCip: (input: FormInput, cip: "category" | "apolice" | "ensure", list: KeyValue[], isInput: boolean) => void
    /*  deleteInput: (identify: string,id:string, isInput: boolean, field: "category" | "insure" | "apolices") => void;
   */
}

export function InputField({ changeCip, inputs: input, onChangeInput, isInput, removeInput, apolices, categories, insures, setApoliceTypes, setCategories, setInsureType }: Props) {



    const { data: groups, isLoading, isError, error } = useQuery({
        queryKey: ["get-grupos-insure"],
        queryFn: GET_GROUP_OPTIN
    })




    function deleteCategory(id: string) {
        const result = categories.filter((cat) => cat.id?.toString() != id)
        setCategories(result)
    }
    function deleteInsure(id: string) {
        const result = insures.filter((insure) => insure.id?.toString() != id)
        setInsureType(result)
    }
    function deleteApolices(id: string) {
        const result = apolices.filter((apolice) => apolice.id.toString() != id)
        setApoliceTypes(result)
    }
    /*  function alreadExists(list: Partial<{ id: string }>[], id: string) {
         const result = list.find((li) => li.id.toString() === id)
         return result
     } */
    /*   function setApolice(id: string) {
          if (alreadExists(apolices, id)) return;
          const result = apoliceType.find((ap) => ap.id.toString() === id)
          if (result) {
              setApoliceTypes([...apolices, result])
          }
          changeCip(input, "apolice", result, isInput)
  
      } */
    /* function setInsure(id: string) {
        if (alreadExists(insures, id)) return;
        const result = securiType.find((ap) => ap.id.toString() === id)
        if (result) {
            setInsureType([...insures, result])
        }
        changeCip(input, "ensure", result, isInput)

    }
    function setCategory(id: string) {
        if (alreadExists(categories, id)) return;
        const result = category.find((ap) => ap.id.toString() === id)
        if (result) {
            setCategories([...categories, result])
        }
        changeCip(input, "category", result, isInput)


    } */
    return (
        <div className="grid items-center gap-2 border rounded">
            <div className="p-1 w-full bg-zinc-200 flex items-center justify-between px-1"><h1>{isInput ? "Input" : "Dados do tomador do seguro"}</h1> <span onClick={() => removeInput(input.identify, isInput)} className="text-xs cursor-pointer hover:underline font-semibold">Remover</span></div>
            <div className="grid grid-cols-3 gap-2 items-center w-full p-2">
                <div className="">
                    <label htmlFor="" className="text-sm">Label</label>
                    <Input onChange={(e) => onChangeInput(e.target.value, isInput, "label", input?.identify)} value={input?.label} placeholder="Insira a Label do input" />
                </div>
                {/*  <div className="">
                    <label htmlFor="" className="text-sm">Tipo</label>
                    <Select value={input.type} onValueChange={(e) => onChangeInput(e, isInput, "type", input.identify)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="text">Texto</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="number">Numero</SelectItem>
                        </SelectContent>
                    </Select>
                </div> */}
                <div className="">
                    <label htmlFor="" className="text-sm">Placeholder</label>
                    <Input value={input?.place_holder} onChange={(e) => onChangeInput(e.target.value, isInput, "place_holder", input?.identify)} placeholder="Insira o placeholder do input" />
                </div>
                <div className="">
                    <label htmlFor="" className="text-sm">Tamanho maximo</label>
                    <Input type="number" value={Number(input?.maxlength)} onChange={(e) => onChangeInput(e.target.value, isInput, "maxlength", input?.identify)} placeholder="Insira o tamanho maximo do input" />
                </div>
                <div className="">
                    <label htmlFor="" className="text-sm">Tipo</label>
                    <Select value={input.type} onValueChange={(e) => onChangeInput(e, isInput, "type", input?.identify)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="text">Texto</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="number">Numero</SelectItem>
                            <SelectItem value="radio">Radio</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {!isInput && <div className="">
                    <label htmlFor="" className="text-sm">Tag</label>

                     <Select value={input.tag.toString()} onValueChange={(e) => onChangeInput(e, isInput, "tag", input?.identify)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione a Tag" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="gender">Genero</SelectItem>
                            <SelectItem value="name">Nome</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="birth_date">Data de nascimento</SelectItem>
                            <SelectItem value="nif">NIF</SelectItem>
                            <SelectItem value="phone_number">Telefone</SelectItem>
                        </SelectContent>
                    </Select>
                </div>}
                {!isInput && <div className="">
                    <label htmlFor="" className="text-sm">Grupo de opcção</label>
                    <Select value={input?.option_group_id} onValueChange={(e) => onChangeInput(e, isInput, "option_group_id", input?.identify)}>
                        <SelectTrigger className="flex-1">
                            <SelectValue placeholder="Selecione o grupo" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                groups?.map((group: any) => (
                                    <SelectItem key={group.id} value={group?.id.toString()}>{group?.name}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>}
                <div className="flex items-end space-x-2  h-full">
                    <Checkbox id="terms" onCheckedChange={(e: any) => onChangeInput(e, isInput, "required", input?.identify)} />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Requerido
                    </label>
                </div>
            </div >
            {/*  <div className="grid grid-cols-2 gap-2 items-start justify-start w-full p-2 grid-auto-rows-min">
                <div className="grid gap-2 self-start">
                    <label htmlFor="" className="text-sm">Categorias</label>
                    <Select onValueChange={(e) => onChangeInput(e.toString(), isInput, "category", input?.identify)}>
                        <SelectTrigger className="flex-1">
                            <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                category?.map((type: any) => (
                                    <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    {input?.show_on_cip?.category_ids.length  > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                        {input?.show_on_cip?.category_ids?.map((g) => <li key={String(g)} className="flex last:pb-0 border-b pb-1 last:border-0 justify-between items-center"><span>{categories.find((cat) => cat.id == String(g))?.name}</span> <Button type="button" onClick={() => deleteInput(input.identify, String(g), isInput, "category")} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                    </div> : <span className="text-xs font-bold">Nenhuma categoria selecionada</span>}

                </div>
                <div className="grid gap-2  w-full self-start ">
                    <label htmlFor="" className="text-sm">Tipos de seguros</label>
                    <Select onValueChange={(e) => onChangeInput(e.toString(), isInput, "ensure", input?.identify)}>
                        <SelectTrigger className="flex-1">
                            <SelectValue placeholder="Selecione o tipo de seguro" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                securiType?.map((type: any) => (
                                    <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    {input?.show_on_cip?.insurance_type_ids?.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                        {input?.show_on_cip?.insurance_type_ids?.map((g) => <li key={String(g)} className="flex last:pb-0 border-b pb-1 last:border-0 justify-between items-center"><span>{insures.find((insure) => insure.id == String(g))?.name}</span> <Button type="button" onClick={() => deleteInput(input.identify, String(g), isInput, "insure")} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                    </div> : <span className="text-xs font-bold">Nenhum tipo de seguro selecionado</span>}
                </div>
                <div className="grid gap-2 self-start">
                    <label className="text-sm" htmlFor="">Tipos de Apolices</label>
                    <Select onValueChange={(e) => onChangeInput(e.toString(), isInput, "apolices", input?.identify)}>
                        <SelectTrigger className="flex-1">
                            <SelectValue placeholder="Selecione tipos de apolices" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                apoliceType?.map((type: any) => (
                                    <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    {input?.show_on_cip.policy_type_ids?.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                        {input?.show_on_cip.policy_type_ids?.map((g) => <li key={g.toString()} className="flex border-b pb-1 last:pb-0 last:border-0 justify-between items-center"><span>{apolices.find((apolice) => apolice.id == String(g))?.name}</span> <Button type="button" onClick={() => deleteInput(input.identify, String(g), isInput, "apolices")} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                    </div> : <span className="text-xs font-bold">Nenhum tipo de apolice selecionado</span>}

                </div>
            </div> */}
        </div >

    )
}