import { Route, Routes, Navigate } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "./context/ShopContext"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./pages/Verify"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import FAQ from "./pages/FAQ"
import Profile from "./pages/Profile"
import ChangePassword from "./pages/ChangePassword"
import MyTransaction from "./pages/MyTransaction"

const PrivateRoute = ({ children }) => {
  const { token } = useContext(ShopContext);
  return token ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={
          <PrivateRoute>
            <PlaceOrder />
          </PrivateRoute>
        } />
        <Route path="/orders" element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        } />
        <Route path="/verify" element={<Verify />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/change-password" element={
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        } />
        <Route path="/my-transaction" element={
          <PrivateRoute>
            <MyTransaction />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App