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
  const { coffees, addToCart } = useContext(CoffeeInformationsContext);

  const numberOfCoffeesSelectedForTheCart = coffees.filter((item) => item.quantity)

  function teste() {
    console.log("teste")
  }

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} />
      </NavLink>
      <DivAdressAndShoppingCart>
        <NavLink to="/cart" title="Endereço"
          style={{ textDecoration: "none" }}>
        <DivAdress>
          <MapPin size={22} weight="fill" />
          <a href="#">Porto Alegre, RS</a>
        </DivAdress>
        </NavLink>

        <NavLink
          to="/cart"
          title="Carrinho de compras"
          style={{ textDecoration: "none" }}
        >
          <ButtonShoppingCart>
            <ShoppingCart size={20} weight="fill" />
            {(numberOfCoffeesSelectedForTheCart.length > 0 && addToCart === true)  && (
              <DivNumberItensInCart>
                <span>
                  {
                    numberOfCoffeesSelectedForTheCart.reduce((acc, coffee) => {
                      return acc + coffee.quantity;
                    }, 0)
                  }
                </span>
              </DivNumberItensInCart>
            )}
          </ButtonShoppingCart>
        </NavLink>
      </DivAdressAndShoppingCart>
    </HeaderContainer>
  );
}
