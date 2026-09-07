import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Samguk from "./components/Samguk/Samguk";
import ProductCatalog from "./components/Products/ProductCatalog";
import DimensionTablePage from "./components/Products/DimensionTablePage";
import InventoryPage from "./components/Inventory/InventoryPage";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Samguk />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:groupSlug/:tableSlug" element={<DimensionTablePage />} />
        <Route path="/products/:groupSlug" element={<DimensionTablePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
