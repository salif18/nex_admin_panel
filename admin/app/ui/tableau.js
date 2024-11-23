"use client"
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Tableau = ({ order }) => {
    const router = useRouter()
    const handleNavigueToSingle = () => {
        router.push(`/dashboard/commandes/${order?._id}`);
    }
    
  const Headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer `,
  },
   }

    const handleChangeStatus =async(newStatus)=>{
        try{
           const response = await  axios.put(`${process.env.NEXT_PUBLIC_URI}/commandes/order/${order?._id}/updateStatus`, {newStatus}, Headers);
           if(response.status === 200){
            console.log(response?.data?.message)
           }
        }catch(e){
        console.log(e.response?.data?.message || "error")
        }
    }
    return (

        <tbody>
            <tr>
                <td>{order?._id.split("").slice(0,8)}</td>
                <td>{order?.total} FCFA</td>
                <td style={{ color: order?.status === "Livrée" && "green" || order?.status === "Annulée" && "red" || order?.status === "En attente" && "blue" }}>{order.status}</td>
                <td>{new Date(order?.createdAt).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</td>
                <td className='actions'>
                    <section className='btns-action'>
                        <VisibilityIcon className='view' onClick={handleNavigueToSingle} />
                       {order?.status === "En attente" && <button className='cancel' onClick={()=>handleChangeStatus("Annulée")}>Annuler</button> }
                       {order?.status === "En attente" && <button className='livrer' onClick={()=>handleChangeStatus("Livrée")} >Livrer</button> }
                    </section>
                </td>
            </tr>
        </tbody>

    );
};

export default Tableau;
