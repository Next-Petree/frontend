import { IWBProps } from "../../types";
import { Wrapper } from "./styles";

const WhiteBox = (props: IWBProps) => {
  return (
    <Wrapper
      customwidth={props.width}
      customheight={props.height}
      customtop={props.top}
      customLeft={props.left}
    >
      {props.children}
    </Wrapper>
  );
};

export default WhiteBox;
