import styled from "@emotion/styled";
import ProductCard from "./ProductCard";

const ProductCardListElement = styled("div", { target: "product-card-list" })`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export default function ProductCardList({ products }) {
  return (
    <ProductCardListElement>
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
    </ProductCardListElement>
  );
}
