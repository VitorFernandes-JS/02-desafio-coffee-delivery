import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  ButtonPaymentMethodCredit,
  ButtonPaymentMethodDebit,
  ButtonPaymentMethodMoney,
  DivButtonsPaymentMethodCredit,
  DivDollarAndText,
  DivPaymentMethods,
} from "./style";

export function CardPaymentMethods() {
  return (
    <DivPaymentMethods>
      <DivDollarAndText>
        <div>
          <CurrencyDollar size={23} color="#8047F8" />
        </div>
        <div>
          <h4>Pagamento</h4>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </DivDollarAndText>

      <DivButtonsPaymentMethodCredit>
        <ButtonPaymentMethodCredit type="button">
          <CreditCard size={18} color="#8047F8" />
          <span>CARTÃO DE CRÉDITO</span>
        </ButtonPaymentMethodCredit>
        <ButtonPaymentMethodDebit type="button">
          <Bank size={18} color="#8047F8" />
          <span>CARTÃO DE DÉBITO</span>
        </ButtonPaymentMethodDebit>
        <ButtonPaymentMethodMoney type="button">
          <Money size={18} color="#8047F8" />
          <span>DINHEIRO</span>
        </ButtonPaymentMethodMoney>
      </DivButtonsPaymentMethodCredit>
    </DivPaymentMethods>
  );
}
