import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/navigation.component";
import Home from "./Routes/home/home.component";
import Authentication from "./Routes/Authentication/Authentication.component";
import Shop from "./Routes/shop/shop.component.jsx";
import Checkout from "./Routes/checkout/checkout.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:title" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      {/* / means home or local host address, or the first landing page  */}
    </Routes>
  );
};

export default App;
