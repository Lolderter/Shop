import { useState } from "react";
import "./Hero.css";
import products from "./Products";

function Hero({ headline, description, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="hero" id="Products">
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
        <button className="search-button">Search</button>
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

      <div className="product-list" id="products">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products found. Try a different search or category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`product-card ${product.count === 0 ? "out-of-stock" : ""}`}
            >
              <h3 className="product-name">{product.name}</h3>
              <p className="product-brand">Brand: {product.brand}</p>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-price">{product.price}</p>
              <p className="product-price">
                <button
                  disabled={product.count === 0}
                  onClick={() => addToCart(product)}
                >
                  {product.count === 0 ? "Out of Stock" : "Buy Now"}
                </button>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Hero;