import {
  ButtonAddOrRemove,
  ButtonToCart,
  Category,
  Description,
  DivCard,
  Image,
  Title,
  Value,
} from "./style";
import ImgCoffee from "../../assets/Americano.png";

export function Card() {
  return (
    <DivCard>
      <Image src={ImgCoffee}/>
      <Category />
      <Title />
      <Description />
      <Value />
      <ButtonAddOrRemove />
      <ButtonToCart />
    </DivCard>
  );
}
