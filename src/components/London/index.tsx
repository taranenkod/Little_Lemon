import { FC } from "react";
import { Container, Content, Image } from "./styles";
import EmployeeImage from "../../assets/EmployeeImage.jpg";

const London: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>London</h2>
        <p className="lead-txt">
          Little Lemon is owned by James, who moved to the UK to pursue their shared dream of owning a restaurant.
        </p>
      </Content>
      <Image>
        <img src={EmployeeImage} alt="Employee" />
      </Image>
    </Container>
  );
};

export default London;