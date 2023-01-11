import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { useCoffeInformationsContext } from "../../../../contexts/CoffeeInformationsContext";
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
  const { register } = useFormContext();

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
            id="cep"
            placeholder="CEP"
            type="number"
            required
            // disabled={quantityToCart.length === 0}
            {...register("cep", { valueAsNumber: true, min: 1 })}
          />
          <InputStreet
            title="Rua"
            id="street"
            placeholder="Rua"
            required
            // disabled={quantityToCart.length === 0}
            {...register("street")}
          />
        </div>
        <div>
          <InputNumber
            type="number"
            title="Número"
            id="number"
            placeholder="Número"
            required
            // disabled={quantityToCart.length === 0}
            {...register("number", { valueAsNumber: true, min: 1 })}
          />
          <InputComplement
            title="Complemento"
            id="complement"
            placeholder="Complemento"
            // disabled={quantityToCart.length === 0}
            {...register("complement")}
          />
        </div>
        <div>
          <InputDistrict
            title="Bairro"
            id="district"
            placeholder="Bairro"
            required
            // disabled={quantityToCart.length === 0}
            {...register("district")}
          />
          <InputCity
            title="Cidade"
            id="city"
            placeholder="Cidade"
            required
            // disabled={quantityToCart.length === 0}
            {...register("city")}
          />
          <InputState
            title="UF"
            id="uf"
            placeholder="UF"
            required
            // disabled={quantityToCart.length === 0}
            {...register("uf")}
          />
        </div>
      </BodyAddress>
    </FormContainer>
  );
}
