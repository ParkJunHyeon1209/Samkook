import { Navigate, Route, Routes } from "react-router-dom";
import Samguk from "./components/Samguk/Samguk";
import ProductCatalog from "./components/Products/ProductCatalog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Samguk />} />
      <Route path="/products" element={<Navigate to="/products/h-beam/used" replace />} />
      <Route path="/products/:categorySlug" element={<ProductCatalog />} />
      <Route path="/products/:categorySlug/:conditionSlug" element={<ProductCatalog />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
