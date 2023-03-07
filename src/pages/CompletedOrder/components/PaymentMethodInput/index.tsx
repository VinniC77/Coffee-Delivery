import { PaymentMethodContainer } from "./style";
import { CreditCard } from "phosphor-react";

export default function PaymentMethodInput() {
    return (
        <PaymentMethodContainer>
            <CreditCard size={16} />
            Cartão de Crédito
        </PaymentMethodContainer>
    )
}