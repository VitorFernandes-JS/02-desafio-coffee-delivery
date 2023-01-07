import { Header } from "../../components/Header";
import ManTakingCoffee from "../../assets/ConfirmOrderIllustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ContainerFinishedOrder, DivTexts, Subtitle, DivMapAndText } from "./style";
export function FinishedOrder() {
  return (
    <>
      <Header />
      <ContainerFinishedOrder>
        <DivTexts>
          <h1>Uhu! Pedido confirmado</h1>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>

          <div>
            <DivMapAndText>
              <div>
                <MapPin weight="fill" size={16} />
              </div>
              <span>Entrega em</span>
              <strong> Rua João Daniel Martinelli, 102</strong>
              <span> Farrapos - Porto Alegre, RS</span>
            </DivMapAndText>

            <div>
              <Timer weight="fill" size={16} />
            </div>
            <span>Previsão de entrega</span>
            <strong> 20 min - 30 min</strong>

            <div>
              <CurrencyDollar weight="regular" size={16} />
            </div>
            <span>Pagamento na entrega</span>
            <strong> Cartão de Crédito</strong>
          </div>
        </DivTexts>

        <div>
          <img src={ManTakingCoffee} />
        </div>
      </ContainerFinishedOrder>
    </>
  );
}
