import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import BottomHeader from "./component/bottomHeader";
import ScrollList from "./component/scrollList";
import Slideshow from "./component/sliderImage";
import SocialMediaLink from "./component/socialMediaLink";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutUs from "./component/aboutus";
import "../node_modules/tailwindcss/base.css";
import "../node_modules/tailwindcss/components.css";
import "../node_modules/tailwindcss/utilities.css";
const App = () => {
  return (
    <>
      <Header />
      <Slideshow />
      <BottomHeader />
      <AboutUs />
      <SocialMediaLink />
      <Footer />
    </>
  );
};

export default App;
