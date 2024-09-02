import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import greekSalad from "../../assets/greekSalad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={greekSalad}
          title="Food 1"
          price={12.99}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <SpecialFoodCard
          imageUrl={bruchetta}
          title="Food 2"
          price={7.99}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <SpecialFoodCard
          imageUrl={lemonDessert}
          title="Food 3"
          price={6.99}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Cards>
    </Container>
  );
};

export default Specials;