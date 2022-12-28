import { HeaderContainer } from "./style";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo}/>
    </HeaderContainer>
  );
}
