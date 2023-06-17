import Carousel from "@/components/Carousel";
import "../../../styles/pages/_testimonials.scss";

const slides = [
  {
    name: "App Store Review",
    review:
      "Genius App!! So excited to have all my online returns taken care of so efficiently. I used to have boxes of returns lying around for days.",
  },
  {
    name: "App Store Review",
    review:
      "In addition to this life-changing innovation, everyone on the RQ team is super-friendly and a pleasure to work with. I can't recommend ReturnQueen highly enough, and can’t imagine life without it!",
  },
  {
    name: "App Store Review",
    review:
      "A friend recently told me about this app and it is a game changer for me! I was skeptical at first, but figured I’d give it a try. WOW WAS I AMAZED. The app is easy to use and hassle free. For all my fellow online shoppers- this app is for you!",
  },
  {
    name: "App Store Review",
    review:
      "Such an amazing service, with an incredibly easy to use app! I love how intuitive it is. So far, I love the app.",
  },
  {
    name: "App Store Review",
    review:
      "This app is so easy to use! It’s designed so well that I was able to seamlessly complete my returns. No packaging, taping, processing, printing.... all the things I hate to do!!!! So excited about this app. I highly recommend!!!",
  },
  {
    name: "App Store Review",
    review:
      "This service is so awesome! The app is super easy to use and makes returning just about anything a breeze. Worth every penny and one of my favorite things.",
  },
  {
    name: "App Store Review",
    review:
      "Such an amazing service, with an incredibly easy to use app! I love how intuitive it is. So far, I love the app.",
  },
  {
    name: "App Store Review",
    review:
      "In addition to this life-changing innovation, everyone on the RQ team is super-friendly and a pleasure to work with. I can't recommend ReturnQueen highly enough, and can’t imagine life without it!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonals">
      <div className="testimonals__title">HEAR FROM OUR USERS</div>
      <div className="testimonals__quote">
        A total online shopping game changer
      </div>

      <Carousel className="testimonials__carousel" slides={slides} type="text" />
    </section>
  );
}
