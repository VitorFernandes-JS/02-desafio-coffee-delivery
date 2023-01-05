import { Minus, Plus, Trash } from "phosphor-react";
import Cafe from "../../assets/Americano.png";

export function CardCoffeeHorizontal() {
  return (
    <>
      <DivImg>
        <img src={Cafe} />
      </DivImg>
      <div>
        <h3>Expresso Tradicional</h3>
      </div>
      <div>
        <button>
          <Minus size={14} />
          <span>1</span>
          <Plus size={14} />
        </button>
      </div>
      <button>
        <Trash size={14} />
        Remover
      </button>
    </>
  );
}
