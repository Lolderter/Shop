import { useState } from "react";
import "./Hero.css";

function Hero({ headline, description }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  function handleClick() {
    alert("Added to cart");
  }

  const products = [
    {
      id: 1,
      name: "Laptop",
      brand: "Dell",
      category: "Electronics",
      price: "800$",
      count:1
    },
    {
      id: 2,
      name: "Phone",
      brand: "Samsung",
      category: "Electronics",
      price: "250$",
      count:1
    },
    {
      id: 4,
      name: "iPad",
      brand: "Apple",
      category: "Electronics",
      price: "500$",
      count:0
    },
    {
      id: 5,
      name: "Laptop",
      brand: "Lenovo",
      category: "Electronics",
      price: "1000$",
      count:1
    },
    {
      id: 6,
      name: "Microphone",
      brand: "Blue Yeti",
      category: "Accessories",
      price: "200$",
      count:1
    },
    {
      id: 7,
      name: "Headphones",
      brand: "Sony",
      category: "Accessories",
      price: "300$",
      count:1
    },
  ];

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
   

  return (
    <div className="hero">
      <h1 className="hero-headline">{headline}</h1>
      <p className="hero-description">{description}</p>

      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="search-input"
        />
        <button className="search-button">
          Search
        </button>
      </div>

      <div className="category-bar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div
               key={product.id} className={`product-card ${product.count === 0 ? "out-of-stock" : ""}`}>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-category"> Count:{product.count}</p>
            <p className="product-price">{product.price}</p>
            
            <p className="product-price">
              <button disabled={product.count === 0} onClick={handleClick}>
                {product.count === 0 ? "Out of Stock" : "Buy Now"}
              </button>
            </p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;