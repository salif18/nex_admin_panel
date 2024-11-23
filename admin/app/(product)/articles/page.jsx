"use client"
import React, { useEffect, useState } from 'react'
import MoveToInBoxIcon from '@mui/icons-material/MoveToInbox';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';
import { useRouter } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid';
import fakedata from "@/app/lib/fakedata"
import GeneredStarRating from '@/app/ui/GeneredStarRating';
import axios from 'axios';

const Products = () => {
    const router = useRouter()
    const [_searchValue, _setSearchValue] = useState("")
    const [products , setProducts] = useState([])


    useEffect(()=>{
         const getProducts=async()=>{
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/products`,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer `,
                    },
                });
                if (response.status === 200) {
                    console.log("Produit ajouté avec succès :", response.produits);
                    setProducts(response.data.produits)
                }
    
            } catch (error) {
                console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
            }
         }
         getProducts()
    },[])


     // FONTION DE NAVIGATION VERS UNE AUTRE PAGE
     const _handleNavigate = () => {
        router.push("/create")
    }

    const handleNavigueTo=(id)=>{
        router.push(`/${id}`)
    }

    const handleDeleteProduct=(id)=>{
        stocks = stocks.filter((item)=> item.id != id)
    }

    const _resultToSearch = products.filter((e) =>
        e.name.toLocaleLowerCase().startsWith(_searchValue.toLocaleLowerCase()) ||
        e.category.toLocaleLowerCase().startsWith(_searchValue.toLocaleLowerCase()) ||
        e.price == _searchValue ||
        e.stock == _searchValue 
    );


    //DEFINITION DES DIFFERENTES COLONNES POUR LE TABLEAU DE DATA GRID
    const columns = [
        { field: "_id", headerName: "ID", width: 20 },
        {
            field: "image", headerName: "Image", width: 150, renderCell: (params) => {
                return (
                    <figure>
                        <img src={params.row.image} alt={params.row.name} style={{ width: 50, height: 50 }} />
                    </figure>
                )
            }
        },
        { field: "name", headerName: "Name", width: 150 },
        { field: 'category', headerName: 'Categorie', width: 150 },
        { field: 'subCategory', headerName: 'Subcategorie', width: 150 },
        { field: 'rating', headerName: 'Notes', width: 150,
            renderCell: (params) => 
            <>
            <GeneredStarRating rating={params.row.rating}/>
            <span style={{marginLeft:10}}>({params.row.rating})</span>
            </>
         },
        { field: 'createdAt', headerName: 'Date', width: 150,
            renderCell:(params)=>
               <span>{new Date(params.row.createdAt).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span> 
         },
        { field: "stockGlobal", headerName: "Stock", width: 70 },
        { field: "price", headerName: "Prix", width: 100 },
        { field: 'is_promo', headerName: 'Promotion', width: 100 },
        { field: 'promo_price', headerName: 'Prix de promo', width: 150 },
        { field: 'discount_percentage', headerName: 'Le pourcentage', width: 150 ,
            renderCell:(params)=>
                <span>-{params.row.discount_percentage || 0}% </span> 
         },
        {
            field: 'actions', headerName: 'Actions', width: 150,
            renderCell: (params) => {
                return (
                    <section>
                        <EditRoundedIcon style={{fontSize:22, color: "blue", margin:10}} onClick={() => handleNavigueTo(params?.row?._id)}  />
                        <PlaylistRemoveRoundedIcon style={{fontSize:22, color:"red", margin:10}} onClick={() => handleDeleteProduct(params?.row?._id)}  />
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
            <article style={{ height: 550, width: "100%",fontSize:"1em",  marginTop:20,borderRadius:10, background:"#ffff"}}>

                <DataGrid
                    rows={!_searchValue ? products : _resultToSearch}
                    getRowId={(row) => row._id}
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