import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import { Header } from "../../components/Header";
import { BodyAddress, CartContainer, DivMapAndText } from "./style";

import Cafe from "../../assets/Americano.png";

export function Cart() {
  return (
    <>
      <Header />
      <CartContainer>
        <h2>Complete seu pedido</h2>

        <BodyAddress>
          <DivMapAndText>
            <div>
              <MapPinLine size={24} style={{ marginTop: -2 }} color="#C47F17" />
            </div>
            <div>
              <h4>Endereço de Entrega </h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </DivMapAndText>

          <div>
            <input title="CEP" placeholder="CEP" />
            <input title="Rua" placeholder="Rua" />
          </div>
          <div>
            <input title="Número" placeholder="Número" />
            <input title="Complemento" placeholder="Complemento" />
          </div>
          <div>
            <input title="Bairro" placeholder="Bairro" />
            <input title="Cidade" placeholder="Cidade" />
            <input title="UF" placeholder="UF" />
          </div>
        </BodyAddress>

        <div>
          <div>
            <CurrencyDollar size={24} />
            Pagamento <br /> O pagamento é feito na entrega. Escolha a forma que
            deseja pagar
          </div>

          <div>
            <button>
              <CreditCard size={24} />
              Cartão de Crédito
            </button>
            <button>
              <Bank size={24} />
              Cartão de Débito
            </button>
            <button>
              <Money size={24} />
              Dinheiro
            </button>
          </div>
        </div>

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

              <button>CONFIRMAR PEDIDO</button>
            </div>
          </div>
        </div>
      </CartContainer>
    </>
  );
}
