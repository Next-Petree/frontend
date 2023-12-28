import React from "react";

import { IPBProp } from "../../types";
import { Button } from "./Styles1";

const PrimaryButton: React.FC<IPBProp> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default PrimaryButton;
