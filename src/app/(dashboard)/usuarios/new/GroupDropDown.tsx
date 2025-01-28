import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ContextMenuGroupPermission } from "../ContextMenuGroupPermission"

export function GroupDropDown({ data, removeGroup, permitionRestriction,tooglePermission }: { data: any[], tooglePermission: (id: string, type: "Add" | "Remove") => void , permitionRestriction: any[], removeGroup?: (group_id: string) => void }) {



    return (
        <Accordion type="single" className="bg-zinc-50 p-4" collapsible>
            {data?.map((row) => (<AccordionItem value={row.id} key={row.id}>
                <AccordionTrigger value={row.id}>
                    <ContextMenuGroupPermission removeGroup={removeGroup} group_id={row.id} >{row.name}</ContextMenuGroupPermission>
                </AccordionTrigger>
                <AccordionContent className="grid">
                    {row.description}
                    <GroupPermissionDropDown tooglePermission={tooglePermission} permitionRestriction={permitionRestriction} data={row.permissions} />
                </AccordionContent>
            </AccordionItem>))}
        </Accordion>
    )
}

function GroupPermissionDropDown({ data, permitionRestriction,tooglePermission }: { data: any[], permitionRestriction: any[], tooglePermission: (id: string, type: "Add" | "Remove") => void  }) {
    function isAdded(id: string) {
        const isAdd = permitionRestriction.find((row) => {
            if (row.permission_id === id && row.type === "Remove") {
                return true
            }
        })
        return isAdd
    }
    function toogleOnPermission(id: string) {
        if (isAdded(id)) {
            tooglePermission(id, "Remove")
            return;  
        }
        tooglePermission(id, "Add")
    }
    return (
        <Accordion type="single" className="bg-zinc-100 rounded-lg p-4" collapsible>
            <AccordionItem value={"item-1"}>
                <AccordionTrigger className="text-zinc-800 font-bold" value={"item-1"}>Ver permissões</AccordionTrigger>
                <AccordionContent className="grid gap-2">
                    {data?.map((row) => (<div key={row.id} className="flex justify-start items-center">
                        <Button  onClick={() => toogleOnPermission(row.id)} type="button" size="sm" className={`px-2 ${isAdded(row.id) ?  "bg-red-800 hover:bg-red-900" : "bg-green-800 hover:bg-green-900"} h-8 text-xs`}>{isAdded(row.id) ? "Desbloquer":"Bloquear"}</Button> &nbsp;
                        <span className="text-zinc-800">{row.description}</span>
                    </div>))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
