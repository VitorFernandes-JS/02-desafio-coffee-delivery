import { MapPinLine, Minus, Plus, Trash } from "phosphor-react";
import { Header } from "../../components/Header";
import {
  BodyAddress,
  CartContainer,
  DivMapAndText,
  InputCEP,
  InputCity,
  InputComplement,
  InputDistrict,
  InputNumber,
  InputState,
  InputStreet,
} from "./style";

import Cafe from "../../assets/Americano.png";
import { CardPaymentMethods } from "../../components/CardPaymentMethods";

export function Cart() {
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <CartContainer>
        <form id="form-cart">
          <h2>Complete seu pedido</h2>

          <BodyAddress>
            <DivMapAndText>
              <div>
                <MapPinLine
                  size={23}
                  style={{ marginTop: -2 }}
                  color="#C47F17"
                />
              </div>
              <div>
                <h4>Endereço de Entrega </h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </DivMapAndText>

            <div>
              <InputCEP title="CEP" placeholder="CEP" required />
              <InputStreet title="Rua" placeholder="Rua" required />
            </div>
            <div>
              <InputNumber title="Número" placeholder="Número" required />
              <InputComplement title="Complemento" placeholder="Complemento" />
            </div>
            <div>
              <InputDistrict title="Bairro" placeholder="Bairro" required />
              <InputCity title="Cidade" placeholder="Cidade" required />
              <InputState title="UF" placeholder="UF" required />
            </div>
          </BodyAddress>

          <CardPaymentMethods />

          <h2>Cafés selecionados</h2>
          <div>
            <div>
              <img src={Cafe} />
            </div>
            <div>
              <h3>Nome do café</h3>
              <div>
                <button>
                  <Minus size={24} />
                  <span>1</span>
                  <Plus size={24} />
                </button>
                <button>
                  <Trash size={24} />
                  Remover
                </button>
                <span>
                  <strong>R$ 10,00</strong>
                </span>

                <span>Total de itens:</span>
                <span>R$ 29,70</span>

                <span>Frete:</span>
                <span>R$ 5,00</span>

                <strong>Total:</strong>
                <strong>R$ 34,70</strong>

                <button type="submit" onClick={() => handleSubmit}>
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </div>
          </div>
        </form>
      </CartContainer>
    </div>
  );
}
