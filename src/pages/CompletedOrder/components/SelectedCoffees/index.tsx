import { TitleText } from "../../../../components/Typography";
import CoffeeCartCard from "../CoffeeCartCard";
import ConfirmationSection from "./ConfrimationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export default function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
