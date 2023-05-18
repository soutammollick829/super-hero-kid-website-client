import Gallery from "../Gallery/Gallery";
import Bannre from "../banner/Bannre";
import BestToy from "../bestToy/BestToy";
import ReactTab from "../reactTab/ReactTab";


const Home = () => {
    return (
        <div>
            <Bannre/>
            <Gallery/>
            <BestToy/>
            <ReactTab/>
        </div>
    );
};

export default Home;