import { useContext } from "react";
import { FaArrowLeft, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Order = () => {
  const order = useLoaderData();
  const {
    _id,
    name,
    series,
    price,
    description,
    image,
    seller,
    rating,
    quantity,
  } = order;
  console.log(order);
  const user = useContext(AuthContext);

  const handelOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const price = form.price.value;
    console.log(name, email, address, price);
    const customerOrder = {
      customerName: name,
      email,
      address,
      price,
      productName: series,
    };
    console.log(customerOrder);

    fetch(`https://super-hero-kid-server-soutammollick829.vercel.app/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mt-10">
      <div className="card card-side bg-base-100">
        <figure>
          <img className="w-2/1" src={image} alt="Movie" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title text-4xl font-bold font-mono text-teal-600">
            {series}
          </h2>
          <h2 className="text-2xl font-mono font-bold">{name}</h2>
          <p>{description}</p>
          <p className="text-xl font-mono ">Price: ${price}</p>
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar className="text-warning" />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <p className="font-semibold">Quantity: {quantity}</p>
          <h2>Seller Shop: {seller.name}</h2>
          <h2 className="">Seller E-mail: {seller.email}</h2>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-primary bg-teal-600 border-0 hover:bg-teal-700">
                <FaArrowLeft />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <form onSubmit={handelOrder}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="Address"
              placeholder="address"
              name="address"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              readOnly
              className="input input-bordered"
            />
          </div>
        </div>
        <button className="btn btn-block mt-6 bg-teal-600 hover:bg-teal-700">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Order;
