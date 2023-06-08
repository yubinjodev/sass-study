import Carousel from "@/components/Carousel";
import "../../styles/pages/_testimonials.scss";

const slides = [
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
  },
  {
    name: "App Store Review",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa sapien, maximus eget luctus non, blandit ultricies ipsum. ",
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
