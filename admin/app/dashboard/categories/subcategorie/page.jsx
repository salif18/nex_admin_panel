"use client"
import React from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';
import { useRouter } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';

const SubCategories = () => {
    const router = useRouter()

    // FONTION DE NAVIGATION VERS UNE AUTRE PAGE
    const _handleNavigateCreateCategorie = () => {
        router.push("/dashboard/categories/subcategorie/create")
    }

    const subcategories = [
        { id: 1, name: "Enfants" },
        { id: 2, name: "Femmes" },
        { id: 3, name: "Hommes" }
    ]



    //DEFINITION DES DIFFERENTES COLONNES POUR LE TABLEAU DE DATA GRID
    const columns = [
        { field: "id", headerName: "ID", width: 20 },

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
                <h2>Les sous categories</h2>
                
               
                <button className='btn-create-catego' onClick={_handleNavigateCreateCategorie}>Créer</button>
              
            </section>
            {/* LES CONTENUS DE LA PAGE */}
            <article className='section-article'>

                <section className='section'>

                    <DataGrid
                        rows={subcategories}
                        getRowId={(row) => row.id}
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
export default SubCategories