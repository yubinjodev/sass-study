import "./intro.scss";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__persuade">
        <div>
          <h1>You do the shopping.</h1>
          <h1>We do the returning.</h1>
        </div>

        <div>images</div>
      </div>

      <div className="intro__return">
        <div>We return all your online purchases from any retailer</div>

        <div>carousel</div>

        <div>
          <h3>We process returns from 5000+ retailers</h3>
          <h3>Amazon, Shein, Target, Zara, H&M, Nordstrom and more</h3>
        </div>

        <div>WHY USE RETURNQUEEN</div>
      </div>

      <div className="intro__money">
        <div>
          <h1>It`s the stress-free way to get your money back</h1>
        </div>

        <div>
          <div>No more</div>
          <div>No more</div>
          <div>No more</div>
        </div>
      </div>
    </section>
  );
}
