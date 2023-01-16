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
  DivBody,
  DivImg,
  DivAdress,
} from "./style";
import { useCoffeInformationsContext } from "../../contexts/CoffeeInformationsContext";
import { useAddressInformationsContext } from "../../contexts/AddressInformationsContext";
export function FinishedOrder() {
  const { clickInButton } = useCoffeInformationsContext();
  const { data } = useAddressInformationsContext();
  console.log("data: ", data);

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
            <DivBody>
              <DivMapAndText>
                <DivMap>
                  <MapPin weight="fill" size={16} />
                </DivMap>
                <DivAdress>
                  <span>
                    Entrega em {data.street}, {data.number}
                    <br />
                    {data.district} - {data.city},
                  </span>
                  <span> {data.uf}</span>
                </DivAdress>
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
                  {clickInButton === 0 ? (
                    <strong>Cartão de crédito</strong>
                  ) : clickInButton === 1 ? (
                    <strong>Cartão de débito</strong>
                  ) : (
                    <strong>Dinheiro</strong>
                  )}
                </div>
              </DivDollarAndText>
            </DivBody>
          </Border>
        </DivTexts>

        <DivImg>
          <img src={ManTakingCoffee} />
        </DivImg>
      </ContainerFinishedOrder>
    </>
  );
}
