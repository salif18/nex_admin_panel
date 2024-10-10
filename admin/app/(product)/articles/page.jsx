"use client"
import React, { useState } from 'react'
import MoveToInBoxIcon from '@mui/icons-material/MoveToInbox';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';
import { useRouter } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';

const Products = () => {
    const router = useRouter()
    const [_searchValue, _setSearchValue] = useState("")

    // FONTION DE NAVIGATION VERS UNE AUTRE PAGE
    const _handleNavigate = () => {
        router.push("/create")
    }

    const stocks = [
        {
            id: 1,
            name: "Nivea",
            categorie: "Parfum",
            img: "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/461016/1.jpg?4084",
            prix: 2000,
            stock: 4,
            date: "2024-1-5"
        },
        {
            id: 2,
            name: "Nivea",
            categorie: "Lait",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GjBjJVJcaf9oloAoWNCSEVS-HbjNHKaQBQ&s",
            prix: 2500,
            stock: 6,
            date: "2024-1-5"
        },
        {
            id: 3,
            name: "Axe",
            categorie: "Parfum",
            img: "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/461016/1.jpg?4084https://assets.unileversolutions.com/v1/92661390.png",
            prix: 2500,
            stock: 4,
            date: "2024-1-5"
        },
        {
            id: 4,
            name: "Topicrem",
            categorie: "Lait",
            img: "https://sodishop.bmperp.com/assets/uploads/produits/topicrem-ultra-hydratant-lait-corps-24h-peaux-seches-et-sensibles-500ml-mrm00229-8979.jpg",
            prix: 8000,
            stock: 8,
            date: "2024-1-5"
        }

    ]

    const _resultToSearch = stocks.filter((e) =>
        e.name.toLocaleLowerCase().startsWith(_searchValue.toLocaleLowerCase()) ||
        e.categorie.toLocaleLowerCase().startsWith(_searchValue.toLocaleLowerCase()) ||
        e.prix == _searchValue ||
        e.stock == _searchValue
    );


    //DEFINITION DES DIFFERENTES COLONNES POUR LE TABLEAU DE DATA GRID
    const columns = [
        { field: "id", headerName: "ID", width: 20 },
        {
            field: "image", headerName: "Image", width: 200, renderCell: (params) => {
                return (
                    <figure>
                        <img src={params.row.img} alt={params.row.name} style={{ width: 50, height: 50 }} />
                    </figure>
                )
            }
        },
        { field: "name", headerName: "Name", width: 200 },
        { field: 'categorie', headerName: 'Categorie', width: 200 },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: "stock", headerName: "Stock", width: 70 },
        { field: "prix", headerName: "Prix", width: 200 },
        {
            field: 'actions', headerName: 'Actions', width: 200,
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
        <main className="product">
            {/* LA PARTIE HEADER DE LA PAGE */}
            <section className='product-header'>
                <h2>Les stocks</h2>

                <section className='section-search'>
                    <form className='form'>
                        <input
                            type='text'
                            name="searchValue"
                            value={_searchValue}
                            onChange={(e) => _setSearchValue(e.target.value)}
                            placeholder='Rechercher...' />
                    </form>
                    <section className='action'>
                        <MoveToInBoxIcon className='icon' onClick={_handleNavigate} />
                    </section>
                </section>

            </section>
            {/* FIN DE LA PARTIE HEADER  */}
            {/* LES CONTENUS DE LA PAGE */}
            <article style={{ height: 550, width: "100%", marginTop:20,borderRadius:10, background:"#ffff"}}>

                <DataGrid
                    rows={!_searchValue ? stocks : _resultToSearch}
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
export default Products