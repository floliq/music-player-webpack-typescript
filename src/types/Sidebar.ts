export interface SidebarNavItem {
    id: string;
    label: string;
    path?: string;
    isActive?: boolean;
    isTab?: boolean;
}

export interface SidebarData {
    lists: SidebarNavItem[];
} 