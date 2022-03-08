import React from "react";
import { PanelProps, PushedProps } from "./types";
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
declare const SideBar: React.FC<Props>;
export default SideBar;
