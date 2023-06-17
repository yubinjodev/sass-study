import "../../../styles/pages/_about.scss";

export default function About() {
  return <section className="about">
    <div className="about__top">
        <div className="about__top__left">
            <img alt="" src="/images/about/founders.png"/>
        </div>
        <div className="about__top__right">
            <h1 className="about__top__title">It all started with...</h1>
            <div className="about__topright__container">
                <div className="about__topright__box">
                    <p className="about__topright__number">2</p>
                    <p>Moms</p>
                </div>
                <div className="about__topright__box">
                    <p className="about__topright__number">12</p>
                    <p>Collective Kids</p>
                </div>
                <div className="about__topright__box">
                    <p className="about__topright__number">Endless</p>    
                    <p>Items to return</p>
                </div>
            </div>
        </div>
    </div>

    <div className="about__bottom">
        <div className="about__bottom_left">
            <p>Between hectic schedules and conflicting priorities, moms Daphna and Dasya struggled to meet their return deadlines. One thing had become clear: Returns needed an upgrade. They thought: Wouldn’t it be nice if you could tap a button to make all the boxes disappear—and watch the refunds roll in?</p>
            <p>Many, many, MANY iced espressos with almond milk later, ReturnQueen was born with a specific mission:</p>
            <p className="about__bottom__title">provide fast, easy, stress-free returns for all.</p>
        </div>
        <div className="about__bottom_right">
            <p>Because let’s be honest.</p>
            <p>We all could afford to save some time and money. Whether you’re a parent in desperate need of more free time, busy with back-to-back meetings, or somebody who just prefers to order two sizes and three colors of the same style, you deserve to spend your time doing the things you love.</p>
            <p>So leave the returns to us!</p>
        </div>
    </div>
  </section>;
}
