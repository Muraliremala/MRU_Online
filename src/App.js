import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangeCategory from "./Pages/ChangeCategory";
import SubCategory from "./Pages/SubCategory";
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignUp from "./Pages/LoginSignUp";
import About from "./Pages/About"
import tiffins_banner from "./Components/Assests/tiffins_banner.png" 
import juices_banner from "./Components/Assests/juices_banner.png" 
import icecreams_banner from "./Components/Assests/IceCream_banner.png" 
import Snacks_Banner from "./Components/Assests/Snacks_Banner.png"; 
import Biryani_banner from "./Components/Assests/Biryani_banner.png"; 
import Starters_Banner from "./Components/Assests/Starters_Banner.png"; 


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ChangeCategory /> } />
          <Route
            path="/tiffins"
            element={<SubCategory banner={tiffins_banner} category="tiffins" />}
          />
          <Route
            path="/juices"
            element={<SubCategory banner={juices_banner} category="juices" />}
          />
          <Route
            path="/biryani"
            element={<SubCategory banner={Biryani_banner} category="biryani" />}
          />
          <Route
            path="/starters"
            element={
              <SubCategory banner={Starters_Banner} category="starters" />
            }
          />
          <Route
            path="/snacks"
            element={<SubCategory banner={Snacks_Banner} category="snacks" />}
          />
          <Route
            path="/icecreams"
            element={
              <SubCategory banner={icecreams_banner} category="icecreams" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
