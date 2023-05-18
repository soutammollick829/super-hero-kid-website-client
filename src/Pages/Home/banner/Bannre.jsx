const Bannre = () => {
  return (
    <div
      className="hero h-96 mt-10"
      style={{
        backgroundImage: `url("https://insight.openexo.com/content/images/size/w692/2021/09/jeffery-ho-x22UAIdif_k-unsplash-1.jpeg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-teal-700 opacity-70 text-5xl font-bold">
            Welcome Kidoz Toy Shop
          </h1>
          <p className="mb-5 text-teal-700 font-semibold">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary bg-teal-700 border-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannre;
