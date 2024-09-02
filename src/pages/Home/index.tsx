import { FC } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import Specials from "../../components/Specials";
import CustomersSay from "../../components/CustomersSay";
import London from "../../components/London";

const Home: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <London />
      <Footer />
    </Container>
  );
};

export default Home;