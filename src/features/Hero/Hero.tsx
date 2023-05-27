import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Returns picked up from your doorstep</h1>

      <div className="hero__subtitle">
        <h3>No more packaging</h3>
        <h3>No more printing</h3>
        <h3>No more driving</h3>
      </div>

      <div className="hero__zipcode">
        <input placeholder="Enter your zip code"/>
      </div>

      <div className="hero__download">
        <button>Download on the App Store</button>
        <button>Get it on Google Play</button>
      </div>

      <div className="hero__producthunt">
        <button>#3 Product of the Day</button>
      </div>
    </section>
  );
}
