export declare const links: ({
    label: string;
    icon: string;
    href: string;
    items: {
        label: string;
        href: string;
        icon: string;
        balance: number;
        cost: number;
        items: ({
            label: string;
            href: string;
            icon: string;
            balance: number;
            cost: number;
            coin?: undefined;
            disabled?: undefined;
        } | {
            label: string;
            href: string;
            icon: string;
            balance: number;
            cost: number;
            coin: string;
            disabled?: undefined;
        } | {
            label: string;
            href: string;
            icon: string;
            disabled: boolean;
            coin: string;
            balance?: undefined;
            cost?: undefined;
        })[];
    }[];
} | {
    label: string;
    icon: string;
    href: string;
    items: {
        label: string;
        href: string;
        icon: string;
        disabled: boolean;
    }[];
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const MENU_HEIGHT = 80;
export declare const MENU_ENTRY_HEIGHT = 60;
export declare const SIDEBAR_WIDTH_FULL = 460;
export declare const SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE = 260;
export declare const SIDEBAR_WIDTH_REDUCED = 50;
