import React from "react";
import { Login } from "../WalletModal/types";
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
declare const UserBlock: React.FC<Props>;
export default UserBlock;
