import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { InformationsCoffee } from "../../components/InformationsCoffee";
import { TitleMenu } from "./style";

export function Home() {
  return (
    <div>
      <Header />
      <InformationsCoffee />

      <TitleMenu>Nossos cafés</TitleMenu>
      <Card/>
    </div>
  );
}
