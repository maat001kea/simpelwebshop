import ProductsList from "./ProductsList";

const ProductsMain = () => {
  return (
    <div className="grid grid-cols-4">
      <ProductsList />
      <div>cart</div>
    </div>
  );
};

export default ProductsMain;
