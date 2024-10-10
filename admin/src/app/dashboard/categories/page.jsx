"use client"
import React from 'react'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';
import { useRouter } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';

const Categories = () => {
    const router = useRouter()
    

    // FONTION DE NAVIGATION VERS UNE AUTRE PAGE
    const _handleNavigate = () => {
        router.push("/dashboard/categories/create")
    }

    const stocks = [
        {
            id: 1,
            categorie: "Parfum",
        },
        {
            id: 2,
            categorie: "Lait",
           
        },
        {
            id: 3,
            categorie: "Parfum",
           
        },
        {
            id: 4,
            categorie: "Lait",
           
        }

    ]

    

    //DEFINITION DES DIFFERENTES COLONNES POUR LE TABLEAU DE DATA GRID
    const columns = [
        { field: "id", headerName: "ID",with:20},
        
        { field: 'categorie', headerName: 'Categorie', flex:1 },
      
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
        <main className="categorie">
            {/* LA PARTIE HEADER DE LA PAGE */}
            <section className='categorie-header'>
                <h2>Les categories</h2>
                <section className='action'>
                        <CategoryOutlinedIcon className='icon' onClick={_handleNavigate} />
                    </section>
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
export default Categories