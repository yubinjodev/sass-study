import "styles/components/_howitworks.scss"
import "styles/components/_buttons.scss"

type Layout = "type1" | "type2";

export type HowItWorkksProps = {
  stepNumber: number;
  title: string;
  description: string;
  imgPath: string;
  layout: Layout;
};

export default function HowItWorks(props: HowItWorkksProps) {
  const { stepNumber, title, description, imgPath, layout } = props;

  return (
    <div className={`howitworks__stepnumber${stepNumber}`}>
      <div
        className={
          layout === "type1" ? "howitworks__type1" : "howitworks__type2"
        }
      >
        <div className="howitworks__text">
          <div className="howitworks__text__step titlebutton">STEP {stepNumber}</div>
          <h3 className="howitworks__text__title">{title}</h3>
          <p className="howitworks__text__description">{description}</p>
        </div>

        <div className="howitworks__image">
          <img alt="" src={imgPath} />
        </div>
      </div>
    </div>
  );
}
