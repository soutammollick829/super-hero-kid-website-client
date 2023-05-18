import UniversalImg from '../../../assets/images/robot-to-car-converting-transformer-toy-for-kids-yellow-original-imaf9j5zggkwxgzz.webp'
import { FaArrowRight } from "react-icons/fa";

const BestToy = () => {
    return (
        <div className='flex justify-center items-center mt-20 gap-10'>
            <div className='w-1/2 space-y-5'>
                <p className='font-bold text-teal-700'>Universal Century</p>
                <h1 className='text-4xl font-bold'>RX-78-2 GUNDAM</h1>
                <p className='font-semibold'>The superiority of the robotic exoskeleton over traditional treatments due to the high and consistent repetition of movements,
                <br /> balance, and stability was demonstrated to be a valuable functional recovery therapy during acute stroke inpatient rehabilitation.</p> 
            </div>
            <div className='w-1/2'>
                <img src={UniversalImg} alt="" />
            </div>
        </div>
    );
};

export default BestToy;