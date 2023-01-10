import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import {
  CoffeeInformationsContext,
  useCoffeInformationsContext,
} from "../../../../contexts/CoffeeInformationsContext";
import {
  BodyAddress,
  DivMapAndText,
  FormContainer,
  InputCEP,
  InputCity,
  InputComplement,
  InputDistrict,
  InputNumber,
  InputState,
  InputStreet,
} from "./style";

export function AddressForm() {
  const { quantityToCart } = useCoffeInformationsContext();
  // const { register } = useFormContext();

  return (
    <FormContainer>
      <h2>Complete seu pedido</h2>

      <BodyAddress>
        <DivMapAndText>
          <div>
            <MapPinLine size={23} style={{ marginTop: -2 }} color="#C47F17" />
          </div>
          <div>
            <h4>Endereço de Entrega </h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </DivMapAndText>

        <div>
          <InputCEP
            title="CEP"
            placeholder="CEP"
            required
            type="number"
            disabled={quantityToCart.length === 0}
            maxLength={8}
          />
          <InputStreet
            title="Rua"
            placeholder="Rua"
            required
            disabled={quantityToCart.length === 0}
          />
        </div>
        <div>
          <InputNumber
            title="Número"
            placeholder="Número"
            required
            disabled={quantityToCart.length === 0}
          />
          <InputComplement
            title="Complemento"
            placeholder="Complemento"
            disabled={quantityToCart.length === 0}
          />
        </div>
        <div>
          <InputDistrict
            title="Bairro"
            placeholder="Bairro"
            required
            disabled={quantityToCart.length === 0}
          />
          <InputCity
            title="Cidade"
            placeholder="Cidade"
            required
            disabled={quantityToCart.length === 0}
          />
          <InputState
            title="UF"
            placeholder="UF"
            required
            disabled={quantityToCart.length === 0}
          />
        </div>
      </BodyAddress>
    </FormContainer>
  );
}
