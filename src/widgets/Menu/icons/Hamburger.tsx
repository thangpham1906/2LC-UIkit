import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 55 55" {...props}>
      <image width="55" height="55" href="/images/2local/MenuToggle.svg" />
    </Svg>
  );
};

export default Icon;
