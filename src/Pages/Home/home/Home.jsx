import Gallery from "../Gallery/Gallery";
import Bannre from "../banner/Bannre";
import BestToy from "../bestToy/BestToy";
import ToyProduct from "../product/ToyProduct";
import ReactTab from "../reactTab/ReactTab";


const Home = () => {
    return (
        <div>
            <Bannre/>
            <Gallery/>
            <BestToy/>
            <ReactTab/>
            <ToyProduct/>
        </div>
    );
};

export default Home;