import CompletedOrderForm from "./components/CompletedOrderForm";
import SelectedCoffees from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string()
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompletedOrderPage() {

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
    <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
      <CompletedOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
    </FormProvider>
  );
}
