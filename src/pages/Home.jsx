import BestDeal from "../components/BestDeal/BestDeal";
import ContactUs from "../components/ContactUs/ContactUs";
import Featured from "../components/Featured/Featured";
import Hero from "../components/Hero/Hero";
import Properties from "../components/Properties/Properties";
import VideoView from "../components/VideoView/VideoView";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <VideoView />
      <BestDeal />
      <Properties />
      <ContactUs />
    </div>
  );
};

export default Home;
