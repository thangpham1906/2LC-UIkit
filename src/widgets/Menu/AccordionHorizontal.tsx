import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntryHorizontal, LinkLabel } from "./MenuEntryHorizontal";
import { PushedProps } from "./types";

interface Props extends PushedProps {
  label: string;
  initialOpenState?: boolean;
  className?: string;
  href?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px;
`;

const AccordionHorizontal: React.FC<Props> = ({
  label,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  href,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(initialOpenState);

  let link = "";
  if (href) {
    link = href;
  }

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MenuEntryHorizontal onClick={handleClick} isActive={location.pathname.includes(link)} className={className}>
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
      </MenuEntryHorizontal>
      <AccordionContent isOpen={isOpen} isPushed={false} maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}>
        {children}
      </AccordionContent>
    </Container>
  );
};

export default AccordionHorizontal;
