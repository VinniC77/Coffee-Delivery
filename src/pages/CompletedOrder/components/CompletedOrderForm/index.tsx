import { TitleText } from "../../../../components/Typography";
import SectionTitle from "../SectionTitle";
import { CompletedOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import AddressForm from "./AddressForm";

export default function CompletedOrderForm() {
  const { colors } = useTheme();

  return (
    <CompletedOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />
        <AddressForm />
      </FormSectionContainer>
    </CompletedOrderFormContainer>
  );
}
