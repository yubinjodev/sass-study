import Carousel from "@/components/Carousel";
import "../../styles/pages/_intro.scss";

const slides=[
  {
    name:"babadog",
    imgPath:"/images/intro/brands/babadog.svg"
  },
  {
    name:"gs",
    imgPath:"/images/intro/brands/gs.svg"
  },
  {
    name:"icandy",
    imgPath:"/images/intro/brands/icandy.svg"
  },
  {
    name:"jamestown",
    imgPath:"/images/intro/brands/jamestown.svg"
  },
  {
    name:"kik",
    imgPath:"/images/intro/brands/kik.svg"
  },
  {
    name:"opex-press",
    imgPath:"/images/intro/brands/opex-press.svg"
  },
  {
    name:"siacoin",
    imgPath:"/images/intro/brands/siacoin.svg"
  },
  {
    name:"teledeporte",
    imgPath:"/images/intro/brands/teledeporte.svg"
  },
  {
    name:"vip",
    imgPath:"/images/intro/brands/vip.svg"
  },
  {
    name:"volvo",
    imgPath:"/images/intro/brands/volvo.svg"
  },
]

export type Slide={
  name:string;
  imgPath?:string;
  review?:string;
}

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

        <Carousel className="intro__brands" slides={slides} type="image"/>

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
            <div className="intro__money__image">
              <img alt="" src="/images/intro/nomore/package.png" />
            </div>
            <div className="intro__money__title">
              <h3>No more</h3>
              <p>packaging and printing</p>
            </div>
            <div className="intro__money__text">
              <p>Your time is too precious. You can leave that up to us.</p>
            </div>
          </div>
          <div className="intro__money__block">
            <div className="intro__money__image">
              <img alt="" src="/images/intro/nomore/post.png" />
            </div>
            <div className="intro__money__title">
              <h3>No more</h3>
              <p>post office trips</p>
            </div>
            <div className="intro__money__text">
              <p>Its a nightmare! Every. Single. Time.</p>
            </div>
          </div>
          <div className="intro__money__block">
            <div className="intro__money__image">
              <img alt="" src="/images/intro/nomore/refunds.png" />
            </div>
            <div className="intro__money__title">
              <h3>No more</h3>
              <p>missed refunds</p>
            </div>
            <div className="intro__money__text">
              <p>Get your money back in time - every time.</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
