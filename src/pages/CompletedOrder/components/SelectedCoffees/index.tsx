import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import CoffeeCartCard from "../CoffeeCartCard";
import ConfirmationSection from "./ConfrimationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./style";

export default function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
