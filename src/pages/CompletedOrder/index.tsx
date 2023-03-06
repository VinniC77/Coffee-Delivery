import CompletedOrderForm from "./components/CompletedOrderForm";
import { CompleteOrderContainer } from "./styles";

export function CompletedOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompletedOrderForm />
    </CompleteOrderContainer>
  );
}
