import Carousel from "@/components/Carousel";
import "../../styles/pages/_intro.scss";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__persuade">
        <div className="intro__persuade__title">
          <div>You do the shopping.</div>
          <div>We do the returning.</div>
        </div>

        <div className="intro__persuade__image">
          <img alt="" src="/images/intro/abstract.png" />
          <img alt="" src="/images/intro/shopping.png" />
        </div>
      </div>

      <div className="intro__return">
        <div>We return all your online purchases from any retailer</div>

        <Carousel />

        <div className="intro__return__highlight">
          We process returns from 5000+ retailers
        </div>
        <div>Amazon, Shein, Target, Zara, H&M, Nordstrom and more</div>
      </div>

      <div className="intro__money">
        <div>WHY USE RETURNQUEEN</div>
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
