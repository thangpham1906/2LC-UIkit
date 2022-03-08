import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { MenuEntrySub, LinkLabelSub } from "./MenuEntrySub";
import BalanceContent from "./BalanceContent";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  showBalance?: boolean;
  balance?: number;
  cost?: number;
  coin?: React.ReactElement | string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  // Safari fix
  flex-shrink: 0;
`;

const StyledArrowDropUpIcon = styled(ArrowDropUpIcon)`
  color: #000000;
  fill: #000000;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
`;

const SideBarSubAndSubMenu: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = true,
  children,
  className,
  showBalance = false,
  balance,
  cost,
  coin = undefined,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

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
      <MainContainer>
        <MenuEntrySub onClick={handleClick} className={className} showBalance={showBalance}>
          {icon}
          <LinkLabelSub isPushed={isPushed}>
            {label}
            {coin}
          </LinkLabelSub>

          {isOpen ? <ArrowDropUpIcon width="30px" /> : <ArrowDropDownIcon width="30px" />}      
        </MenuEntrySub>
        {showBalance && <BalanceContent balance={balance} cost={cost} />}
      </MainContainer>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default SideBarSubAndSubMenu;
