import React from "react";
import { PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
    showBalance: boolean;
}
declare const SideBarBody: React.FC<Props>;
export default SideBarBody;
