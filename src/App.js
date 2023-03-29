import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import "./App.scss";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Users from "./pages/users/Users";
import Contact from "./pages/contact/Contact";
import SignIn from "./pages/signin/SignIn";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
