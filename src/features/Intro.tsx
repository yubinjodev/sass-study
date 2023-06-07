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
        <div className="intro__money__main">WHY USE RETURNQUEEN?</div>
        <h1 className="intro__money__title">
          Its the stress-free way to get your money back
        </h1>

        <div className="intro__money__blocks">
          <div className="intro__money__block">
            <div className="intro__money__block__image">
              <img alt="" src="/images/intro/nomore/package.png" />
            </div>
            <div className="intro__money__block__title">
              <h6>No more</h6>
              <p>packaging and printing</p>
            </div>
            <div className="intro__money__block__text">
              <p>Your time is too precious. Leave that up to us.</p>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
