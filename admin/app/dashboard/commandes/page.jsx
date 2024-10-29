"use client";

import Tableau from '@/app/ui/tableau';
import React, { useState } from 'react';
import orders from "@/app/lib/fakeorder";

const Commandes = () => {
  const [filter, setFilter] = useState("tous");
  const options = [
    { id: 1, value: "Livrée" },
    { id: 2, value: "En attente" },
    { id: 3, value: "Annulée" },
  ];

  const ordersFilter = filter === "tous" ? orders : orders.filter((item) => item.status === filter);

  return (
    <main className="commandes">
      <section className="commande-header">
        <section className="title">
          <h2>Les commandes</h2>
        </section>
        <select name="filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="tous">Tous</option>
          {options.map((option) => (
            <option key={option.id} value={option.value}>{option.value}</option>
          ))}
        </select>
      </section>
      <section className="container-data">
      <table className='my-array'>
      <thead>
        <tr>
          <th>Commande ID</th>
          <th>Total</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
        {ordersFilter.map((order) => (
          <Tableau key={order.id} order={order} />
        ))}
        <tfoot></tfoot>
        </table>
      </section>
    </main>
  );
};

export default Commandes;
