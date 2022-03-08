import React from "react";
import { PushedProps } from "./types";
interface Props extends PushedProps {
    label: string;
    initialOpenState?: boolean;
    className?: string;
    href?: string;
}
declare const AccordionHorizontal: React.FC<Props>;
export default AccordionHorizontal;
