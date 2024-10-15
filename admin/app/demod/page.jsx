// pages/index.js
import { useState } from "react";
import styles from '../styles/Home.module.css';

const Prod = () => {
  const [filters, setFilters] = useState({
    selectedCategories: [],
    maxPrice: 10000,
    selectedRating: '',
    searchQuery: ''
  });

  const [products, setProducts] = useState([
    // Données fictives des produits
    { id: 1, name: "Product 1", category: "Category 1", sousCategory: "Sub 1", price: 5000, rating: "★★★★★", img: "/img1.jpg" },
    { id: 2, name: "Product 2", category: "Category 2", sousCategory: "Sub 2", price: 3000, rating: "★★★★", img: "/img2.jpg" },
    // Ajoutez plus de produits ici...
  ]);

  const ratingToValue = (rating) => {
    switch (rating) {
      case '★★★★★': return 5;
      case '★★★★': return 4;
      case '★★★': return 3;
      default: return 0;
    }
  };

  const handleFilterChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        selectedCategories: checked
          ? [...prevFilters.selectedCategories, value]
          : prevFilters.selectedCategories.filter((category) => category !== value),
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filters.selectedCategories.length === 0 || 
      filters.selectedCategories.includes(product.category) || 
      filters.selectedCategories.includes(product.sousCategory);
    const matchesPrice = product.price <= filters.maxPrice;
    const matchesRating = filters.selectedRating === '' || ratingToValue(product.rating) >= ratingToValue(filters.selectedRating);
    const matchesSearch = product.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesRating && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Shop</h1>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search products..." 
            name="searchQuery"
            value={filters.searchQuery}
            onChange={handleFilterChange}
          />
        </div>
      </header>

      <main className={styles.main}>
        <aside className={styles.filters}>
          <h3>Filter by category</h3>
          <ul>
            <li>
              <input 
                type="checkbox" 
                value="Category 1" 
                onChange={handleFilterChange} 
              /> Category 1
            </li>
            <li>
              <input 
                type="checkbox" 
                value="Category 2" 
                onChange={handleFilterChange} 
              /> Category 2
            </li>
          </ul>

          <h3>Max Price</h3>
          <input 
            type="range" 
            name="maxPrice" 
            min="0" 
            max="10000" 
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
          <span>Max: {filters.maxPrice} FCFA</span>

          <h3>Rating</h3>
          <input 
            type="radio" 
            name="selectedRating" 
            value="★★★★★"
            onChange={handleFilterChange}
          /> ★★★★★<br />
          <input 
            type="radio" 
            name="selectedRating" 
            value="★★★★"
            onChange={handleFilterChange}
          /> ★★★★<br />
          <input 
            type="radio" 
            name="selectedRating" 
            value=""
            onChange={handleFilterChange}
          /> Any Rating
        </aside>

        <section className={styles.productZone}>
          <h2>Products</h2>
          <div className={styles.productList}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.img} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.category} - {product.sousCategory}</p>
                <p className={styles.price}>{product.price} FCFA</p>
                <p className={styles.rating}>{product.rating}</p>
                <button 
                  className={styles.addToCart} 
                  onClick={() => window.location.href = `/single?id=${product.id}`}
                >
                  View Product
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Prod;
