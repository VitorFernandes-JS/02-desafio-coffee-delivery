import { CardCoffeeVertical } from "../../components/CardCoffeeVertical";
import { Header } from "../../components/Header";
import { InformationsCoffee } from "./components/InformationsCoffee";
import { useCoffeInformationsContext } from "../../contexts/CoffeeInformationsContext";
import { ContainerMenu, TitleMenu } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

export function Home() {
  const { coffees } = useCoffeInformationsContext();
  return (
    <div>
      <Header />
      <NavLink to={"/cart"}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </NavLink>
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
