
import AllRoutes from "./Router/AllRoutes"
import Navbar from "./Components/Navbar";
import AboveNavbar from "./Components/AboveNavbar";
import BelowNav from "./Components/BelowNav";
import LogoIcon from "./Components/LogoIcon";
import Banner from "./Components/Banner";

function App() {
  return <>
  <AboveNavbar />
  <Navbar />
  <BelowNav />
  <LogoIcon />
  <Banner />
  <AllRoutes />
  </>
}

export default App
