import React from "react";
import { PushedProps } from "./types";
interface Props extends PushedProps {
    label: string;
    icon: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
    showBalance: boolean;
}
declare const SideBarMainAndSubMenu: React.FC<Props>;
export default SideBarMainAndSubMenu;
