'use client';

// types.ts
type ShowOnCIP = {
    category_ids: number[];
    insurance_type_ids: number[];
    policy_type_ids: number[];
} | null;



type Step = {
    company_id: number;
    insurance_id: number;
    number: number;
    title: string;
    show_on_cip: ShowOnCIP;
    items: StepItem[];
};





const optionGroups = [
    { id: 1, name: "Option Group 1" },
    { id: 2, name: "Option Group 2" },
];



import { use, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { GET_APOLICE_TYPE, GET_APOLICE_TYPE_BY_INSURE, GET_CATEGORIES, GET_CATEGORIES_BY_INSURE, GET_COMPANHIAS, GET_GROUP_NO_OPTION, GET_INPUT, GET_INSURE_TYPE, GET_INSURE_TYPE_BY_INSURANCE, GET_INSURES, GET_USER_GET, POST_STEP } from '@/app/API';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Loader2, PlusIcon, Trash2 } from 'lucide-react';
import { DialogSaveApoliceType } from '@/app/(dashboard)/tipo-apolice/DialogSaveApoliceType';
import { DialogSavaInsureType } from '@/app/(dashboard)/tipo-seguro/DialogSaveInsureType';
import { DialogSaveCategory } from '@/app/(dashboard)/categorias/DialogSaveCategory';
import { Span } from 'next/dist/trace';
import { Loader } from '@/components/Loader';
import toast from 'react-hot-toast';

export interface ApoliceType {
    id: string;
    name: string,
}
export interface InsureType {
    id?: string;
    name: string,
}

export interface Categoria {
    id?: string;
    name: string,
}
interface ShowOnCip {
    category_ids?: number[];
    insurance_type_ids?: number[];
    policy_type_ids?: number[];
}


