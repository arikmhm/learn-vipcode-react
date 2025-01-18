import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CardProduct>
        <CardProduct.Header imgUrl="public/images/lawang-sewu.jpg" />
        <CardProduct.Body title="Lawang Sewu">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          quia?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 100.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header imgUrl="public/images/lawang-sewu.jpg" />
        <CardProduct.Body title="Lawang Sewu">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          quia?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 100.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
