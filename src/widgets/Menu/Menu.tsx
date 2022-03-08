import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import CopyToClipboard from "../WalletModal/CopyToClipboard";
import { Link, LinkExternal } from "../../components/Link";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import UserBlock from "./UserBlock";
import ContractViewMenu from "./ContractViewMenu";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE } from "./config";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean, showBalance: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed, showBalance }) => `${isPushed ? (showBalance ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE) + 20 : SIDEBAR_WIDTH_REDUCED + 20}px`};
  }
  width: 100%;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  onBuyCryptoWithSimplex,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
  showBalancePanel = false,
  showBalanceContol = false,
  totalCost = 0,
  showBuyButton = false,
  showContractButton = false,
  showHowButton = false,
  onAddToken,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const [showBalance, setShowBalance] = useState(showBalancePanel);
  const refPrevOffset = useRef(window.pageYOffset);

  const toggleBalance = () => {
    setShowBalance(!showBalance)
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const tokenAddress = '0x11f6ecc9e2658627e0876212f1078b9f84d3196e';

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "https://2local.io/"}
        />
        { showContractButton && !isMobile && <ContractViewMenu token={tokenAddress} /> }
        <Flex>
          <UserBlock account={account} login={login} logout={logout} onBuyCryptoWithSimplex={onBuyCryptoWithSimplex} showBuyButton={showBuyButton} isMobile={isMobile} showHowButton={showHowButton} onAddToken={onAddToken} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <SideBar
          login={login}
          logout={logout}
          account={account}
          onBuyCryptoWithSimplex={onBuyCryptoWithSimplex}
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink}
          showBalance={showBalance}
          totalCost={totalCost}
          toggleBalance={toggleBalance}
          showBalanceContol={showBalanceContol}
          showContractButton={showContractButton}
          showBuyButton={showBuyButton}
          token={tokenAddress}
          showHowButton={showHowButton}
          onAddToken={onAddToken}
        />
        <Inner isPushed={isPushed} showMenu={showMenu} showBalance={showBalance} >
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
