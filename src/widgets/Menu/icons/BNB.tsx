import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <image width="20" height="20" href="/images/2local/BNB.svg" />
    </Svg>
  );
};

export default Icon;
