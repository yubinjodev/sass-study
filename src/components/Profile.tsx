import "styles/components/_profile.scss";

type Position =
  | "Founder"
  | "Chairman"
  | "CEO"
  | "CTO"
  | "Operations Manager"
  | "Product Manager"
  | "VP of Support"
  | "Social Media Manager";

export type ProfielProps = {
  name: string;
  position: Position | Position[];
  imgPath: string;
};

export default function Profile(props: ProfielProps) {
  const { name, position, imgPath } = props;

  return (
    <section className="profile">
      <img alt="" src={imgPath} />
      <h3 className="profile__name">{name}</h3>

      {typeof position === "string" && (
        <p className="profile__position">{position}</p>
      )}

      {typeof position !== "string" && (
        <p className="profile__position">
          {position[0]} and {position[1]}
        </p>
      )}
    </section>
  );
}
