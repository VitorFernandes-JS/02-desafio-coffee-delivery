import {
  DivAdress,
  DivAdressAndShoppingCart,
  DivShoppingCart,
  HeaderContainer,
} from "./style";
import Logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />

      <DivAdressAndShoppingCart>
        <DivAdress>
          <MapPin size={22} weight="fill" />
          <a href="#">Porto Alegre, RS</a>
        </DivAdress>

        <DivShoppingCart>
          <ShoppingCart size={20} weight="fill" />
        </DivShoppingCart>
      </DivAdressAndShoppingCart>
    </HeaderContainer>
  );
}
