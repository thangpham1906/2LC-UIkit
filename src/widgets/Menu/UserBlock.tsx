import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

const StyledButton = styled(Button)`
  background: transparent;
  border-radius: 12px;
  font: normal normal bold 16px/6px Swis721 BT;
  color: white;
  height: 46px;
  margin-right: 20px;
  color: #DF642B;
  border: 1px solid #DF642B;
  
  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: transparent;
  }
`;

const StyledLink = styled.a`
  background: transparent;
  border-radius: 12px;
  font: normal normal bold 16px/6px Swis721 BT;
  color: white;
  height: 46px;
  margin-right: 20px;
  padding: 14px;
  color: #DF642B;
  border: 1px solid #DF642B;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    background-color: transparent;
  }
`;

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  onBuyCryptoWithSimplex: () => void;
  showBuyButton: boolean;
  isMobile: boolean;
  showHowButton: boolean;
  onAddToken: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, onBuyCryptoWithSimplex, showBuyButton, isMobile, showHowButton, onAddToken }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      { !isMobile && account && 
        <StyledButton
          size="sm"
          variant="tertiary"
          onClick={() => {
            onAddToken();
          }}
        >
          Add 2LC to MetaMask
        </StyledButton>
      }
      { !isMobile && showHowButton && 
        <StyledLink
          href="https://metamask.2local.io"
          target="_blank"
        >
          How
        </StyledLink>
      }
      { !isMobile && showBuyButton &&
      <StyledButton
          size="sm"
          variant="tertiary"
          onClick={() => {
            onBuyCryptoWithSimplex();
          }}
      >
        Buy Crypto
      </StyledButton> }
      { !isMobile && account &&
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
      { !isMobile && !account &&
        <StyledButton
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </StyledButton>
      }
      <StyledLink
        href="https://sec.2local.io/login"
        target="_blank"
      >
        Account
      </StyledLink>
    </div>
  );
};

export default UserBlock;
