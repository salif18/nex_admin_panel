"use client";

import React, { useState, useEffect } from "react";

const UpdateProductForm = ({ productToEdit }) => {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        subCategory: "",
        brand: "",
        rating: "",
        description: "",
        price: "",
        date: "",
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
                ],
            },
        ],
    });

    // Charger les données du produit à modifier
    useEffect(() => {
        if (productToEdit) {
            setProduct(productToEdit);
        }
    }, [productToEdit]);

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
                    ],
                },
            ],
        }));
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

    // Soumission des données
    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await fetch(`/api/products/${product.id}`, {
        //         method: "PUT",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(product),
        //     });

        //     if (response.ok) {
        //         console.log("Produit mis à jour avec succès !");
        //     } else {
        //         console.error("Erreur lors de la mise à jour.");
        //     }
        // } catch (error) {
        //     console.error("Erreur :", error);
        // }
    };

    return (
        <main className="add">
            <form onSubmit={handleSubmit}>
                <h2>Modifier un Produit</h2>

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
                        disabled={!product.category}
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
                    <input type="text" name="brand" value={product.brand} onChange={handleInputChange} />
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
                                type="text"
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
                                {color.sizes.map((sizeData, sizeIndex) => (
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

                <button type="submit">Mettre à jour le produit</button>
            </form>
        </main>
    );
};

export default UpdateProductForm;
