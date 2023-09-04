import "styles/pages/_instruction.scss";

export default function Instruction() {
  return (
    <article className="instruction">
      <h1 className="instruction__main">HOW IT WORKS</h1>

      <h2 className="instruction__title">
        Returning the new way is as easy as sounds
      </h2>

      <section className="instruction__blocks">
        <div className="instruction__block">
          <div className="instruction__block__image">
            <img alt="" src="/images/instruction/return.png" />
          </div>
          <h3 className="instruction__block__title">
            Choose your items to return
          </h3>
          <div className="instruction__block__text">
            Our app helps you find your shipping labels.
          </div>
        </div>
        <div className="instruction__block">
          <div className="instruction__block__image">
            <img alt="" src="/images/instruction/schedule.png" />
          </div>
          <h3 className="instruction__block__title">Schedule your pickup</h3>
          <div className="instruction__block__text">
            Let us know where and when to pick up your returns.
          </div>
        </div>
        <div className="instruction__block">
          <div className="instruction__block__image">
            <img alt="" src="/images/instruction/leave.png" />
          </div>
          <h3 className="instruction__block__title">Leave the rest to us</h3>
          <div className="instruction__block__text">
            Sit back and watch the funds roll in.
          </div>
        </div>
      </section>
    </article>
  );
}
