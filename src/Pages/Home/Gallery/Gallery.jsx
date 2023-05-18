import Marquee from "react-fast-marquee";
import img1 from "../../../assets/images/E7161-E7120_Transformers_Cybertron__67910.jpg";
import img2 from "../../../assets/images/81PoVVc04-L._AC_UF894,1000_QL80_.jpg";
import img3 from "../../../assets/images/89b93f16b5825be51ad8e98dd6e22b56.jpg";
import img4 from "../../../assets/images/robot-to-truck-converting-transformer-toy-for-kids-601-hccd-original-imaevh2xhaggkztz.webp";

const Gallery = () => {
  return (
    <Marquee>
      <div className="card w-52 bg-base-100 shadow-2xl mt-20 mr-10 ">
        <div className="card-body">
          <h2 className="card-title">Transformers Earthrise </h2>
        </div>
        <figure>
          <img className="h-52"
            src={img1}
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card w-52 bg-base-100 shadow-2xl mt-20 mr-10">
        <div className="card-body">
          <h2 className="card-title">Transformers Cybertron </h2>
        </div>
        <figure>
          <img className="h-52"
            src={img2}
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card w-52 bg-base-100 shadow-2xl mt-20 mr-5">
        <div className="card-body">
          <h2 className="card-title">Transformers Toys</h2>
        </div>
        <figure>
          <img className="h-52"
            src={img3}
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card w-52 bg-base-100 shadow-2xl mt-20 mr-5">
        <div className="card-body">
          <h2 className="card-title">Transformers Cyberverse</h2>
        </div>
        <figure>
          <img className="h-52"
            src={img4}
            alt="Shoes"
          />
        </figure>
      </div>
    </Marquee>
  );
};

export default Gallery;
