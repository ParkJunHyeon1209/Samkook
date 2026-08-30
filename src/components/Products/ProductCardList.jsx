import ProductCard from "./ProductCard";

const temporaryImages = [
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
];

export default function ProductCardList({ products, condition }) {
  return (
    <div className="product-card-list">
      {products.map((product, index) => (
        <ProductCard
          condition={condition}
          image={temporaryImages[index % temporaryImages.length]}
          key={product}
          name={product}
          // number={String(index + 1).padStart(2, "0")}
        />
      ))}
    </div>
  );
}
