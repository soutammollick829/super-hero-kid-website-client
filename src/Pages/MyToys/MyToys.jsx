import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [orders,setOrders] = useState([]);

    const url = `http://localhost:5000/orders`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;