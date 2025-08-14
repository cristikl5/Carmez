import { News } from "../components/home";
import History from "../components/home/History";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <section>
      <History />
      <Products />
      <News />
    </section>
  );
};

export default Home;
