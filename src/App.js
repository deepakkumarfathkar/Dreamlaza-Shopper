
import AllRoutes from "./Router/AllRoutes"
import Navbar from "./Components/Navbar";
import AboveNavbar from "./Components/AboveNavbar";
import BelowNav from "./Components/BelowNav";
import LogoIcon from "./Components/LogoIcon";
import Banner from "./Components/Banner";
import BelowBanner from "./Components/BelowBanner";
import SFooter from "./Components/SFooter";
import Copyright from "./Components/Copyright";

function App() {
  return <>
  <AboveNavbar />
  <Navbar />
  <BelowNav />
  <LogoIcon />
  <Banner />
  <BelowBanner />
  <AllRoutes />
  <SFooter />
  <Copyright />
  </>
}

export default App
