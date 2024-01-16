import Mynav from "./components/Mynav";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Backtop from "./components/Backtop";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Loader from "./components/Loader";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Loader />
        </div>)
         : (
        <div>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
            <Backtop />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
