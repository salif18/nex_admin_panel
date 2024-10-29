"use client"
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/navigation';

const Tableau = ({ order }) => {
    const router = useRouter()
    const handleNavigueToSingle=()=>{
        router.push(`/dashboard/commandes/${order.id}`);
      }
    return (

        <tbody>
            <tr>
                <td>{order.id}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
                <td className='actions'>
                    <section className='btns-action'>
                        <VisibilityIcon className='view' onClick={handleNavigueToSingle} />
                        <button className='cancel'>Annuler</button>
                        <button className='livrer'>Livrer</button>
                    </section>
                </td>
            </tr>
        </tbody>

    );
};

export default Tableau;
