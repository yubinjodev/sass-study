import "../../../styles/pages/_instruction.scss";

export default function Instruction() {
  return (
    <section className="instruction">
      <div className="instruction__main">HOW IT WORKS</div>

      <div className="instruction__title">
        Returning the new way is as easy as sounds
      </div>

      <div className="instruction__blocks">
        <div className="instruction__block">
          <div className="instruction__block__image">
            <img alt="" src="/images/instruction/return.png" />
          </div>
          <div className="instruction__block__title">
            Choose your items to return
          </div>
          <div className="instruction__block__text">
            Our app helps you find your shipping labels.
          </div>
        </div>
        <div className="instruction__block">
          <div className="instruction__block__image">
            <img alt="" src="/images/instruction/schedule.png" />
          </div>
          <div className="instruction__block__title">Schedule your pickup</div>
          <div className="instruction__block__text">
            Let us know where and when to pick up your returns.
          </div>
        </div>
        <div className="instruction__block">
          <div className="instruction__block__image">
            <img alt="" src="/images/instruction/leave.png" />
          </div>
          <div className="instruction__block__title">Leave the rest to us</div>
          <div className="instruction__block__text">
            Sit back and watch the funds roll in.
          </div>
        </div>
      </div>
    </section>
  );
}
