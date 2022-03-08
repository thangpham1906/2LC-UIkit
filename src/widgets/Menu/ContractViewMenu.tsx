import React, { useState } from "react";
import styled from "styled-components";
import CopyToClipboard from "../WalletModal/CopyToClipboard";
import { Link, LinkExternal } from "../../components/Link";
import { Flex } from "../../components/Flex";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE } from "./config";

const ContractLinkArea = styled(Flex)`
  height: 46px;
  padding: 10px;
  background: #DF642B33 0% 0% no-repeat padding-box;
  border-radius: 12px;
  max-width: ${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE - 20}px;
  margin: auto 10px;
`

const LinkString =  styled.div`
  font: normal normal bold 16px/6px Swis721 BT;
  margin: auto;
  color: #DF642B;
  margin-left: 0px;
`

interface Props {
  token : string;
}

const ContractViewMenu: React.FC<Props> = ({token}) => {
  return (
    <ContractLinkArea>
      <LinkString>
        2LC Contract
      </LinkString>
      <CopyToClipboard toCopy={token} fill="#000000">
        <LinkExternal small href={`https://bscscan.com/address/${token}`} fill="#000000" />
      </CopyToClipboard>
    </ContractLinkArea>
  );
};

export default ContractViewMenu;
