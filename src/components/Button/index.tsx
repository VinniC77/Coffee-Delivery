import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function Button({ text, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>;
}
