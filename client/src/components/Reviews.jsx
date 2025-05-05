import React from "react";
// import "./Reviews.css"; // optional if you want to keep styles separate

const reviews = [
  {
    name: "Jane D.",
    platform: "Google",
    content: "The cupcakes were unreal. I cried.",
    stars: 5,
  },
  {
    name: "Tom R.",
    platform: "Yelp",
    content: "Best bakery in town. Period.",
    stars: 5,
  },
  {
    name: "Amira S.",
    platform: "Google",
    content: "Such a cute vibe and the macarons are perfect every time!",
    stars: 5,
  },
];

function Reviews() {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-stars">{"⭐".repeat(review.stars)}</p>
            <p className="review-content">“{review.content}”</p>
            <p className="review-author">— {review.name}, via {review.platform}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;