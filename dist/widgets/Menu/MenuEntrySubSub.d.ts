import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
    disabled?: boolean;
    showBalance?: boolean;
}
declare const LinkLabelSubSub: import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
}, never>;
declare const MenuEntrySubSub: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
export { MenuEntrySubSub, LinkLabelSubSub };
