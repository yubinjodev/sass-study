import "styles/layout/_general.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

type Category = "News";

export type BlogArticleProps = {
  title: string;
  description: string;
  date: Date;
  duration: number;
  featured: boolean;
  category: Category;
  imgPath: string;
};

export default function BlogArticle(props: BlogArticleProps) {
  const { title, description, date, duration, featured, category, imgPath } =
    props;

  return (
    <article className="blogarticle flexrow componentspacing">
      <div className="blogarticle__image">
        
          <img alt="" src={imgPath} />
      </div>

      <div className="blogarticle__details">
        <div className="flexrowplain">
          <span className="blogarticle__category">{category}</span>
          <span>
            {featured && (
              <div className="blogarticle__featured flexrowplain">
                <FontAwesomeIcon icon={faFire} className="icon" />
                Featured
              </div>
            )}
          </span>
        </div>

        <h1 className="blogarticle__details__title">{title}</h1>
        <p className="blogarticle__details__description">{description}</p>

        <div className="flexrow">
          <div className="blogarticle__details__detail">
            {date.toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            - {duration} min read
          </div>
        </div>
      </div>
    </article>
  );
}
