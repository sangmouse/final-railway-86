import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
