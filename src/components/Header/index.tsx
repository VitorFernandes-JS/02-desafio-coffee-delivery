import {
  DivAdress,
  DivAdressAndShoppingCart,
  ButtonShoppingCart,
  HeaderContainer,
  DivNumberItensInCart,
  ButtonMoon,
  DivCityAndUF,
} from "./style";
import LogoDefault from "../../assets/logo.png";
import LogoDark from "../../assets/logo-dark.png";
import { MapPin, Moon, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCoffeInformationsContext } from "../../contexts/CoffeeInformationsContext";
import { useAddressInformationsContext } from "../../contexts/AddressInformationsContext";

export function Header() {
  const { coffees, addToCart, setTheme, theme } = useCoffeInformationsContext();
  const { data } = useAddressInformationsContext();

  const numberOfCoffeesSelectedForTheCart = coffees.filter(
    (item) => item.quantity
  );

  function handleTheme() {
    if (theme === false) {
      return setTheme(true);
    }
    return setTheme(false);
  }

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={theme === true ? LogoDark : LogoDefault} />
      </NavLink>
      <DivAdressAndShoppingCart>
        <NavLink to="/cart" title="Endereço" style={{ textDecoration: "none" }}>
          <DivAdress>
            <MapPin size={22} weight="fill" />
            {data.city === "" ? (
              <span>Sem endereço</span>
            ) : (
              <DivCityAndUF>
                <span>{data.city},</span>
                <span> {data.uf}</span>
              </DivCityAndUF>
            )}
          </DivAdress>
        </NavLink>

        <NavLink
          to="/cart"
          title="Carrinho de compras"
          style={{ textDecoration: "none" }}
        >
          <ButtonShoppingCart>
            <ShoppingCart size={20} weight="fill" />
            {numberOfCoffeesSelectedForTheCart.length > 0 &&
              addToCart === true && (
                <DivNumberItensInCart>
                  <span>
                    {numberOfCoffeesSelectedForTheCart.reduce((acc, coffee) => {
                      return acc + coffee.quantity;
                    }, 0)}
                  </span>
                </DivNumberItensInCart>
              )}
          </ButtonShoppingCart>
        </NavLink>
        <div>
          <ButtonMoon title="Tema" onClick={handleTheme}>
            <Moon size={20} weight="fill" />
          </ButtonMoon>
        </div>
      </DivAdressAndShoppingCart>
    </HeaderContainer>
  );
}
