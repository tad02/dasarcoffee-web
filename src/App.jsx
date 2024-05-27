import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import BackgroundHeader from "./component/bgHeader";
import BottomHeader from "./component/bottomHeader";
import ScrollList from "./component/scrollList";
import Slideshow from "./component/sliderImage";
import SocialMediaLink from "./component/socialMediaLink";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <>
      <Header />
      <Slideshow />
      <BackgroundHeader />
      <BottomHeader />
      <SocialMediaLink />
      <Footer />
    </>
  );
};

export default App;
