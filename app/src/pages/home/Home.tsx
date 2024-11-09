import useTitle from "@hooks/useTitle";
import Page from "@pages/Page";
import { useEffect } from "react";

const Home = () => {
  const updateTitle = useTitle();

  useEffect(() => {
    updateTitle("Home");
  }, [updateTitle]);

  return (
    <Page page="home" title="Home">
      Home
    </Page>
  );
};

export default Home;
