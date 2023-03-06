import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: InputProps) {
  return <InputStyleContainer {...props} />;
}
