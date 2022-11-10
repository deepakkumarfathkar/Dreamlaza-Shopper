
import AllRoutes from "./Router/AllRoutes"
import Navbar from "./Components/Navbar";
import AboveNavbar from "./Components/AboveNavbar";
import BelowNav from "./Components/BelowNav";
import LogoIcon from "./Components/LogoIcon";
import Banner from "./Components/Banner";
import BelowBanner from "./Components/BelowBanner";

function App() {
  return <>
  <AboveNavbar />
  <Navbar />
  <BelowNav />
  <LogoIcon />
  <Banner />
  <BelowBanner />
  <AllRoutes />
  </>
}

export default App
