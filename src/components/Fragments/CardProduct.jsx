/* eslint-disable react/prop-types */
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-white rounded-md shadow-md shadow-gray-300 mx-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { imgUrl } = props;
  return (
    <a href="#" className="mb-2">
      <img src={imgUrl} alt="#" className="w-full rounded-t-md" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="p-4">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-normal text-gray-700">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="p-4 flex items-center justify-between">
      <span className="font-bold text-gray-900 ">{price}</span>
      <Button>Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
