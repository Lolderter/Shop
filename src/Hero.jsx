
import "./Hero.css";

function Hero({ headline, description }) {
  

  const products = [
    {
      id: 1,
      name: "Laptop",
      brand: "Dell",
      category: "Electronics",
      price: "800$"
    },
    {
      id: 2,
      name: "Phone",
      brand: "Samsung",
      category: "Electronics",
      price: "500$"
    },
    {
      id: 3,
      name: "Headphones",
      brand: "Sony",
      category: "Accessories",
      price: "100$"
    },
  ];

 

  return (
    <div className="hero">
      <h1 className="hero-headline">{headline}</h1>
      <p className="hero-description">{description}</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
        />
        <button  className="search-button">
          Search
        </button>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-price">
              <button>Buy Now</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;