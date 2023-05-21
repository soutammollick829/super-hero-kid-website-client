const ToysOrderTabel = ({order,handelUpdate}) => {
    const {_id,customerName,email,address,price,productName} = order;
  return (
    <div>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3 w-full ml-10">
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br/>
          <span className="badge badge-ghost badge-sm">{productName}</span>
        </td>
        <td>{price}</td>
        <th>
          <button onClick={()=> handelUpdate(_id)} className="btn btn-sm bg-teal-600 hover:bg-teal-700 justify-end">Update</button>
        </th>
      </tr>
    </div>
  );
};

export default ToysOrderTabel;
