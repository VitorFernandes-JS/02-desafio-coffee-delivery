import {
  DivAdress,
  DivAdressAndShoppingCart,
  ButtonShoppingCart,
  HeaderContainer,
} from "./style";
import Logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} />
      </NavLink>
      <DivAdressAndShoppingCart>
        <DivAdress>
          <MapPin size={22} weight="fill" />
          <a href="#">Porto Alegre, RS</a>
        </DivAdress>

        <NavLink to="/cart" title="Carrinho de compras">
          <ButtonShoppingCart>
            <ShoppingCart size={20} weight="fill" />
          </ButtonShoppingCart>
        </NavLink>
      </DivAdressAndShoppingCart>
    </HeaderContainer>
  );
}
