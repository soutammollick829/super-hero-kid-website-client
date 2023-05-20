import { FaArrowLeft, FaRegStar, FaShoppingCart, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const singleToyDetails = useLoaderData();
  const {
    name,
    image,
    description,
    details,
    price,
    quantity,
    rating,
    seller,
    year,
  } = singleToyDetails;
  return (
    <div>
      <div className="card bg-base-100 border ">
        <figure>
          <img className="w-96" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold text-teal-600">
            Product name: {name}
          </h2>
          <p>
            <span className="text-xl font-bold">Product details:</span>{" "}
            {details}
          </p>
          <p>
            <span className="text-xl font-bold">Product description:</span>{" "}
            {description}
          </p>
          <h2>Seller: {seller.name}</h2>
          <h2>Seller E-mail: {seller.email}</h2>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <p>Year: {year}</p>
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar className="text-warning" />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <div className="card-actions ">
            <button className="btn bg-teal-600 hover:bg-teal-700">
              Add To Cart <FaShoppingCart />
            </button>
            <div className="ml-auto">
              <Link to='/'>
                <button className="btn btn-sm bg-teal-600 hover:bg-teal-700"><FaArrowLeft/> Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
