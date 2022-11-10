
import AllRoutes from "./Router/AllRoutes"
import Navbar from "./Components/Navbar";
import AboveNavbar from "./Components/AboveNavbar";
import BelowNav from "./Components/BelowNav";
import LogoIcon from "./Components/LogoIcon";

function App() {
  return <>
  <AboveNavbar />
  <Navbar />
  <BelowNav />
  <LogoIcon />
  <AllRoutes />
  </>
}

export default App
