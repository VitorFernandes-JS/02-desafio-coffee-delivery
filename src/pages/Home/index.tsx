import { CardCoffeeVertical } from "../../components/CardCoffeeVertical";
import { Header } from "../../components/Header";
import { InformationsCoffee } from "../../components/InformationsCoffee";
import { ContainerMenu, TitleMenu } from "./style";

import { coffee } from "../../utils/Coffee";

export function Home() {
  return (
    <div>
      <Header />
      <InformationsCoffee />

      <TitleMenu>Nossos cafés</TitleMenu>
      <ContainerMenu>
        {coffee.map((item) => {
          return (
            <CardCoffeeVertical
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
