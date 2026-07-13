import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Anna K.",
      rating: 5,
      text: "Great quality products and fast shipping. Will definitely order again!",
    },
    {
      id: 2,
      name: "Mateusz W.",
      rating: 4,
      text: "Good prices and easy checkout process. Customer support was helpful too.",
    },
    {
      id: 3,
      name: "Sofia B.",
      rating: 5,
      text: "Exactly what I was looking for. The laptop arrived well packaged and works perfectly.",
    },
  ];

  return (
    <section id="reviews" className="reviews">
      <h3>Customer Reviews</h3>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p className="review-stars">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
            <p className="review-text">"{review.text}"</p>
            <p className="review-name">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;