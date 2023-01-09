import {
  DivAdress,
  DivAdressAndShoppingCart,
  ButtonShoppingCart,
  HeaderContainer,
  DivNumberItensInCart,
} from "./style";
import Logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CoffeeInformationsContext } from "../../contexts/CoffeeInformationsContext";
import { useContext } from "react";

export function Header() {
  const { quantityToCart } = useContext(CoffeeInformationsContext);

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

        <NavLink to="/cart" title="Carrinho de compras" style={{ textDecoration: "none"}}>
          <ButtonShoppingCart>
            <ShoppingCart size={20} weight="fill"/>
            {
              quantityToCart > 0 && (
                <DivNumberItensInCart>
                <span>{quantityToCart}</span>
              </DivNumberItensInCart>
              )
            }
          </ButtonShoppingCart>
        </NavLink>
      </DivAdressAndShoppingCart>
    </HeaderContainer>
  );
}
