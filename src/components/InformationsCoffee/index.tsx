import {
  DivCoffee,
  DivPackage,
  DivShoppingCart,
  DivTimer,
  GroupShoppingCartAndPackage,
  GroupTimerAndCoffee,
  InformationsContainer,
  InformationsItens,
  Subtitle,
  DivTeste,
} from "./style";
import CoffeeMarketing from "../../assets/CoffeeMarketing.png";

import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

export function InformationsCoffee() {
  return (
    <InformationsContainer>
      <div>
        <h1>
          Encontre o café perfeito
          <br /> para qualquer hora do dia.
        </h1>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a
          <br /> qualquer hora!
        </Subtitle>
      </div>

      <InformationsItens>
        <DivTeste>
          <GroupShoppingCartAndPackage>
            <div>
              <DivShoppingCart>
                <ShoppingCart size={16} weight="fill" />
              </DivShoppingCart>
              <span>Compra simples e segura</span>
            </div>

            <div>
              <DivPackage>
                <Package weight="fill" />
              </DivPackage>
              <span>Embalagem mantém o café intacto</span>
            </div>
          </GroupShoppingCartAndPackage>

          <GroupTimerAndCoffee>
            <div>
              <DivTimer>
                <Timer weight="fill" />
              </DivTimer>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <DivCoffee>
                <Coffee weight="fill" />
              </DivCoffee>
              <span>O café chegará fresquinho até você </span>
            </div>
          </GroupTimerAndCoffee>
          <img src={CoffeeMarketing} />
        </DivTeste>
      </InformationsItens>
    </InformationsContainer>
  );
}
