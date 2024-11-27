"use client"
import React, { useEffect, useState } from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';
import { useRouter } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';
import fakemark from "@/app/lib/fakemark"
import axios from 'axios';


const Marques = () => {
    const [marques , setMarques] = useState([])

const router = useRouter();
      // FONTION DE NAVIGATION VERS UNE AUTRE PAGE
      const _handleNavigateCreateMark = () => {
        router.push("/dashboard/marques/create")
    }

    useEffect(()=>{
         const fetchData =async()=>{
            try{
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/marques`,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer `,
                    },
                });
                if (response.status === 200) {      
                    setMarques(response?.data?.marques)
        
                }
            }catch(e){
               console.log(e.response.data.message)
            }
         }
         fetchData()
    },[marques])


    //DEFINITION DES DIFFERENTES COLONNES POUR LE TABLEAU DE DATA GRID
    const columns = [
        { field: "_id", headerName: "ID", width: 20 },
        {
            field: "image", headerName: "Image", width: 200, renderCell: (params) => {
                return (
                    <figure>
                        <img src={params.row.image} alt={params.row.name} style={{ width: 50, height: 50 }} />
                    </figure>
                )
            }
        },

        { field: "name", headerName: "Name", width: 200 },

        {
            field: 'actions', headerName: 'Actions', width: 200,
            renderCell: (params) => {
                return (
                    <section>
                        <EditRoundedIcon style={{ fontSize: 22, color: "blue", margin: 10 }} />
                        <PlaylistRemoveRoundedIcon style={{ fontSize: 22, color: "red", margin: 10 }} />
                    </section>
                )
            }
        },

    ];


    return (
        <main className="categories">
            {/* LA PARTIE HEADER DE LA PAGE */}
            <section className='categorie-header'>
                <h2>Les Marques</h2>
                <button className='btn-create-catego' onClick={_handleNavigateCreateMark} >Créer</button>
            </section>
            {/* LES CONTENUS DE LA PAGE */}
            <article className='section-article'>
                <section className='section'>

                    <DataGrid
                        rows={marques}
                        getRowId={(row) => row._id}
                        disableSelectionOnclick
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </section>


            </article>
            {/* FIN DE CONTENUS */}
        </main>
    )
}
export default Marques