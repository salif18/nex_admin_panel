"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ImLocation } from "react-icons/im";


const Single = () => {
    const { id } = useParams();
    const [order , setOrder ] = useState(null)
   
   
    
    const Headers = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer `,
      },
       }

   
    useEffect(()=>{
        const fecthData =async()=>{
             try{
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/single/${id}`,Headers);
                if(response.status == 200){
                    console.log(response?.data?.order)
                 setOrder(response?.data?.order)
                }
             }catch(e){
               console.error(e.response?.data?.message || "error")
             }
        }
        fecthData()
    },[])
    
    
  const handleChangeStatus =async(newStatus)=>{
    try{
       const response = await  axios.put(`${process.env.NEXT_PUBLIC_URI}/commandes/order/${id}/updateStatus`, {newStatus}, Headers);
       if(response.status === 200){
        console.log(response?.data?.message)
       }
    }catch(e){
    console.log(e.response?.data?.message || "error")
    }
}

const handleViewPosition =()=>{
const appUrl = "https://shoplines-admin.vercel.app";
const mapsUrl = `https://www.google.com/maps?q=${order?.location?.lat},${order?.location?.lng}&callback=${appUrl}`;
window.open(mapsUrl, "_blank");
}
 

    return (
        <main className="single-commande">
            <section className='single-header'>
                <h2>La commande N°: {order?._id.split("").slice(0,8)}</h2>
                <section className='zone-status'>
                    <h2>Status: {order?.status}</h2>
                </section>
            </section>
            <section className='infos'>
            {order?.status === "En attente" && <button className='cancel' onClick={()=>handleChangeStatus("Annulée")}>Annuler</button> }
            {order?.status === "En attente" && <button className='livrer' onClick={()=>handleChangeStatus("Livrée")} >Livrer</button> }
                <section className='row'>
                <h2>Date</h2>
                {order?.createdAt && <span>{new Date(order?.createdAt).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>}
                </section>
                <section className='row'>
                <h2>Client</h2>
                <span>{order?.user?.nom}</span>
                </section>
                <section className='row'>
                <h2>Numero</h2>
                <span>{order?.user?.numero}</span>
                </section>
                <section className='row'>
                <h2>Email</h2>
                <span>{order?.user?.email}</span>
                </section>
                {/* {
                order?.location?.lng && 
                <section className='row'>
                <h2>Address position</h2>
                <ImLocation  style={{fontSize:"1.2em",cursor:"pointer", color:"green"}}  onClick={handleViewPosition} />
                </section>
                } */}
            </section>
            <section className='product-items'>
                {order?.cart?.map((item) => item && (
                    <div className='card-item' key={item.id}>
                        <div className='left'>
                            <img src={item?.image} alt='' />
                            <div className='column'>
                                <h2>{item?.name}</h2>
                                {item?.size && <span>Size: {item?.size}</span>}
                                <div className='color'>Color: <div style={{background: item?.color}} className='colordiv' ></div> </div>
                                <h2 style={{color:"red"}}>{item?.is_promo && "En promo"}</h2>
                            </div>
                        </div>
                        <div className='rigth'>
                            <h2>{ item?.price * item?.qty} FCFA</h2>
                            <span>Quantity {item?.qty}</span>
                        </div>
                    </div>
                ))}
            </section>
            <section className='address'>
                <div className='row1'>
                    <h2>Total </h2>
                    <div className='total-container'>
                    {order?.total && <span> {order?.total} FCFA</span>}
                    </div>
                </div>
                <div className='row2'>
                    <h2>Address</h2>
                    {order?.address?.ville && <span><ImLocation  style={{fontSize:"1.2em",cursor:"pointer", color:"green"}}  onClick={handleViewPosition} />   {order?.address?.ville} Rue: {order?.address?.rue} Logement: {order?.address?.logt} </span>}
                </div>
               
            </section>
        </main>
    );
}

export default Single;
