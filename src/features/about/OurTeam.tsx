import "styles/pages/_ourteam.scss";
import "styles/components/_buttons.scss";

import Profile, { ProfielProps } from "@/components/Profile";

const ProfileData: ProfielProps[] = [
  {
    name: "Michael Katz",
    position: ["Founder", "Chairman"],
    imgPath: "/images/about/members/michael.png",
  },
  {
    name: "Dasya Katz",
    position: ["Founder", "CEO"],
    imgPath: "/images/about/members/dasya.png",
  },
  {
    name: "Daphna Englard",
    position: ["Founder", "CEO"],
    imgPath: "/images/about/members/daphna.png",
  },
  {
    name: "Manu Ajith",
    position: "CTO",
    imgPath: "/images/about/members/manu.png",
  },
  {
    name: "Andrew Walter",
    position: "Operations Manager",
    imgPath: "/images/about/members/andrew.png",
  },
  {
    name: "Sarah R",
    position: "Product Manager",
    imgPath: "/images/about/members/sarah.png",
  },
  {
    name: "Kathleen Brenner",
    position: "VP of Support",
    imgPath: "/images/about/members/kathleen.png",
  },
  {
    name: "Ambria Destout",
    position: "Social Media Manager",
    imgPath: "/images/about/members/ambria.png",
  },
];

export default function OurTeam() {
  return (
    <article className="ourteam">
      <h1 className="ourteam__title titlebutton">OUR TEAM</h1>
      <h2 className="ourteam__subtitle">Some of our key members</h2>

      <div className="ourteam__profile">
        {ProfileData.map(({ name, position, imgPath }, idx) => (
          <Profile
            key={idx}
            name={name}
            position={position}
            imgPath={imgPath}
          />
        ))}
      </div>
    </article>
  );
}
