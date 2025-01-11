import { CategoriaProps } from "./(dashboard)/categorias/TableCategory";

//const URL = "http://192.168.1.99:5008";
const URL = "https://api-simulator.mtapp.ao"


export async function POST_INSURE_TYPE(data: { name?: string, description?: string, icon?: string }) {
    const response = await fetch(`${URL}/insurance_type`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json)
    return json;
}

export async function POST_INSURE_UNIQUE(data: any) {
    const response = await fetch(`${URL}/insurance`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json)
    return json;
}


export async function GET_APOLICE_TYPE() {
    const response = await fetch(`${URL}/policy_type`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return json;
}
export async function POST_APOLICE_TYPE(data: { name?: string, description?: string }) {
    const response = await fetch(`${URL}/policy_type`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json)
    return json;
}

export async function PUT_APOLICE_TYPE({ data, id }: { id: string, data: Partial<{ name: string, description?: string }> }) {

    const response = await fetch(`${URL}/policy_type`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, id }),
    });
    const json = await response.json();
    
    return json;
}

export async function DELETE_INSURE_TYPE(id: string) {
    const response = await fetch(`${URL}/insurance_type/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await response.json();
    return data;
}
export async function PUT_INSURE_TYPE({ data, id }: { id: string, data: Partial<{name?:string, description?:string,icon?:string}> }) {

    const response = await fetch(`${URL}/insurance_type`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, id }),
    });
    const json = await response.json();
    console.log(json)
    return json;
}

export async function DELETE_APOLICE_TYPE(id: string) {
    const response = await fetch(`${URL}/policy_type/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await response.json();
    return data;
}
export async function GET_CATEGORIES(): Promise<CategoriaProps[]> {
    const response = await fetch(`${URL}/category`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return json;
}

export async function GET_CATEGORY(id: string) {
    const response = await fetch(`${URL}/category/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return json;
}

export async function GET_INSURE_TYPE(){
    const response = await fetch(`${URL}/insurance_type`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return json;
}

export async function GET_INSURES() {
    const response = await fetch(`${URL}/insurance`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return json;
}
export async function GET_GROUP_INSURE(id: string) {

    const response = await fetch(`${URL}/option_group?insurance_id=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    console.log(json)
    return json;
}

export async function GET_GROUP_OPTIN() {
    const response = await fetch(`${URL}/option_group`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return json;
}
export async function GET_OPTION_BY_GROUP_INSURE({ insurance_id, option_group_id }: { insurance_id: string, option_group_id: string }) {
    const response = await fetch(`${URL}/option?insurance_id=${insurance_id}&option_group_id=${option_group_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    return json;
}
export interface Category {
    id: string;
    name: string;
    description: string;
}
export async function POST_INSURE(data: { name?: string, description?: string }) {
    const response = await fetch(`${URL}/insurance`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}

export async function PUT_INSURE({ data, id }: { id: string, data: Partial<{ name: string, description?: string }> }) {

    const response = await fetch(`${URL}/insurance`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, id }),
    });
    const json = await response.json();
    if (!json.status) {
        throw new Error(json.message);
    }
    return json;
}

export async function DELETE_INSURE(id: string) {
    const response = await fetch(`${URL}/insurance/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await response.json();
    return data;
}
export async function POST_CATEGORY(data: { name?: string, description?: string }) {
    const response = await fetch(`${URL}/category`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}

export async function DELETE_CATEGORY(id: string) {
    const response = await fetch(`${URL}/category/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await response.json();
    return data;
}

export async function PUT_CATEGORY({ data, id }: { id: string, data: Partial<CategoriaProps> }) {

    const response = await fetch(`${URL}/category`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, id }),
    });
    const json = await response.json();
    if (!json.status) {
        throw new Error(json.message);
    }
    return json;
}

interface Option {
    name: string,
    insurance_id: string,
    option_group_id: number
}
export async function POST_OPTION(data: Option) {
    console.log(data)
    const response = await fetch(`${URL}/option`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json)
    return json;
}

interface Group {
    name: string
    description: string
    insurance_id: Number
}

export async function POST_GROUP(data: any) {
    console.log(data)
    const response = await fetch(`${URL}/option_group`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json)
    return json;
}

export async function DELETE_ONE(id: string) {
    const response = await fetch(`${URL}/option/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const json = await response.json();
    console.log(json)
    return json;
}

export async function DELETE_GROUP(id: string) {
    const response = await fetch(`${URL}/option_group/${Number(id)}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const json = await response.json();
    console.log(json)
    return json;
}

