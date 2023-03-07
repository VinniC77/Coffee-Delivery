import CompletedOrderForm from "./components/CompletedOrderForm";
import SelectedCoffees from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompletedOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompletedOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  );
}
