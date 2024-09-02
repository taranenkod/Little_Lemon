import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What ours customers say!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgtESwhW3VkmK3LFLf3Ahd8AR_MqT49O-ZnfuYfnNKX5SuJ3QP3c1tK1YsbQW0USSKh4&usqp=CAU"
          customerName="Client 1"
          testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgtESwhW3VkmK3LFLf3Ahd8AR_MqT49O-ZnfuYfnNKX5SuJ3QP3c1tK1YsbQW0USSKh4&usqp=CAU"
          customerName="Client 2"
          testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CustomersSayCard
          rating={3}
          customerImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgtESwhW3VkmK3LFLf3Ahd8AR_MqT49O-ZnfuYfnNKX5SuJ3QP3c1tK1YsbQW0USSKh4&usqp=CAU"
          customerName="Client 3"
          testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgtESwhW3VkmK3LFLf3Ahd8AR_MqT49O-ZnfuYfnNKX5SuJ3QP3c1tK1YsbQW0USSKh4&usqp=CAU"
          customerName="Client 4"
          testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;