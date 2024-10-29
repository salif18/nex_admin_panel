const orders = [
    {
        id: "1",
        user: "salif",
        numero: "78303208",
        email: "salif@gmail.com",
        status: "En attente",
        address: "bamako",
        total: 26666,
        products: [
            { id: 1, qty: 2 },
            { id: 3, qty: 1 },
            { id: 9, qty: 2 },
        ],
        date: "12-10-2024"
    },
    {
        id: "2",
        user: "salif",
        numero: "78303208",
        email: "salif@gmail.com",
        status: "Livrée",
        address: "bamako",
        total: 26666,
        products: [
            { id: 9, qty: 2 },
            { id: 10, qty: 1 },
            { id: 12, qty: 2 },
        ],
        date: "12-10-2024"
    },
    {
        id: "3",
        user: "salif",
        numero: "78303208",
        email: "salif@gmail.com",
        status: "Annulée",
        address: "bamako",
        total: 266636,
        products: [
            { id: 15, qty: 2 },
            { id: 8, qty: 1 },
            { id: 4, qty: 5 },
        ],
        date: "12-10-2024"
    }
]

export default orders