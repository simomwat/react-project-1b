import "./App.css";
import Footer from "./Components/Footer/Footer";
import LandingImage from "./Components/LandingImage/LandingImage";
import Menu from "./Components/Menu/Menu";

import Offer from "./Components/Offer/Offer";
import Staff from "./Components/Staff/Staff";

function App() {
  return (
    <main>
      <Menu />
      <LandingImage />
      <Staff />
      <Offer />
      <Footer />
    </main>
  );
}

export default App;
