import PaymentMethodInput from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export default function PaymentMethodOptions() {
    return (
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput />
            <PaymentMethodInput />
            <PaymentMethodInput />
        </PaymentMethodOptionsContainer>
    )
}