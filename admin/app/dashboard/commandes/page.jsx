"use client";

import Tableau from '@/app/ui/tableau';
import React, { useEffect, useState } from 'react';
import orders from "@/app/lib/fakeorder";
import axios from 'axios';

const Commandes = () => {
  const [orders , setOrders] = useState([]);
  const [ordersFilter , setOrdersFilter] = useState([])
  const [filter, setFilter] = useState("tous");

  const Headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer `,
  },
   }

  useEffect(()=>{
       const fecthData =async()=>{
            try{
               const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes`,Headers);
               if(response.status === 200){
                setOrders(response?.data?.orders)
               }
            }catch(e){
              console.error(e.response?.data?.message || "error")
            }
       }
       fecthData()
  },[])


 

  useEffect(()=>{
    const ordersFilter = filter === "tous" ? orders : orders.filter((item) => item.status === filter);
    setOrdersFilter(ordersFilter)
  },[orders])

  const options = [
    { id: 1, value: "Livrée" },
    { id: 2, value: "En attente" },
    { id: 3, value: "Annulée" },
  ];

  return (
    <main className="commandes">
      <section className="commande-header">
        <section className="title">
          <h2>Les commandes</h2>
        </section>
        <select name="filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="tous">Tous</option>
          {options.map((option) => (
            <option key={option._id} value={option.value}>{option.value}</option>
          ))}
        </select>
      </section>
      <section className="container-data">
      <table className='my-array'>
      <thead>
        <tr>
          <th>Order_ID</th>
          <th>Total</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
        {ordersFilter?.map((order) => (
          <Tableau key={order._id} order={order} />
        ))}
        <tfoot></tfoot>
        </table>
      </section>
    </main>
  );
};

export default Commandes;
