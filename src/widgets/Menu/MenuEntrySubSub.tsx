import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT, SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  disabled?: boolean;
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

const LinkLabelSubSub = styled.div<{ isPushed: boolean }>`
  color: #4c566c;
  transition: color 0.4s;
  font: normal normal normal 12px/37px Swis721 BT;
  flex-grow: 1;
`;

const MenuEntrySubSub = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 42px;
  padding-left: 40px;
  font: normal normal normal 12px/37px Swis721 BT;
  color: #4c566c;

  background-color: ${({ isActive }) => (isActive ? "#f0f2f8" : "transparent")};
  outline: none;
  box-sizing: border-box;
  border-left: ${({ isActive }) => (isActive ? "5px solid #53a8f0" : "none")};
  padding-left: -5px;

  pointer-events: ${({ disabled }) => (disabled ? "none" : "unset")};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

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

MenuEntrySubSub.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntrySubSub, LinkLabelSubSub };
