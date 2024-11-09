import useTitle from "@hooks/useTitle";
import { useEffect } from "react";

const Home = () => {
  const updateTitle = useTitle();

  useEffect(() => {
    updateTitle("Home");
  }, [updateTitle]);

  return <div>Home</div>;
};

export default Home;
