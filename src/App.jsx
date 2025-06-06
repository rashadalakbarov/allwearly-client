import { Route, Routes } from "react-router-dom";
import "./App.css";

// components
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
