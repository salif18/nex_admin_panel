import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Tableau = ({ order }) => {
    return (

        <tbody>
            <tr>
                <td>{order.id}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
                <td className='actions'>
                    <section className='btns-action'>
                        <VisibilityIcon className='view' />
                        <button className='cancel'>Annuler</button>
                        <button className='livrer'>Livrer</button>
                    </section>
                </td>
            </tr>
        </tbody>

    );
};

export default Tableau;
