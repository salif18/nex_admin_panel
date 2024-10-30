const orders = [
    {
        id: "1",
        user: "salif",
        numero: "78303208",
        email: "salif@gmail.com",
        status: "En attente",
        address: "bamako",
        total: 25000,
        products: [
            { id: 1, qty: 2 ,color:"red" ,size:"M" },
            { id: 3, qty: 1 ,color:"blue", size:"X"},
            { id: 9, qty: 2 ,color:"jaune",size:"S" },
        ],
        date: "12-10-2024"
    },
    {
        id: "2",
        user: "sali",
        numero: "78303209",
        email: "sali@gmail.com",
        status: "Livrée",
        address: "bamako ,Mangambougou rue:578 ,log:45",
        total: 38466,
        products: [
            { id: 9, qty: 1 ,color:"Noir" ,size:"M"},
            { id: 10, qty: 1 ,color:"red" ,size:"M" },
            { id: 12, qty: 1,color:"blanc" ,size:"M" },
            { id: 1, qty: 1,color:"grey" ,size:"S" },
            { id: 5, qty: 1,color:"red" ,size:"M" },
        ],
        date: "12-10-2024"
    },
    {
        id: "3",
        user: "Awa",
        numero: "78303210",
        email: "awa@gmail.com",
        status: "Annulée",
        address: "bamako, Sabalibougou , rue: 145 , log: 78",
        total: 18636,
        products: [
            { id: 15, qty: 2 ,color:"red" ,size:"M" },
            { id: 8, qty: 1 ,color:"noir" ,size:"M"},
           
        ],
        date: "12-10-2024"
    },
    {
        id: "4",
        user: "Bintou",
        numero: "78303211",
        email: "bintou@gmail.com",
        status: "Livrée",
        address: "bamako,Lafiabougou , rue: 145 , log: 78",
        total: 60636,
        products: [
            { id: 4, qty: 2 ,color:"grey" ,size:"M" },
            { id: 3, qty: 1 ,color:"noir" ,size:"M"},
            { id: 7, qty: 1 ,color:"bleu" ,size:"M"},
            { id: 9, qty: 1 ,color:"noir" ,size:"M"},
            { id: 14, qty: 1 ,color:"grey" ,size:"M"},
            { id: 11, qty: 1 ,color:"rouge" ,size:"M"},
            { id: 1, qty: 1 ,color:"noir" ,size:"M"},
           
        ],
        date: "12-10-2024"
    },
    {
        id: "5",
        user: "Bourama",
        numero: "78303212",
        email: "boura@gmail.com",
        status: "En attente",
        address: "bamako,banankabougou , rue: 145 , log: 78",
        total: 60636,
        products: [
            { id: 4, qty: 2 ,color:"grey" ,size:"M" },
            { id: 8, qty: 1 ,color:"noir" ,size:"S"},
            { id: 7, qty: 1 ,color:"bleu" ,size:"M"},
            { id: 10, qty: 1 ,color:"noir" ,size:"S"},
            { id: 11, qty: 1 ,color:"rouge" ,size:"M"},
            { id: 1, qty: 1 ,color:"noir" ,size:"S"},
           
        ],
        date: "12-10-2024"
    },
    {
        id: "6",
        user: "Baba",
        numero: "78303213",
        email: "baba@gmail.com",
        status: "En attente",
        address: "bamako,Faladie, rue: 145 , log: 78",
        total: 45000,
        products: [
            { id: 2, qty: 2 ,color:"grey" ,size:"M" },
            { id: 5, qty: 1 ,color:"noir" ,size:"S"},
            { id: 7, qty: 1 ,color:"bleu" ,size:"M"},
            { id: 13, qty: 1 ,color:"noir" ,size:"S"},
            { id: 9, qty: 1 ,color:"rouge" ,size:"M"},
            { id: 15, qty: 1 ,color:"noir" ,size:"S"},
           
        ],
        date: "12-10-2024"
    }
]

export default orders