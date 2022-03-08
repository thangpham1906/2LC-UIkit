import React from "react";
interface Props {
    show: boolean;
    totalCost?: number;
    toggleBalance: () => void;
}
declare const BalanceControl: React.FC<Props>;
export default BalanceControl;
