import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Phones from "./Phones";

const Home = () => {
  const phones = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Phones phones={phones}></Phones>
    </div>
  );
};

export default Home;
