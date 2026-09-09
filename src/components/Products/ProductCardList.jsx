import ProductCard from "./ProductCard";

export default function ProductCardList({ products }) {
  return (
    <div className="product-card-list">
      {products.map((product) => (
        <ProductCard
          image={product.image}
          images={product.images}
          key={product.id}
          name={product.name}
          title={product.title}
          specification={product.specification}
        />
      ))}
    </div>
  );
}
