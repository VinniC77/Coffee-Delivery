import QuantityInput from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";

import { ShoppingCart } from "phosphor-react";

export default function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1678665600&Signature=k8VKVHILYiqREu5q~iln7daqRJJPd-Xv8~Bm~IwbRxO0RoALjNudlhvYoHcpEV8bToHcuQQ5TgleURrlvEjMdGuadmx~STRTpl65dfO21LxfAR9UYt7DXdEswQpp~1-cKuo2RbKdBmy9dCGuvoP3tkjVIcdOGQTeZHhjZoMh2uKKwri2C6PjNJT-coQnRvaw9C6EUU0xFxRZ0qc4yUHe5sEglW7nkONh4iAcGTF9Aon4xkPehZRjiSS3FA6dmloLCWeIBFa2n92pKWSpI2FvGMBpsctApXO0X8cu0muV-UoiW8CDYzQ2dVsR6m79PtGlrwKCcOePbJSTXZmmlJZf2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="Xícara com café"
      />

      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
