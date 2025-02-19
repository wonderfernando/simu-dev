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

// Mock data for selects - Replace with your actual data
const companies = [
    { id: 1, name: "Company 1" },
    { id: 2, name: "Company 2" },
];

const insurances = [
    { id: 1, name: "Insurance 1" },
    { id: 2, name: "Insurance 2" },
];


const optionGroups = [
    { id: 1, name: "Option Group 1" },
    { id: 2, name: "Option Group 2" },
];



import { useState } from 'react';
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
import { DialogSaveCategory } from '../categorias/DialogSaveCategory';
import { DialogSavaInsureType } from '../tipo-seguro/DialogSaveInsureType';
import { DialogSaveApoliceType } from '../tipo-apolice/DialogSaveApoliceType';
import { GET_APOLICE_TYPE, GET_CATEGORIES, GET_INPUT, GET_INSURE_TYPE } from '@/app/API';
import { useQuery } from '@tanstack/react-query';
import { PlusIcon, Trash2 } from 'lucide-react';

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
    tabindex: number | null;
    input_id: number;
    option_group_id: number | null;
    show_on_cip: ShowOnCip | null;
}
export default function StepRegistrationPage() {
    const [formData, setFormData] = useState<Step>({
        company_id: 0,
        insurance_id: 0,
        number: 0,
        title: '',
        show_on_cip: null,
        items: [],
    });

    //    const [items, setItems] = useState<StepItem[]>([]);

    const [inputData, setInputData] = useState<StepItem[]>([]);
    const [userGetData, setUserGet] = useState<StepItem[]>([]);
    const [optionGroup, setOptionGroup] = useState<StepItem[]>([]);


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

    const { data: securiType, isPending: isLoadingInsureType } = useQuery({
        queryKey: ["get-tipo-secury"],
        queryFn: GET_INSURE_TYPE
    })

    const { data: category, isPending: isLoadingCategoria } = useQuery({
        queryKey: ["get-categories"],
        queryFn: GET_CATEGORIES
    })

    const { data: apoliceType } = useQuery({
        queryKey: ["get-apolice-type"],
        queryFn: GET_APOLICE_TYPE
    })

    const { data: inputs } = useQuery({
        queryKey: ["get-input"],
        queryFn: GET_INPUT
    })
    console.log(inputs)
    const [showAdvancedCIP, setShowAdvancedCIP] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted step:', formData);
        // Handle form submission here
    };

    const addItemInput = () => {
        setInputData([
            ...inputData,
            {
                id: null,
                type: 'user_get',
                tabindex: null,
                input_id: 0,
                option_group_id: 0,
                show_on_cip: null,
            },
        ]);
    };
    const addItem = () => {
        setFormData({
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
        });
    };

    const removeItem = (index: number) => {
        const newItems = [...formData.items];
        newItems.splice(index, 1);
        setFormData({ ...formData, items: newItems });
    };

    const updateItem = (index: number, field: keyof StepItem, value: any) => {
        const newItems = [...formData.items];
        newItems[index] = { ...newItems[index], [field]: value };
        setFormData({ ...formData, items: newItems });
    };

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
    };
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
                                <Label>Title</Label>
                                <Input
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="Enter step title"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Company</Label>
                                <Select
                                    value={formData.company_id.toString()}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, company_id: parseInt(value) })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select company" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {companies.map((company) => (
                                            <SelectItem key={company.id} value={company.id.toString()}>
                                                {company.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Insurance</Label>
                                <Select
                                    value={formData.insurance_id.toString()}
                                    onValueChange={(value) =>
                                        setFormData({ ...formData, insurance_id: parseInt(value) })
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select insurance" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {insurances.map((insurance) => (
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
                                    type="number"
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
                                            <SelectValue placeholder="Selecione o grupo" />
                                        </SelectTrigger>
                                        <SelectContent>
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
                                            <SelectValue placeholder="Selecione o grupo" />
                                        </SelectTrigger>
                                        <SelectContent>
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


                        <div className="space-y-4 border rounded-md pt-2">
                            <div className="flex justify-between items-center px-2">
                                <h3 className="text-lg font-medium">Inputs</h3>
                                <Button type="button" onClick={addItemInput}>
                                    Add Item
                                </Button>
                            </div>

                            <Table>
                                <TableHeader>

                                    <TableRow>
                                        <TableHead>Input</TableHead>
                                        <TableHead>Tab Index</TableHead>
                                        <TableHead>Option Group</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {inputData?.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Select
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select input" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {inputs?.map((input) => (
                                                            <SelectItem key={input.id} value={input.id.toString()}>
                                                                {input.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    value={item.type}
                                                    onChange={(e) =>
                                                        updateItem(index, 'type', e.target.value)
                                                    }
                                                />
                                            </TableCell>
                                        
                                            <TableCell>
                                                <Select
                                                    value={item.option_group_id?.toString() || "0"}
                                                    onValueChange={(value) =>
                                                        updateItem(
                                                            index,
                                                            'option_group_id',
                                                            value ? parseInt(value) : null
                                                        )
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select option group" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="0">None</SelectItem>
                                                        {optionGroups.map((group) => (
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
                                                    onClick={() => removeItem(index)}
                                                >
                                                    Remove
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="space-y-4 border pt-2 rounded-md ">
                            <div className="flex justify-between items-center px-2 ">
                                <h3 className="text-lg font-medium">User gets</h3>
                                <Button type="button" onClick={addItem}>
                                    Add Item
                                </Button>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Input</TableHead>
                                        <TableHead>Option Group</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {formData.items.map((item, index) => (
                                        <TableRow key={index}>
                                             <TableCell>
                                                <Select
                                                    value={item.input_id.toString()}
                                                    onValueChange={(value) =>
                                                        updateItem(index, 'input_id', parseInt(value))
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select input" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {inputs.map((input) => (
                                                            <SelectItem key={input.id} value={input.id.toString()}>
                                                                {input.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    value={item.type}
                                                    onChange={(e) =>
                                                        updateItem(index, 'type', e.target.value)
                                                    }
                                                />
                                            </TableCell>
                                           
                                            <TableCell>
                                                <Select
                                                    value={item.option_group_id?.toString() || "0"}
                                                    onValueChange={(value) =>
                                                        updateItem(
                                                            index,
                                                            'option_group_id',
                                                            value ? parseInt(value) : null
                                                        )
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select option group" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="0">None</SelectItem>
                                                        {optionGroups.map((group) => (
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
                                                    onClick={() => removeItem(index)}
                                                >
                                                    Remove
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="space-y-4 border rounded-md pt-2">
                            <div className="flex justify-between items-center px-2">
                                <h3 className="text-lg font-medium">Option groups</h3>
                                <Button type="button" onClick={addItem}>
                                    Add Item
                                </Button>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Input</TableHead>
                                        <TableHead>Option Group</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {formData.items.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Input
                                                    value={item.type}
                                                    onChange={(e) =>
                                                        updateItem(index, 'type', e.target.value)
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Select
                                                    value={item.input_id.toString()}
                                                    onValueChange={(value) =>
                                                        updateItem(index, 'input_id', parseInt(value))
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select input" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {inputs.map((input) => (
                                                            <SelectItem key={input.id} value={input.id.toString()}>
                                                                {input.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Select
                                                    value={item.option_group_id?.toString() || "0"}
                                                    onValueChange={(value) =>
                                                        updateItem(
                                                            index,
                                                            'option_group_id',
                                                            value ? parseInt(value) : null
                                                        )
                                                    }
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select option group" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="0">None</SelectItem>
                                                        {optionGroups.map((group) => (
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
                                                    onClick={() => removeItem(index)}
                                                >
                                                    Remove
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <Button type="submit" className="w-full">
                            Save Step
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}