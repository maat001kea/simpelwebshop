import ProductsList from "./ProductsList";

const ProductsMain = ({ data }) => {
  return (
    <div className="grid grid-cols-4">
      <ProductsList data={data.products} />
      <div>cart</div>
    </div>
  );
};

export default ProductsMain;
