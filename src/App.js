import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import { Home, Error, About, Products, SingleProduct } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
