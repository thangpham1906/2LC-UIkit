import React from "react";
import { PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
}
declare const NavBarBody: React.FC<Props>;
export default NavBarBody;
