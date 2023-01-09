import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from './components/Product';
import Account from "./components/Account";
import Admin from './components/Admin';
import AllUser from './components/AllUser';
import CreateUsers from "./components/CreateUsers";
import CreateProduct from "./components/CreateProduct";
import AllProduct from './components/AllProduct';
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import NewProducts from './components/Products'


// import Navigation from './Navigation';
// import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation />
        <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/createusers" element={<CreateUsers />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/allproduct" element={<AllProduct />} />
        <Route path="/alluser" element={<AllUser />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="adminregister" element={<AdminRegister />} />
        <Route path="/newproducts" element={<NewProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
