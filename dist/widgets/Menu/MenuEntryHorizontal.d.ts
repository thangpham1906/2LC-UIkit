import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
declare const LinkLabel: import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
}, never>;
declare const MenuEntryHorizontal: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
export { MenuEntryHorizontal, LinkLabel };
