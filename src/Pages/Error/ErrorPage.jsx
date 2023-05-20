import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div
        className="hero min-h-screen w-full mb-20 mt-10"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000")`,
        }}
      ></div>
      <Link>
        <button className="btn btn-sm bg-teal-600 hover:bg-teal-700">
          <FaArrowLeft /> Back to home
        </button>
      </Link>
    </>
  );
};

export default ErrorPage;
