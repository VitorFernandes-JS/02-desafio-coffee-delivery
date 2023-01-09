import { Header } from "../../components/Header";
import ManTakingCoffee from "../../assets/ConfirmOrderIllustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  ContainerFinishedOrder,
  DivTexts,
  Subtitle,
  DivMapAndText,
  DivTimerAndText,
  DivDollarAndText,
  DivMap,
  DivTimer,
  DivDollar,
  Border,
  DivImg
} from "./style";
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

          <Border>
            <DivMapAndText>
              <DivMap>
                <MapPin weight="fill" size={16} />
              </DivMap>
              <div>
                <span>
                  Entrega em Rua João Daniel Martinelli, 102
                  <br />
                  Farrapos - Porto Alegre, RS
                </span>
              </div>
            </DivMapAndText>

            <DivTimerAndText>
              <DivTimer>
                <Timer weight="fill" size={16} />
              </DivTimer>
              <div>
                <span>Previsão de entrega </span>
                <br />
                <strong>20 min - 30 min</strong>
              </div>
            </DivTimerAndText>

            <DivDollarAndText>
              <DivDollar>
                <CurrencyDollar weight="regular" size={16} />
              </DivDollar>
              <div>
                <span>Pagamento na entrega</span>
                <br />
                <strong> Cartão de Crédito</strong>
              </div>
            </DivDollarAndText>
          </Border>
        </DivTexts>

        <DivImg>
          <img src={ManTakingCoffee} />
        </DivImg>
      </ContainerFinishedOrder>
    </>
  );
}
