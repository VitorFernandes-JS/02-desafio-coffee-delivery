import { CardCoffeeVertical } from "../../components/CardCoffeeVertical";
import { Header } from "../../components/Header";
import { InformationsCoffee } from "../../components/InformationsCoffee";
import { useCoffeInformationsContext } from "../../contexts/CoffeeInformationsContext";
import { ContainerMenu, TitleMenu } from "./style";

export function Home() {
  const { coffees } = useCoffeInformationsContext();
  return (
    <div>
      <Header />
      <InformationsCoffee />

      <TitleMenu>Nossos cafés</TitleMenu>
      <ContainerMenu>
        {coffees.map((item) => {
          return (
            <CardCoffeeVertical
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              secondeCategory={item.secondeCategory}
              thirdCategory={item.thirdCategory}
              category={item.category}
              quantity={item.quantity}
              value={item.value}
              image={item.image}
            />
          );
        })}
      </ContainerMenu>
    </div>
  );
}
