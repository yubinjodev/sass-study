import "styles/pages/_ad.scss";

export default function Ad() {
  return (
    <article className="ad">
      <hr />
      <section className="ad__block">
        <h1 className="ad__block__title">
          ReturnQueen makes online returns a breeze
        </h1>
        <h2 className="ad__block__text">
          Say goodbye to sorting, taping, boxing, label printing, and endless
          post office trips.
        </h2>
      </section>
      <hr />
    </article>
  );
}
