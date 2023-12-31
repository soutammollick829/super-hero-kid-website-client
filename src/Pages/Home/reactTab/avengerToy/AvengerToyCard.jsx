import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const AvengerToyCard = ({ avenger }) => {
  const {_id, image, name, price, rating } = avenger;
  return (
    <div className="card w-72 bg-base-100 border p-2">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <Rating
          placeholderRating={rating}
          readonly
          emptySymbol={<FaRegStar className="text-warning" />}
          placeholderSymbol={<FaStar className="text-warning" />}
          fullSymbol={<FaStar />}
        />
        <div className="card-actions">
          <Link to={`/view/${_id}`}>
            <button className="btn btn-sm bg-teal-600 hover:bg-teal-700">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvengerToyCard;
