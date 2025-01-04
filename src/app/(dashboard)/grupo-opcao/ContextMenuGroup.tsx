import { DELETE_GROUP } from "@/app/API";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

type Props = {
    children: React.ReactNode,
    group_id: string,
}
export const ContextMenuGroup = ({ children, group_id}: Props) => {
    const client = useQueryClient()
    const {mutateAsync: deleteGroup, isPending: isLoading } = useMutation({
        mutationFn: DELETE_GROUP,
        onSuccess: () => {
            client.invalidateQueries({
                queryKey:["get-grupos-insure", group_id]
            })
        },
        onError: () => {
            toast.error("Erro ao deletar o grupo")
        }
    })
    return (
        <ContextMenu>
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem>Editar</ContextMenuItem>
                <ContextMenuItem onClick={() => deleteGroup(group_id)}>Apagar</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>

    );
}