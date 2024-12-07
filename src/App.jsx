import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import { useEffect } from "react";

function App() {
  const username = window.localStorage.getItem('username')
  const password = window.localStorage.getItem('password')
  const navigate = useNavigate()

  useEffect(() => {
    if(!username && !password){
      navigate('/sign-in')
    }
  })

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
