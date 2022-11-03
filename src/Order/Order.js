import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../UserInfo/AuthProvider';

const Order = () => {
      const {user}=useContext(AuthContext)

      const [order,setOrder]=useState({})

    //   const url=`http://localhost:5000/order?email=${user.email}`

      useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))

      },[user?.email])



    return (
        <div>
            <h3>you have: {order.length}</h3>
        </div>
    );
};

export default Order;