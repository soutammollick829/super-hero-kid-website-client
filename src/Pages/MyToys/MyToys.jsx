import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ToysOrderTabel from "./ToysOrderTabel";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5000/orders`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

const handelUpdate = id =>{
  fetch(`http://localhost:5000/orders/${id}`,{
    method:'PUT',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify({status:'confirm'})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.modifiedCount > 0){
//update
    }
  })
}  
  return (
    <div className="">
        <h2>My Toys {orders.length}</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            
            <th className="mx-auto">Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>More details</th>
          </tr>
        </thead>
        <tbody>
            {
               orders.map(order => <ToysOrderTabel
               key={order._id}
               order={order}
               handelUpdate={handelUpdate}
               ></ToysOrderTabel>) 
            }

        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
