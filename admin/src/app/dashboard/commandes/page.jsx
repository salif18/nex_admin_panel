"use client"
import { DataGrid } from '@mui/x-data-grid'
import { useRouter } from 'next/navigation'
import React from 'react'
import MoveToInBoxIcon from '@mui/icons-material/MoveToInbox';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';
const Commandes = () => {

    const router = useRouter()
    

    // FONTION DE NAVIGATION VERS UNE AUTRE PAGE
    const _handleNavigate = () => {
        router.push("/dashboard/categories/create")
    }

    const stocks = [
        {
            id: 1,
            name: "Livreur 1",
            numero:"75941",
            img: "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/461016/1.jpg?4084",
        },
        {
            id: 2,
            name: "Livreur 2",
            numero:"25698",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GjBjJVJcaf9oloAoWNCSEVS-HbjNHKaQBQ&s",
           
        },
        {
            id: 3,
            name: "Livreur 3",
            numero:"3698",
            img: "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/461016/1.jpg?4084https://assets.unileversolutions.com/v1/92661390.png",
           
        },
        {
            id: 4,
            name: "Livreur 4",
            numero:"3698",
            img: "https://sodishop.bmperp.com/assets/uploads/produits/topicrem-ultra-hydratant-lait-corps-24h-peaux-seches-et-sensibles-500ml-mrm00229-8979.jpg",
           
        }

    ]

    

    //DEFINITION DES DIFFERENTES COLONNES POUR LE TABLEAU DE DATA GRID
    const columns = [
        { field: "id", headerName: "ID",with:20},
        {
            field: "image", headerName: "Image", flex:1, renderCell: (params) => {
                return (
                    <figure>
                        <img src={params.row.img} alt={params.row.name} style={{ width: 50, height: 50 }} />
                    </figure>
                )
            }
        },
        { field: 'name', headerName: 'Name', flex:1 },
        { field: 'numero', headerName: 'Numero', flex:1 },
        {
            field: 'actions', headerName: 'Actions', flex:1,
            renderCell: (params) => {
                return (
                    <section>
                        <EditRoundedIcon style={{fontSize:22, color: "blue", margin:10}}  />
                        <PlaylistRemoveRoundedIcon style={{fontSize:22, color:"red", margin:10}} />
                    </section>
                )
            }
        },

    ];

    return (
        <main className="commandes">
              {/* LA PARTIE HEADER DE LA PAGE */}
              <section className='commande-header'>
                <h2>Les commandes</h2>
                
            </section>
            {/* FIN DE LA PARTIE HEADER  */}
            {/* LES CONTENUS DE LA PAGE */}
            <article style={{ height: 550, width: "100%", marginTop:20,borderRadius:10, background:"#ffff"}}>

                <DataGrid
                    rows={stocks}
                    getRowId={(row) => row.id}
                    disableSelectionOnclick
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />

            </article>
            {/* FIN DE CONTENUS */}
        </main>
    )
} 
export default Commandes