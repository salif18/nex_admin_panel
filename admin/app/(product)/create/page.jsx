"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductForm = () => {
    const [isValid, setIsValid] = useState(true);
    const [reponseServer, setReponseServer] = useState("");
    const [product, setProduct] = useState({
        name: "",
        category: "",
        subCategory: "",
        brand: "",
        rating: "",
        description: "",
        price: "",
        is_promo: false,
        promo_price: "",
        discount_percentage: "",
        stockGlobal: 0, // Stock global pour l'ensemble du produit
        othersColors: [
            {
                color: "",
                images: "",
                stock: 0, // Stock spécifique pour cette couleur
                sizes: [
                    { size: "S", stock: 0 },
                    { size: "M", stock: 0 },
                    { size: "L", stock: 0 },
                    { size: "X", stock: 0 },
                    { size: "XS", stock: 0 },
                    { size: "XL", stock: 0 },
                    { size: "28", stock: 0 },
                    { size: "30", stock: 0 },
                    { size: "32", stock: 0 },
                    { size: "34", stock: 0 },
                    { size: "36", stock: 0 },
                    { size: "38", stock: 0 },
                    { size: "40", stock: 0 },
                    { size: "42", stock: 0 },
                    { size: "44", stock: 0 },
                    { size: "46", stock: 0 },
                    { size: "48", stock: 0 },
                ], // Stock pour chaque taille
            },
        ],
    });

    // Met à jour les champs du produit général
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Met à jour les champs spécifiques de la couleur
    const handleColorChange = (index, e) => {
        const { name, value } = e.target;
        const updatedColors = [...product.othersColors];
        updatedColors[index][name] = value;
        setProduct((prevState) => ({
            ...prevState,
            othersColors: updatedColors,
        }));
    };

    // Met à jour le stock pour une taille spécifique
    const handleSizeStockChange = (colorIndex, sizeIndex, e) => {
        const { value } = e.target;
        const updatedColors = [...product.othersColors];
        updatedColors[colorIndex].sizes[sizeIndex].stock = parseInt(value, 10);
        setProduct((prevState) => ({
            ...prevState,
            othersColors: updatedColors,
        }));
    };

    // Ajoute une nouvelle couleur
    const handleAddColor = () => {
        setProduct((prevState) => ({
            ...prevState,
            othersColors: [
                ...prevState.othersColors,
                {
                    color: "",
                    images: "",
                    stock: 0,
                    sizes: [
                        { size: "S", stock: 0 },
                        { size: "M", stock: 0 },
                        { size: "L", stock: 0 },
                        { size: "X", stock: 0 },
                        { size: "XS", stock: 0 },
                        { size: "XL", stock: 0 },
                        { size: "28", stock: 0 },
                        { size: "30", stock: 0 },
                        { size: "32", stock: 0 },
                        { size: "34", stock: 0 },
                        { size: "36", stock: 0 },
                        { size: "38", stock: 0 },
                        { size: "40", stock: 0 },
                        { size: "42", stock: 0 },
                        { size: "44", stock: 0 },
                        { size: "46", stock: 0 },
                        { size: "48", stock: 0 },
                    ],
                },
            ],
        }));
    };

    const initialProductState = {
        name: "",
        category: "",
        subCategory: "",
        brand: "",
        rating: "",
        description: "",
        price: "",
        is_promo: false,
        promo_price: "",
        discount_percentage: "",
        stockGlobal: 0,
        othersColors: [
            {
                color: "",
                images: "",
                stock: 0,
                sizes: [
                    { size: "S", stock: 0 },
                    { size: "M", stock: 0 },
                    { size: "L", stock: 0 },
                    { size: "X", stock: 0 },
                    { size: "XS", stock: 0 },
                    { size: "XL", stock: 0 },
                    { size: "28", stock: 0 },
                    { size: "30", stock: 0 },
                    { size: "32", stock: 0 },
                    { size: "34", stock: 0 },
                    { size: "36", stock: 0 },
                    { size: "38", stock: 0 },
                    { size: "40", stock: 0 },
                    { size: "42", stock: 0 },
                    { size: "44", stock: 0 },
                    { size: "46", stock: 0 },
                    { size: "48", stock: 0 },
                ],
            },
        ],
    };

    // Supprime une couleur spécifique
    const handleRemoveColor = (index) => {
        const updatedColors = [...product.othersColors];
        updatedColors.splice(index, 1);
        setProduct((prevState) => ({
            ...prevState,
            othersColors: updatedColors,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation des champs
        if (
            !product.name || !product.category ||
            !product.subCategory || !product.brand ||
            !product.description || !product.price ||
            !product.stockGlobal || !product.othersColors
        ) {
            setIsValid(false); // Affichez un message d'erreur à l'utilisateur
            setReponseServer("Veuillez remplir les champs!")
            return;

        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URI}/products`, product, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer `,
                },
            });
            if (response.status === 201) {
                console.log("Produit ajouté avec succès :", response.data);
                setReponseServer(response?.data?.message)
                // Réinitialiser les champs après l'envoi
                setProduct(initialProductState);
            }

        } catch (error) {
            console.error("Erreur lors de l'ajout du produit :", error.response?.data?.message || error.message);
        }

    };


    useEffect(() => {
        if (reponseServer) {
            const timer = setTimeout(() => setReponseServer(""), 3000)
            return () => clearTimeout(timer)
        }
    }, [reponseServer])

    return (
        <main className="add">
            <form onSubmit={handleSubmit}>
                <h2>Ajouter un Produit</h2>

                {/* Nom du produit */}
                <div>
                    <label>Nom du produit</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Catégorie */}
                <div>
                    <label>Catégorie</label>
                    <select name="category" value={product.category} onChange={handleInputChange}>
                        <option value="">Sélectionner une catégorie</option>
                        <option value="Vêtements">Vêtements</option>
                        <option value="Chaussures">Chaussures</option>
                        <option value="Sacs">Sacs</option>
                        <option value="Accessoires">Accessoires</option>
                    </select>
                </div>

                {/* Sous-catégorie */}
                <div>
                    <label>Sous-catégorie</label>
                    <select
                        name="subCategory"
                        value={product.subCategory}
                        onChange={handleInputChange}
                        disabled={!product.category} /* Désactiver si aucune catégorie n'est choisie */
                    >
                        <option value="">Sélectionner une sous-catégorie</option>
                        <option value="Hommes">Hommes</option>
                        <option value="Femmes">Femmes</option>
                        <option value="Enfants">Enfants</option>
                    </select>
                </div>

                {/* Marque */}
                <div>
                    <label>Marque</label>
                    <input type="text" name="brand" value={product.brand} onChange={handleInputChange} placeholder="marque" />

                </div>

                {/* Description */}
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Price */}
                <div>
                    <label>Price</label>
                    <input type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Price" />

                </div>

                {/* Stock global */}
                <div>
                    <label>Stock global</label>
                    <input
                        type="number"
                        name="stockGlobal"
                        value={product.stockGlobal}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Gestion des couleurs */}
                {product.othersColors.map((color, colorIndex) => (
                    <div className="dynamic-section" key={colorIndex}>
                        <h4>Couleur {colorIndex + 1}</h4>
                        <div>
                            <label>Couleur</label>
                            <input
                                type="color"
                                name="color"
                                value={color.color}
                                onChange={(e) => handleColorChange(colorIndex, e)}
                            />
                        </div>

                        <div>
                            <label>Images</label>
                            <input
                                type="text"
                                name="images"
                                value={color.images}
                                onChange={(e) => handleColorChange(colorIndex, e)}
                            />
                        </div>

                        <div>
                            <label>Stock pour cette couleur</label>
                            <input
                                type="number"
                                name="stock"
                                value={color.stock}
                                onChange={(e) => handleColorChange(colorIndex, e)}
                            />
                        </div>

                        {/* Stock par taille */}
                        {(product.category === "Vêtements" || product.category === "Chaussures") && (
                            <div>
                                <label>Stock par taille</label>
                                {color.sizes
                                    .filter((sizeData) => {
                                        // Si la catégorie est "Chaussures", afficher uniquement les tailles numériques
                                        if (product.category === "Chaussures") {
                                            return !isNaN(sizeData.size); // Filtrer uniquement les valeurs numériques
                                        }
                                        // Sinon, afficher toutes les tailles
                                        return true;
                                    })
                                    .map((sizeData, sizeIndex) => (
                                        <div className="size-section" key={sizeIndex}>
                                            <label>{sizeData.size}</label>
                                            <input
                                                type="number"
                                                value={sizeData.stock}
                                                onChange={(e) => handleSizeStockChange(colorIndex, sizeIndex, e)}
                                            />
                                        </div>
                                    ))}
                            </div>
                        )}


                        <button type="button" onClick={() => handleRemoveColor(colorIndex)}>
                            Supprimer cette couleur
                        </button>
                    </div>
                ))}

                <button type="button" className="add-color-btn" onClick={handleAddColor}>
                    Ajouter une autre couleur
                </button>

                <button type="submit">{reponseServer || "Ajouter le produit"}</button>
            </form>
        </main>
    );
};

export default ProductForm;
