import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { InformationsCoffee } from "../../components/InformationsCoffee";
import { ContainerMenu, TitleMenu } from "./style";

import { coffee } from "../../utils/coffee";

export function Home() {
  return (
    <div>
      <Header />
      <InformationsCoffee />

      <TitleMenu>Nossos cafés</TitleMenu>
      <ContainerMenu>
        {coffee.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              category={item.category}
              value={item.value}
              image={item.image}
            />
          );
        })}
      </ContainerMenu>
    </div>
  );
}
