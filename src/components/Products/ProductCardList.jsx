import ProductCard from "./ProductCard";

export default function ProductCardList({ products, condition }) {
  return (
    <div className="product-card-list">
      {products.map((product) => (
        <ProductCard
          condition={condition}
          image={product.image}
          key={product.id}
          name={product.name}
        />
      ))}
    </div>
  );
}