interface StepItem {
    id: number | null;
    type: string;
    tabindex: string | null;
    input_id: number;
    option_group_id: number | null;
    show_on_cip: ShowOnCip | null;
}
export default function StepRegistrationPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [formData, setFormData] = useState<Step>({
        company_id: 0,
        insurance_id: id ? parseInt(id) : 0,
        number: 0,
        title: '',
        show_on_cip: null,
        items: [],
    });

    //    const [items, setItems] = useState<StepItem[]>([]);


    const [inputData, setInputData] = useState<StepItem[]>([]);
    const [userGetData, setUserGetData] = useState<StepItem[]>([]);
    const [optionGroupData, setOptionGroupData] = useState<StepItem[]>([]);


    const [apolices, setApoliceTypes] = useState<ApoliceType[]>([])
    const [insures, setInsureType] = useState<InsureType[]>([])
    const [categories, setCategories] = useState<Categoria[]>([])


    function setApolice(id: string) {
        if (alreadExists(apolices, id)) return;
        const result = apoliceType.find((ap) => ap.id.toString() === id)
        if (result) {
            setApoliceTypes([...apolices, result])
        }
    }
    function alreadExists(list: Partial<{ id: string }>[], id: string) {
        const result = list.find((li) => li.id.toString() === id)
        return result
    }
    function setInsure(id: string) {
        if (alreadExists(insures, id)) return;
        const result = securiType.find((ap) => ap.id.toString() === id)
        if (result) {
            setInsureType([...insures, result])
        }
    }
    function setCategory(id: string) {
        if (alreadExists(categories, id)) return;
        const result = category.find((ap) => ap.id.toString() === id)
        if (result) {
            setCategories([...categories, result])
        }
    }
    function updateGroup(index: number, field: keyof StepItem, value: string | Number) {
        const newInputs = [...optionGroupData];
        newInputs[index] = { ...newInputs[index], [field]: value };
        setOptionGroupData(newInputs);
    }
    function updateInput(index: number, field: keyof StepItem, value: string | number) {
        const newInputs = [...inputData];
        newInputs[index] = { ...newInputs[index], [field]: value };
        setInputData(newInputs);
    }
    function updateUserGet(index: number, field: keyof StepItem, value: string | Number) {
        const newInputs = [...userGetData];
        newInputs[index] = { ...newInputs[index], [field]: value };
        setUserGetData(newInputs);
    }
    console.log(inputData)

    const { data: securiType, isPending: isLoadingInsureType } = useQuery({
        queryKey: ["get-tipo-secury"],
        queryFn:({queryKey}) => GET_INSURE_TYPE_BY_INSURANCE(queryKey[1])
    })


    const { data: companies, isPending: isLoadingCompany } = useQuery({
        queryKey: ["get-company"],
        queryFn: GET_COMPANHIAS
    })

    const { data: insurances, isPending: isLoadingInsure } = useQuery({
        queryKey: ["get-insure"],
        queryFn: GET_INSURES
    })

    const { data: groups, isPending: isLoadingGroups } = useQuery({
        queryKey: ["get-group", id],
        queryFn: ({ queryKey }) => GET_GROUP_NO_OPTION(queryKey[1])
    })

    const { data: category, isPending: isLoadingCategoria } = useQuery({
        queryKey: ["get-categories", id],
        queryFn: ({queryKey}) => GET_CATEGORIES_BY_INSURE(queryKey[1])
    })

    const { data: apoliceType, isPending: isLoadingApolice } = useQuery({
        queryKey: ["get-apolice-type_one", id],
        queryFn: ({queryKey}) => GET_APOLICE_TYPE_BY_INSURE(queryKey[1])
    })

    const { data: inputs, isPending: isLoadingInput } = useQuery({
        queryKey: ["get-input", id],
        queryFn: ({queryKey}) => GET_INPUT(queryKey[1])
    })
   
    const { data: userGets, isPending: isLoadingUserGet} = useQuery({
        queryKey: ["get-user-get", id],
        queryFn: ({queryKey}) => GET_USER_GET(queryKey[1])
    })
   
    const {mutateAsync: createStep, isPending} = useMutation({
        mutationFn: POST_STEP,
        onError(error){
            toast.error('Erro ao cadastrar step')
            console.log(error)
        },
        onSuccess(data){
            toast.success('Step cadastrado com sucesso')    
            console.log(data)
        }
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const cip: ShowOnCIP = {
            category_ids: categories.map(i => Number(i.id)),
            insurance_type_ids: insures.map(i => Number(i.id)),
            policy_type_ids: apolices.map(i => Number(i.id)),
        }
        setInputData([])
        setUserGetData([])
        setOptionGroupData([])
        console.log('Submitted step:', {...formData,["show_on_cip"]: cip, ["items"]: [...inputData, ...userGetData, ...optionGroupData]});
        await createStep({...formData,["show_on_cip"]: cip, ["items"]: [...inputData, ...userGetData, ...optionGroupData]})
    };


    const addItemInput = () => {
        setInputData([
            ...inputData,
            {
                id: null,
                type: 'input',
                tabindex: null,
                input_id: 0,
                option_group_id: null,
                show_on_cip: null,
            },
        ]);
    };
    const addItemUserGet = () => {
        setUserGetData([
            ...userGetData,
            {
                id: null,
                type: 'user_get',
                tabindex: null,
                input_id: 0,
                option_group_id: null,
                show_on_cip: null,
            },
        ]);
    };


    const addItemGroup = () => {
        setOptionGroupData([
            ...optionGroupData,
            {
                id: null,
                type: 'option_group',
                tabindex: "",
                input_id: null,
                option_group_id: 0,
                show_on_cip: null,
            },
        ]);
    };


    const addItem = () => {
        /*   setFormData({
              ...formData,
              items: [
                  ...formData.items,
                  {
                      id: null,
                      type: 'user_get',
                      tabindex: null,
                      input_id: 0,
                      option_group_id: 0,
                      show_on_cip: null,
                  },
              ],
          }); */
    };
    
    const removeInput = (index: number) => {
        const newItems = [...inputData];
        newItems.splice(index, 1);
        setInputData(newItems);
    };
    const removeUserGet = (index: number) => {
        const newItems = [...userGetData];
        newItems.splice(index, 1);
        setUserGetData(newItems);
    };
    const removeGroup = (index: number) => {
        const newItems = [...optionGroupData];
        newItems.splice(index, 1);
        setOptionGroupData(newItems);
    };
  /*   const removeItem = (index: number) => {
        const newItems = [...formData.items];
        newItems.splice(index, 1);
        setFormData({ ...formData, items: newItems });
    }; */

    const updateItem = (index: number, field: keyof StepItem, value: any) => {
        const newItems = [...formData.items];
        newItems[index] = { ...newItems[index], [field]: value };
        setFormData({ ...formData, items: newItems });
    }
/* 
    const handleCIPChange = (value: string) => {
        const categoryIds = value.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
        setFormData({
            ...formData,
            show_on_cip: {
                category_ids: categoryIds,
                insurance_type_ids: [],
                policy_type_ids: [],
            },
        });
    }; */
    function deleteInsure(id: string) {
        const result = insures.filter((insure) => insure.id?.toString() != id)
        setInsureType(result)
    }
    function deleteCategory(id: string) {
        const result = categories.filter((cat) => cat.id?.toString() != id)
        setCategories(result)
    }
    function deleteApolices(id: string) {
        const result = apolices.filter((apolice) => apolice.id.toString() != id)
        setApoliceTypes(result)
    }
    return (
        <div className="container mx-auto p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Cadastro de Step</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 col-span-2">
                                <Label>Titulo</Label>
                                <Input
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="Introduza o titulo do Step"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Companhia</Label>
                                <Select
                                    value={formData.company_id.toString()}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, company_id: parseInt(value) })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione a companhia" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {companies?.map((company) => (
                                            <SelectItem key={company.id} value={company.id.toString()}>
                                                {company.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Seguro</Label>
                                <Select

                                    autoComplete="on"
                                    value={formData.insurance_id.toString()}
                                /*   onValueChange={(value) =>
                                      setFormData({ ...formData, insurance_id: parseInt(value) })
                                  } */
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione o seguro" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {insurances?.map((insurance) => (
                                            <SelectItem key={insurance.id} value={insurance.id.toString()}>
                                                {insurance.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Step Number</Label>
                                <Input
                                    type="text"
                                    value={formData.number}
                                    onChange={(e) =>
                                        setFormData({ ...formData, number: parseInt(e.target.value) || 0 })
                                    }
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 items-start ">
                            <fieldset className="flex flex-col gap-1 ">
                                <span className="font-bold text-zinc-800 text-sm">Tipo de Apolice</span>
                                <div className="w-full flex   items-center gap-2">
                                    <Select onValueChange={(e) => setApolice(e)}>
                                        <SelectTrigger className="flex-1">
                                            <SelectValue placeholder="Selecione o tipo de apolice" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {isLoadingApolice && <Loader />}
                                            {
                                                apoliceType?.map((type: any) => (
                                                    <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <DialogSaveApoliceType>
                                        <Button type="button" title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button>
                                    </DialogSaveApoliceType>
                                </div>
                                {apolices.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                                    {apolices.map((g) => <li key={g.id} className="flex border-b pb-1 last:pb-0 last:border-0 justify-between items-center"><span>{g.name}</span> <Button type="button" onClick={() => deleteApolices(g.id)} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                                </div> : <span className="text-xs font-bold">Nenhum tipo de apolice selecionado</span>}
                            </fieldset>
                            <fieldset className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-800 text-sm">Tipo de seguro</span>
                                <div className="w-full flex   items-center gap-2">
                                    <Select onValueChange={(e) => setInsure(e)}>
                                        <SelectTrigger className="flex-1">
                                            <SelectValue placeholder="Selecione o tipo de seguro" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {isLoadingInsureType && <Loader />}
                                            {
                                                securiType?.map((type: any) => (
                                                    <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <DialogSavaInsureType><Button title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button></DialogSavaInsureType>
                                </div>
                                {insures.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                                    {insures.map((g) => <li key={g.id} className="flex last:pb-0 border-b pb-1 last:border-0 justify-between items-center"><span>{g.name}</span> <Button type="button" onClick={() => deleteInsure(g.id)} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                                </div> : <span className="text-xs font-bold">Nenhum tipo de seguro selecionado</span>}
                            </fieldset>
                        </div>
                        <br />
                        <div className="grid grid-cols-2 gap-2 items-start">
                            <fieldset className="flex flex-col gap-1">
                                <span className="font-bold text-zinc-800 text-sm">Categoria</span>
                                <div className="w-full flex   items-center gap-2">
                                    <Select onValueChange={(e) => setCategory(e)}>
                                        <SelectTrigger className="flex-1">
                                            <SelectValue placeholder="Selecione o grupo" />
                                        </SelectTrigger>
                                        <SelectContent>

                                            {isLoadingCategoria && <Loader />}
                                            {
                                                category?.map((cat: any) => (
                                                    <SelectItem key={cat.id} value={cat.id.toString()}>{cat.name}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <DialogSaveCategory><Button type="button" title="Cadastrar grupo" className="p-0 w-8 h-8 rounded-full" ><PlusIcon /></Button></DialogSaveCategory>
                                </div>
                                {categories.length > 0 ? <div className="w-full flex flex-col gap-2 text-sm border shadow p-2 rounded-md">
                                    {categories.map((g) => <li key={g.id} className="flex border-b pb-1 last:pb-0 last:border-0 justify-between items-center"><span>{g.name}</span> <Button type="button" onClick={() => deleteCategory(g.id)} size="sm" className="p-0 px-2" variant="outline"><Trash2 /></Button></li>)}
                                </div> : <span className="text-xs font-bold">Nenhuma categoria selecionada</span>}
                            </fieldset>
                        </div>
 <div className="space-y-4 border pt-2 rounded-md ">
                            <div className="flex justify-between items-center px-2 ">
                                <h3 className="text-lg font-medium">Campos do tomador de seguro</h3>
                                <Button type="button" onClick={addItemUserGet}>
                                    Add Item
                                </Button>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Campo</TableHead>
                                        <TableHead>Posição</TableHead>
                                        <TableHead>Acção</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {userGetData?.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Select
                                                    onValueChange={(e) => updateUserGet(index, "input_id", Number(e))}
                                                    value={String(userGetData[index].input_id?.toString())}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o campo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {isLoadingInput && <Loader />}
                                                        {userGets?.map((input, index) => (
                                                            <SelectItem key={index} value={input.id.toString()}>
                                                                {input.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    type='text'
                                                    value={item.tabindex ?? ""}
                                                    onChange={(e) =>
                                                        updateUserGet(index, 'tabindex', Number(e.target.value))
                                                    }
                                                />
                                            </TableCell>

                                            <TableCell>
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    onClick={() => removeUserGet(index)}
                                                >
                                                    Remover
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="space-y-4 border rounded-md pt-2">
                            <div className="flex justify-between items-center px-2">
                                <h3 className="text-lg font-medium">Campos</h3>
                                <Button type="button" onClick={addItemInput}>
                                    Add Item
                                </Button>
                            </div>

                            <Table>
                                <TableHeader>

                                    <TableRow>
                                        <TableHead>Campo</TableHead>
                                        <TableHead>Posição</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {inputData?.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Select
                                                    onValueChange={(e) => updateInput(index, "input_id", Number(e))}
                                                    value={String(inputData[index].input_id)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o campo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {isLoadingInput && <Loader />}
                                                        {inputs?.map((input, index) => (
                                                            <SelectItem key={index} value={input.id.toString()}>
                                                                {input.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    type='text'
                                                    value={item.tabindex ?? ""}
                                                    onChange={(e) =>
                                                        updateInput(index, 'tabindex', Number(e.target.value))
                                                    }
                                                />
                                            </TableCell>

                                            <TableCell>
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    onClick={() => removeInput(index)}
                                                >
                                                    Remover
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                       
                        <div className="space-y-4 border rounded-md pt-2">
                            <div className="flex justify-between items-center px-2">
                                <h3 className="text-lg font-medium">Grupos de options</h3>
                                <Button type="button" onClick={addItemGroup}>
                                    Add Item
                                </Button>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Posição</TableHead>
                                        <TableHead>Grupos</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className=''>
                                    {optionGroupData?.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Input
                                                    value={item.tabindex}
                                                    onChange={(e) =>
                                                        updateGroup(index, 'tabindex', Number(e.target.value))
                                                    }
                                                />
                                            </TableCell>
                                          
                                            <TableCell>
                                                <Select
                                                    value={String(optionGroupData[index]?.option_group_id?.toString())}
                                                    onValueChange={(value) =>
                                                        updateGroup(
                                                            index,
                                                            'option_group_id',
                                                            value
                                                        )
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o grupo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                      {isLoadingGroups && <Loader/>}
                                                        {groups?.map((group) => (
                                                            <SelectItem key={group.id} value={group.id.toString()}>
                                                                {group.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    onClick={() => removeGroup(index)}
                                                >
                                                    Remove
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <Button disabled={isPending} type="submit" className="w-full flex items-center gap-2">
                            Salvar {isPending && <Loader2 className='animate-spin'/>}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}