import Carousel from "@/components/Carousel";
import "styles/pages/_intro.scss";

const slides = [
  {
    name: "babadog",
    imgPath: "/images/intro/brands/babadog.svg",
  },
  {
    name: "gs",
    imgPath: "/images/intro/brands/gs.svg",
  },
  {
    name: "icandy",
    imgPath: "/images/intro/brands/icandy.svg",
  },
  {
    name: "jamestown",
    imgPath: "/images/intro/brands/jamestown.svg",
  },
  {
    name: "kik",
    imgPath: "/images/intro/brands/kik.svg",
  },
  {
    name: "opex-press",
    imgPath: "/images/intro/brands/opex-press.svg",
  },
  {
    name: "siacoin",
    imgPath: "/images/intro/brands/siacoin.svg",
  },
  {
    name: "teledeporte",
    imgPath: "/images/intro/brands/teledeporte.svg",
  },
  {
    name: "vip",
    imgPath: "/images/intro/brands/vip.svg",
  },
  {
    name: "volvo",
    imgPath: "/images/intro/brands/volvo.svg",
  },
];

export type Slide = {
  name: string;
  imgPath?: string;
  review?: string;
};

export default function Intro() {
  return (
    <div className="intro">
      <article className="intro__persuade">
        <section className="intro__persuade__title">
          <div>You do the shopping.</div>
          <div>We do the returning.</div>
        </section>

        <figure className="intro__persuade__image">
          <img alt="shoes, bags, furniture" src="/images/intro/abstract.png" />
          <img
            alt="woman shopping on her phone"
            src="/images/intro/shopping.png"
          />
        </figure>
      </article>

      <article className="intro__return">
        <div>We return all your online purchases from any retailer</div>

        <Carousel className="intro__brands" slides={slides} type="image" />

        <div className="intro__return__highlight">
          We process returns from 5000+ retailers
        </div>

        <div>Amazon, Shein, Target, Zara, H&M, Nordstrom and more</div>
      </article>

      <article className="intro__money">
        <h1 className="intro__money__main">WHY USE RETURNQUEEN?</h1>
        <h2 className="intro__money__title">
          Its the stress-free way to get your money back
        </h2>

        <section className="intro__money__blocks">
          <div className="intro__money__block">
            <div className="intro__money__image">
              <img alt="box" src="/images/intro/nomore/package.png" />
            </div>
            <div className="intro__money__title">
              <h3>No more packaging and printing</h3>
            </div>
            <div className="intro__money__text">
              <p>Your time is too precious. You can leave that up to us.</p>
            </div>
          </div>
          <div className="intro__money__block">
            <div className="intro__money__image">
              <img alt="mailbox" src="/images/intro/nomore/post.png" />
            </div>
            <div className="intro__money__title">
              <h3>No more post office trips</h3>
            </div>
            <div className="intro__money__text">
              <p>Its a nightmare! Every. Single. Time.</p>
            </div>
          </div>
          <div className="intro__money__block">
            <div className="intro__money__image">
              <img alt="coins" src="/images/intro/nomore/refunds.png" />
            </div>
            <div className="intro__money__title">
              <h3>No more missed refunds</h3>
            </div>
            <div className="intro__money__text">
              <p>Get your money back in time - every time.</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
