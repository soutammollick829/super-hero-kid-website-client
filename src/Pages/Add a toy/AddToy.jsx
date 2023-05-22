const AddToy = () => {

    const handelAddToys = event =>{
        event.preventDefault();

        const form = event.target;
        const photoUrl = form.photo.value;
        const  toyName = form.toyName.value;
        const sellerName = form.seller.value;
        const sellerEmail = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;

        console.log(photoUrl,toyName,sellerEmail,sellerName,category,price,rating,quantity,detail)
    }

  return (
    <form onSubmit={handelAddToys}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Picture URL</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            name="photo"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input
            type="text"
            placeholder="Toy name"
            name="toyName"
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller name</span>
          </label>
          <input
            type="name"
            name="seller"
            required
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="seller email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-category </span>
          </label>
          <input type="text" name="category" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="$ price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="quantity"
            className="input input-bordered"
          />
        </div>
      </div>
    <textarea
    name="detail"
    placeholder="Detail description
"
    className="textarea textarea-bordered textarea-md w-full mt-10"
    ></textarea>
    <button className="btn btn-block mt-6 bg-teal-600 hover:bg-teal-700">
    Add your toy
    </button>
    </form>
  );
};

export default AddToy;
