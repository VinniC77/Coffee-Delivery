import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

export default function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus weight="fill" size={14} />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus weight="fill" size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
