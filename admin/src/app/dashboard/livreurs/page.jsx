"use client"
import { DataGrid } from '@mui/x-data-grid'
import { useRouter } from 'next/navigation'
import React from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
const Livreurs = () => {
  
  const router = useRouter()
    

  // FONTION DE NAVIGATION VERS UNE AUTRE PAGE
  const _handleNavigate = () => {
      router.push("/dashboard/livreurs/create")
  }

  const stocks = [
      {
          id: 1,
          name: "Livreur 1",
          numero:"75941",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&s",
      },
      {
          id: 2,
          name: "Livreur 2",
          numero:"25698",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsAC4PjjkC6rV3EZZBk1cDnRJlDUEIVaX_4Eqq1rYCuIGz6YjTMzbVnE6SLyNlPFT7vk&usqp=CAU",
         
      },
      {
          id: 3,
          name: "Livreur 3",
          numero:"3698",
          img: "https://us.123rf.com/450wm/dmitryag/dmitryag2307/dmitryag230702659/208197962-jacket-man-model-african-stylish-black-style-beauty-beige-portrait-american-fashion.jpg?ver=6",
         
      },
      {
          id: 4,
          name: "Livreur 4",
          numero:"3698",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9j8_LZrQKfS42QoP5E2hDPCuNxVK5ZMhjTg&s",
         
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
    <main className="livreurs">
             {/* LA PARTIE HEADER DE LA PAGE */}
             <section className='livreur-header'>
                <h2>Les livreurs</h2>
                <section className='action'>
                        <GroupAddOutlinedIcon className='icon' onClick={_handleNavigate} />
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

export default Livreurs
