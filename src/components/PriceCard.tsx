import "styles/components/_pricecard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export type PriceCardProps = {
  price: number;
  per: string;
  included: string | string[];
  excluded: string | string[];
  freetrial: boolean;
};

export default function PriceCard(props: PriceCardProps) {
  const { price, per, included, excluded } = props;

  return (
    <div className="pricecard">
      {price === 99 && (
        <div className="pricecard__star">
          <img alt="" src="/images/pricing/star.png" />
        </div>
      )}
      <h4 className="pricecard__title">${price}</h4>
      <div className="pricecard__subtitle">per {per}</div>

      <hr className="pricecard__divider" />

      {typeof included !== "string" &&
        included.map((benefit, idx) => (
          <ul className="pricecard__list" key={idx}>
            <li className="pricecard__list__item">
              <span>
                <FontAwesomeIcon icon={faCheck} className="icon" />
              </span>
              {benefit}
            </li>
          </ul>
        ))}

      {typeof included === "string" && (
        <ul className="pricecard__list">
          <li className="pricecard__list__item">
            <span>
              <FontAwesomeIcon icon={faCheck} className="icon" />
            </span>
            {included}
          </li>
        </ul>
      )}

      {typeof excluded !== "string" &&
        excluded.map((benefit, idx) => (
          <ul className="pricecard__list" key={idx}>
            <li className="pricecard__list__item excluded">
              <span>
                <FontAwesomeIcon icon={faX} className="icon na" />
              </span>
              {benefit}
            </li>
          </ul>
        ))}

      {typeof excluded === "string" && (
        <ul className="pricecard__list">
          <li className="pricecard__list__item excluded">
            <span>
              <FontAwesomeIcon icon={faX} className="icon na" />
            </span>
            {excluded}
          </li>
        </ul>
      )}
    </div>
  );
}
