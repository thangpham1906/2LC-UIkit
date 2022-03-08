import React from "react";
import { PushedProps } from "./types";
interface Props extends PushedProps {
    label: string;
    icon: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
    showBalance?: boolean;
    balance?: number;
    cost?: number;
    coin?: React.ReactElement | string;
}
declare const SideBarSubAndSubMenu: React.FC<Props>;
export default SideBarSubAndSubMenu;
