import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import SideBarBody from "./SideBarBody";
import PanelFooter from "./PanelFooter";
import BalanceControl from "./BalanceControl";
import { useWalletModal } from "../WalletModal";
import ContractViewMenu from "./ContractViewMenu";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE } from "./config";
import { PanelProps, PushedProps } from "./types";
import { Flex } from "../../components/Flex";
import { Login } from "../WalletModal/types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  showBalance: boolean;
  totalCost: number;
  toggleBalance: () => void;
  showBalanceContol: boolean;
  showContractButton: boolean;
  showBuyButton: boolean;
  account?: string;
  login: Login;
  logout: () => void;
  onBuyCryptoWithSimplex: () => void;
  token: string;
  showHowButton: boolean;
  onAddToken: () => void;
}

const StyledSideBar = styled.div<{ isPushed: boolean; showMenu: boolean, showBalance: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "120px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed, showBalance }) => (isPushed ? (showBalance ? `${SIDEBAR_WIDTH_FULL}px` : `${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE}px`) : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed, showBalance }) => `${isPushed ? (showBalance ? `${SIDEBAR_WIDTH_FULL}px` : `${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE}px`) : SIDEBAR_WIDTH_REDUCED}px`};
    margin-left: 20px;
  }
`;

const StyledButton = styled(Button)`
  background: transparent;
  border-radius: 6px;
  font: normal normal bold 16px/6px Swis721 BT;
  color: white;
  height: 36px;
  color: #DF642B;
  border: 1px solid #DF642B;
  
  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: transparent;
  }
  padding: 10px 2px;
  width: 115px;
`;

const StyledConnectButton = styled(StyledButton)`
  width: ${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE - 20}px;
`;

const StyledFlex = styled(Flex)`
  margin: 10px;
  justify-content: space-between;
  width: ${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE - 20}px;
`

const AddButton = styled(Button)`
  background: transparent;
  font: normal normal bold 16px/16px Swis721 BT;
  height: 36px;
  padding: 10px;
  color: #DF642B;
  border: 1px solid #DF642B;
  border-radius: 6px;
  width: ${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE - 20}px;
  margin: auto 10px;
  margin-bottom:
  text-align: center;
`

const StyledHowButton = styled.a`
  background: transparent;
  font: normal normal bold 16px/16px Swis721 BT;
  height: 36px;
  padding: 10px;
  color: #DF642B;
  border: 1px solid #DF642B;
  border-radius: 6px;
  width: ${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE - 20}px;
  margin: auto 10px;
  text-align: center;
  margin-top: 10px;
`

const SideBar: React.FC<Props> = (props) => {
  const { isPushed, showMenu, showBalance, showBalanceContol, toggleBalance, totalCost, showContractButton, showBuyButton, account, login, logout, onBuyCryptoWithSimplex, token, isMobile, onAddToken, showHowButton } = props;
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  return (
    <StyledSideBar isPushed={isPushed} showMenu={showMenu} showBalance={showBalance} >
      { showContractButton && isMobile && <ContractViewMenu token={token} /> }
      <StyledFlex>
        { showBuyButton && isMobile &&
          <StyledButton
              size="sm"
              variant="tertiary"
              onClick={() => {
                onBuyCryptoWithSimplex();
              }}
          >
            Buy Crypto
          </StyledButton> 
        }
        { isMobile && account &&
          <StyledButton
            size="sm"
            variant="tertiary"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </StyledButton>
        }
        { isMobile && !account &&
          <StyledConnectButton
            size="sm"
            onClick={() => {
              onPresentConnectModal();
            }}
          >
            Connect Wallet
          </StyledConnectButton>
        }
      </StyledFlex>
      { isMobile && account && 
        <AddButton
          size="sm"
          variant="tertiary"
          onClick={() => {
            onAddToken();
          }}
        >
          Add 2LC to MetaMask
        </AddButton>
      }
      { isMobile && showHowButton && 
        <StyledHowButton
          href="https://metamask.2local.io"
          target="_blank"
        >
          How
        </StyledHowButton>
      }
      { showBalanceContol && <BalanceControl show={showBalance} totalCost={totalCost} toggleBalance={toggleBalance}/> }
      <SideBarBody {...props} />
    </StyledSideBar>
  );
};

export default SideBar;
