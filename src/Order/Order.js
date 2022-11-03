import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../UserInfo/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
      const {user}=useContext(AuthContext)

      const [order,setOrder]=useState([])

    //   const url=`http://localhost:5000/order?email=${user.email}`

      useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))

      },[user?.email])

      const handleDelete=id=>{
        const proceed =window.confirm('are you sure')
  
        if(proceed){
          fetch(`http://localhost:5000/orders/${id}`,{
            method:'DELETE',
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)

            if(data.deletedCount > 0){
              alert('deleted ok')
              const remaining=order.filter(odr=>odr._id !==id)
              setOrder(remaining)
            }
          })
          
        }
  
      }



    return (
        <div>
            <h3>you have: {order.length}</h3>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
 
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   
     {
        order.map(order=><OrderRow key={order._id} order={order} handleDelete={handleDelete} ></OrderRow>)
     }

    </tbody>

    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default Order;