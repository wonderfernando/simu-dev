import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";

type Props = {
    children: React.ReactNode,
    group_id: string,
    removeGroup?: (group_id: string) => void 
}
export const ContextMenuGroupPermission = ({ children, group_id, removeGroup}: Props) => {
 
    return (
        <ContextMenu>
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem onClick={() => removeGroup(group_id)}>Apagar</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>

    );
}