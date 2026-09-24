const reviews = [
  {
    name: "Client Name",
    role: "Startup Founder",
    text: "Prince delivered a clean and professional website with great attention to detail."
  },
  {
    name: "Client Name",
    role: "Business Owner",
    text: "Very responsive and easy to work with. The website performs really well."
  },
  {
    name: "Client Name",
    role: "Founder",
    text: "Great communication and a modern final product."
  }
];

export default function Reviews() {
  return (
    <section className="section">

      <div className="section-heading">
        <p>CLIENT FEEDBACK</p>

        <h2>
          What clients say
        </h2>
      </div>

      <div className="reviews-grid">

        {reviews.map((review) => (

          <div className="review-card" key={review.name + review.role}>

            <div className="stars">
              ★★★★★
            </div>

            <p>
              {review.text}
            </p>

            <h4>
              {review.name}
            </h4>

            <span>
              {review.role}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}