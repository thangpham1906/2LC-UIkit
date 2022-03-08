import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { MenuEntrySub, LinkLabelSub } from "./MenuEntrySub";
import { PushedProps } from "./types";
import { HideIcon, ShowIcon, ExpandIcon } from "./icons";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props {
  show: boolean;
  totalCost?: number;
  toggleBalance: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const BalanceArea = styled.div`
  width: 220px;
  margin: 5px 20px;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font: normal normal bold 20px/24px Swis721 BT;
  color: #4C566C;
  font-size: 15px;
  opacity: 0.5;
  margin-right: 10px;
`;

const Cost = styled.div`
  margin-right: 10px;
  font: normal normal bold 20px/24px Swis721 BT;
  color: #4C566C;
  font-size: 15px;
  opacity: 1;
`;

const HideArea = styled.div`
  width: 170px;
  text-align: center;
  vertical-align: middle;
  font-weight: 500;
  opacity: 0.5;
  margin-top: 10px;
  cursor: pointer;
`;

const ExpandArea = styled.div`
  margin: auto;
  padding-right: 10px;  
`;

const BalanceControl: React.FC<Props> = ({ show, totalCost = 0, toggleBalance }) => {

  const [showTotalCost, setShowTotalCost] = useState(false)

  const toggleTotalCost = () => {
    setShowTotalCost(!showTotalCost)
  };

  return (
    <Container>
      <BalanceArea>
        <Title>Total Balance</Title>
        { showTotalCost && <Cost>${totalCost.toFixed(2)}</Cost> }
        { showTotalCost ? <HideIcon onClick={toggleTotalCost} /> : <ShowIcon onClick={toggleTotalCost} />}
      </BalanceArea>
      <ExpandArea>
        { !show && <ExpandIcon onClick={toggleBalance} /> }
      </ExpandArea>
      { show && <HideArea onClick={toggleBalance} >X</HideArea> }
    </Container>
  );
};

export default BalanceControl;
