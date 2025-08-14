import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Catalog from "./pages/Catalog";
import Contacte from "./pages/Contacte";
import DespreNoi from "./pages/DespreNoi";
import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import Noutati from "./pages/Noutati";
import Produs from "./pages/Produs";
import Recete from "./pages/Recete";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/news" element={<Noutati />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/retete" element={<Recete />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/produs" element={<Produs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
