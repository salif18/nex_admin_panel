"use client"
import { useParams } from 'next/navigation'
import orders from "@/app/lib/fakeorder";
import fakedata from "@/app/lib/fakedata";
import React from 'react';

const Single = () => {
    const { id } = useParams();
    const order = orders.find((item) => item.id == id);

    if (!order) {
        return <p>Commande non trouvée.</p>;
    }

    const productItems = order.products.map((item) => {
        const article = fakedata.find((prod) => prod.id == item.id)
        return article ? {
            id: article.id,
            name: article.name,
            img: article.img,
            qty: item.qty,
            price: article.price,
            color: item.color,
            size: item.size
        } : null
    }).filter((item) => item !== null);

    return (
        <main className="single-commande">
            <section className='single-header'>
                <h2>La commande N°: {order.id}</h2>
                <section className='zone-status'>
                    <h2>Status: {order.status}</h2>
                </section>
            </section>
            <section className='infos'>
                <h2>Date</h2>
                <span>{order.date}</span>
                <h2>Name</h2>
                <span>{order.user}</span>
                <h2>Numero</h2>
                <span>{order.numero}</span>
                <h2>Email</h2>
                <span>{order.email}</span>
            </section>
            <section className='product-items'>
                {productItems.map((item, index) => item && (
                    <div className='card-item' key={index}>
                        <div className='left'>
                            <img src={item.img} alt='' />
                            <div className='column'>
                                <h2>{item.name}</h2>
                                <span>Size: {item.size}</span>
                                <span>Color: {item.color}</span>
                            </div>
                        </div>
                        <div className='rigth'>
                            <h2>{item.price} FCFA</h2>
                            <span>Quantity {item.qty}</span>
                        </div>
                    </div>
                ))}
            </section>
            <section className='address'>
                <div className='left'>
                    <h2>Total</h2>
                    <span>{order.total} XOF</span>
                </div>
                <div className='rigth'>
                    <h2>Address</h2>
                    <span>{order.address}</span>
                </div>
            </section>
        </main>
    );
}

export default Single;
