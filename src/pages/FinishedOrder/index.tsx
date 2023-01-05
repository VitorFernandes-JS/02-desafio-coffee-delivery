import { Header } from "../../components/Header";
import ManTakingCoffee from "../../assets/ConfirmOrderIllustration.png";
export function FinishedOrder() {
  return (
    <div>
      <Header />
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <img src={ManTakingCoffee}/>
    </div>
  );
}