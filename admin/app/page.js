"use client"
import React, { useEffect, useState } from 'react'
import Widget1 from './ui/Widget1';
import Widget2 from './ui/Widget2';
import Widget3 from './ui/Widget3';
import Widget4 from './ui/Widget4';
import Widget5 from './ui/Widget5';
import Widget from './ui/Widget';
import Widget6 from './ui/Widget6';
import Widget7 from './ui/Widget7';
import Widget8 from './ui/Widget8';
import Widget9 from './ui/Widget9';
import axios from 'axios';
import GrosAcheteur from './ui/Widget10';
import UserFidel from './ui/Widget12';
import StatsByMonth from './ui/Widget11';
import Widget14 from './ui/Widget14';
import Widget13 from './ui/Widget13';


export default function Home() {
  const [userCount , setUserCount ] = useState(0);
  const [commandeCount , setCommandeCount ] = useState(0);
  const [totalStock , setTotalStock] = useState(0)
  const [ totalCost, setTotalCost ] = useState(0)
  const [totalRevenu , setTotalRevenu] = useState(0)
  const [totalBenefice , setTotalBenefice]=useState(0)
  const [statsYear , setStatsYear] = useState([])
  const [statsWeek , setStatsWeek] = useState([]);
  const [produitsPlusAchetes,setProduitsPlusAchetes] = useState([])
  const [stockEpuise, setStockEpuise] = useState([])
  const [statsMonth, setStatsMonth] = useState([])
  const [statsDay, setStatsDay] = useState([])
  const [grosAcheteurs, setGrosAcheteur] = useState([])
  const [clientsFidels, setClientsFidels] = useState([])
  useEffect(()=>{
    const fetchData=async()=>{
       try {
           const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/auth/users/length`,{
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer `,
               },
           });
           if (response.status === 200) {
               setUserCount(response?.data?.count)
           }

       } catch (error) {
           console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
       }
    }
    fetchData()
},[])

useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/count`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
             setCommandeCount(response?.data?.countCommandes)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])


useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/products/stocks`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
           
             setTotalStock(response?.data?.totalStock)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])

useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/products/stocksepuise`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
             setStockEpuise(response?.data?.produitsStockEpuisé)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])


useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/products/totalcout`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
            
             setTotalCost(response?.data?.totalCost)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])


useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/stats-by-hebdo`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
             setStatsWeek(response?.data?.statsWeek)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])

useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/stats-by-year-current`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
             setStatsYear(response.data?.stats)
             console.log("stats de lanne en cours", statsYear)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])

useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/revenu`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
             setTotalRevenu(response?.data?.totalRevenu)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])



useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/benefice`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
             setTotalBenefice(response?.data?.results)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])


useEffect(()=>{
  const fetchData=async()=>{
     try {
         const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/plus-achetes`,{
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer `,
             },
         });
         if (response.status === 200) {
             setProduitsPlusAchetes(response?.data?.produitsLesPlusAchetés)
         }

     } catch (error) {
         console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
     }
  }
  fetchData()
},[])

useEffect(()=>{
    const fetchData=async()=>{
       try {
           const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/stats-by-month-current`,{
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer `,
               },
           });
           if (response.status === 200) {
               setStatsMonth(response?.data?.stats)
           }

       } catch (error) {
           console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
       }
    }
    fetchData()
},[])


useEffect(()=>{
    const fetchData=async()=>{
       try {
           const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/client-fidel`,{
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer `,
               },
           });
           if (response.status === 200) {
               setClientsFidels(response?.data?.stats)
           }

       } catch (error) {
           console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
       }
    }
    fetchData()
},[])

useEffect(()=>{
    const fetchData=async()=>{
       try {
           const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/gros-acheteur`,{
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer `,
               },
           });
           if (response.status === 200) {
               setGrosAcheteur(response?.data?.stats)
           }

       } catch (error) {
           console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
       }
    }
    fetchData()
},[])

useEffect(()=>{
    const fetchData=async()=>{
       try {
           const response = await axios.get(`${process.env.NEXT_PUBLIC_URI}/commandes/stats-by-day`,{
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer `,
               },
           });
           if (response.status === 200) {
               setStatsDay(response?.data?.stats)
           }

       } catch (error) {
           console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
       }
    }
    fetchData()
},[])


  function formatNumber(number) {
    if (number >= 1_000_000) {
        return (number / 1_000_000).toFixed(1) + 'M'; // Diviser par 1M et ajouter 'M'
    } else if (number >= 1_000) {
        return (number / 1_000).toFixed(1) + 'k'; // Diviser par 1k et ajouter 'k'
    }
    return number.toString(); // Retourner le nombre tel quel si < 1000
}

  return (
    <main className="home">
      <section className='section-header'>
        <h2>Resumé général</h2>
      </section>
      <section className='first-row'>
        <Widget4 data={statsWeek} />
        <section className='row'>
          <section className='column'>
            <Widget stock={formatNumber(totalStock)} />
            <Widget1 totalcost={totalCost + totalRevenu} />
            <Widget8  count={formatNumber(userCount)} />
            <Widget13 count={formatNumber(commandeCount)} />
          </section>
          <section className='column'>
            <Widget2 totalRevenu={totalRevenu} />
            <Widget3 totalBenefice={totalBenefice} />
            <Widget9 count={formatNumber(commandeCount)} />
            <Widget14 count={formatNumber(commandeCount)} />
          </section>
        </section>
      </section>
      <section className='column'>
       
       
      </section>
      <section className='three-row'>
        <section className='row'>
          <Widget6 stockEpuise={stockEpuise} />
          <Widget7 produits={produitsPlusAchetes} />
        </section>
        <StatsByMonth data={statsMonth} />
      </section>

      <section className='three-row'>
        <section className='row'>
          <UserFidel data={clientsFidels} />
          <GrosAcheteur grosAcheteurs={grosAcheteurs} />
        </section>
        <Widget5 data={statsYear} />
      </section>
    </main>
  );
}
