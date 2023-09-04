import "styles/pages/_ad.scss";

export default function Ad() {
  return (
    <article className="ad">
      <hr />
      <section className="ad__block">
        <div className="ad__block__title">
          ReturnQueen makes online returns a breeze
        </div>
        <div className="ad__block__text">
          Say goodbye to sorting, taping, boxing, label printing, and endless
          post office trips.
        </div>
      </section>
      <hr />
    </article>
  );
}
