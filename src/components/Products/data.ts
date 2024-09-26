import Lingerie from "../../assets/langerie-product.webp";
import Babydoll from "../../assets/baby-doll.webp";
import Short from "../../assets/short.webp";
import CuecaAdulto from "../../assets/cueca-adulto.webp";
import CuecaInfantil from "../../assets/cueca-infantil.webp";
import CalcinhaInfantil from "../../assets/calcinha-infantil.webp";
import Conjunto from "../../assets/conjunto.webp";

export interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    name: "Lingerie",
    category: "Lingeries",
    price: "R$ 129,90",
    image: Lingerie,
  },
  {
    name: "Baby Doll",
    category: "Baby Doll",
    price: "R$ 89,90",
    image: Babydoll,
  },
  {
    name: "Shorts de Malha",
    category: "Shorts de Malha",
    price: "R$ 29,90",
    image: Short,
  },
  {
    name: "Cueca Adulto",
    category: "Cuecas Adulto",
    price: "R$ 29,90",
    image: CuecaAdulto,
  },
  {
    name: "Cueca Infantil",
    category: "Cuecas Infantil",
    price: "R$ 19,90",
    image: CuecaInfantil,
  },
  {
    name: "Calcinha Infantil",
    category: "Calcinhas Infantil",
    price: "R$ 14,90",
    image: CalcinhaInfantil,
  },
  {
    name: "Conjunto",
    category: "Conjuntos",
    price: "R$ 99,90",
    image: Conjunto,
  },
];
