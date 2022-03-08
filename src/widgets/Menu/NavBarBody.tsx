import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import AccordionHorizontal from "./AccordionHorizontal";
import { MenuEntryHorizontal, LinkLabel } from "./MenuEntryHorizontal";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const NavBarBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => false : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        const href = entry.href ? entry.href : "";
        const contain = location.pathname.includes(href);
        return (
          <MenuEntryHorizontal key={entry.label} isActive={contain} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntryHorizontal>
        );
      })}
    </Container>
  );
};

export default NavBarBody;
