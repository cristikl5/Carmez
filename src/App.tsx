import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewsDetails from "./components/news/NewsDetails";
import ProductDetails from "./components/products/ProductDetails";
import RecipeDetails from "./components/recipes/RecipeDetails";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import News from "./pages/News";
import Recipes from "./pages/Recipes";
import Stores from "./pages/Stores";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/despre-noi" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:title" element={<NewsDetails />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/produs/:title" element={<ProductDetails />} />
          <Route path="/retete" element={<Recipes />} />
          <Route path="/retete/:name" element={<RecipeDetails />} />
          <Route path="/contacte" element={<Contacts />} />
          <Route path="/magazine" element={<Stores />} />
          <Route path="/contacte/magazine" element={<Stores />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
