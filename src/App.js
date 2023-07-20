import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Cart from "./components/Cart";
import ShopNow from "./components/ShopNow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<ShopNow />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
