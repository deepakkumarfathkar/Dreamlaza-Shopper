import AllRoutes from "./Router/AllRoutes";
import Navbar from "./Components/Navbar";
import AboveNavbar from "./Components/AboveNavbar";
import BelowNav from "./Components/BelowNav";

import SFooter from "./Components/SFooter";
import Copyright from "./Components/Copyright";

function App() {
  return (
    <>
      <AboveNavbar />
      <Navbar />
      <BelowNav />
      <AllRoutes />
      <SFooter />
      <Copyright />
    </>
  );
}

export default App;
