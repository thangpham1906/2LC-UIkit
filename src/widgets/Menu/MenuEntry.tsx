import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT, SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  showBalance?: boolean;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: #ffffff;
  transition: color 0.4s;
  font: normal normal bold 14px/18px Swis721 BT;
  flex-grow: 1;
  margin-left: 10px;
`;

const MenuEntry = styled.div<Props>`
  width: ${({ showBalance }) => (showBalance ? `${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE}px` : "100%")};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 42px;
  font: normal normal bold 20px/24px Swis721 BT;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background: transparent linear-gradient(180deg, #53a8f0 0%, #2d7fc4 100%) 0% 0% no-repeat padding-box;
  color: #ffffff;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: #ffffff;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;

MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
  showBalance: false,
};

export { MenuEntry, LinkLabel };
