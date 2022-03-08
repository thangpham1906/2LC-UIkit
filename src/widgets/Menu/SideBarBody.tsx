import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import SideBarMainAndSubMenu from "./SideBarMainAndSubMenu";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { MenuEntrySub, LinkLabelSub } from "./MenuEntrySub";
import { MenuEntrySubSub, LinkLabelSubSub } from "./MenuEntrySubSub";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";
import SideBarSubAndSubMenu from "./SideBarSubAndSubMenu";
import BalanceContent from "./BalanceContent";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  showBalance: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const SideBarBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, showBalance }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="20px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <SideBarMainAndSubMenu
              key={entry.label}
              isPushed={isPushed}
              showBalance={showBalance}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => {
                  const IconSub = Icons[item.icon];
                  const iconElementSub = <IconSub width="20px" mr="8px" />;
                  let coinString = ""
                  if (item.coin) {
                    coinString = (item.coin).concat('Icon')
                  }
                  const CoinSub = Icons[coinString]
                  const coinElementSub = <CoinSub width="20px" ml="8px" />;
                  const itemCalloutClass = item.calloutClass ? item.calloutClass : undefined;
                  if (item.items) {
                    return (
                      <SideBarSubAndSubMenu
                        key={item.label}
                        isPushed={isPushed}
                        showBalance={showBalance}
                        balance={item.balance}
                        cost={item.cost}
                        pushNav={pushNav}
                        icon={iconElementSub}
                        label={item.label}
                        initialOpenState={item.initialOpenState}
                        className={itemCalloutClass}
                        coin={item.coin ? coinElementSub : ''}
                      >
                        {item.items.map((subItem) => {
                          const IconSubSub = Icons[subItem.icon];
                          const iconElementSubSub = <IconSubSub width="20px" mr="8px" />;
                          let coinStringSub = ""
                          if (subItem.coin) {
                            coinStringSub = (subItem.coin).concat('Icon')
                          }
                          const CoinSubSub = Icons[coinStringSub];
                          const coinElementSubSub = <CoinSubSub width="20px" ml="8px" />;
                          const itemSubCalloutClass = item.calloutClass ? item.calloutClass : undefined;
                          return (
                            <MenuEntrySubSub
                              key={subItem.href}
                              showBalance={showBalance}
                              secondary
                              isActive={subItem.href === location.pathname}
                              onClick={handleClick}
                              disabled={subItem.disabled}
                            >
                              <MenuLink href={subItem.href}>
                                {iconElementSubSub}
                                <LinkLabelSub isPushed={isPushed}>{subItem.label}{subItem.coin ? coinElementSubSub : ''}</LinkLabelSub>
                                {showBalance && <BalanceContent balance={subItem.balance} cost={subItem.cost}/>}
                              </MenuLink>
                            </MenuEntrySubSub>
                          );
                        })}
                      </SideBarSubAndSubMenu>
                    );
                  }
                  return (
                    <MenuEntrySub
                      key={item.href}
                      showBalance={showBalance}
                      secondary
                      isActive={item.href === location.pathname}
                      onClick={handleClick}
                      disabled={item.disabled}
                    >
                      <MenuLink href={item.href}>
                        {iconElementSub}
                        <LinkLabelSub isPushed={isPushed}> {item.label}</LinkLabelSub>
                      </MenuLink>
                    </MenuEntrySub>
                  );
                })}
            </SideBarMainAndSubMenu>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default SideBarBody;
