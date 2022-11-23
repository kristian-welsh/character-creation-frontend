import "./styles.css";

import ContentTwocol from "../../components/content-two-col";

import { topContent } from "./data";

const Home = () => {
  return (
    <div className="wrapper">
      <ContentTwocol data={topContent.data} />
    </div>
  );
};

export default Home;
