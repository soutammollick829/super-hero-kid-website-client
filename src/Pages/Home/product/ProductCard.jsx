import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ toy }) => {
  const { _id, name, series, image, price, quantity } = toy;

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img className="h-48" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge bg-teal-600">NEW</div>
        </h2>
        <p>{series}</p>
        <p className="font-semibold text-teal-600">Price: ${price}</p>
        <p>Quantity: {quantity}</p>

        <div className="">
          <Link to={`/order/${_id}`}>
            <button className="btn btn-outline rounded-full btn-sm text-teal-600 hover:bg-teal-700">
              Order
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
