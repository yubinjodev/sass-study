import DownloadButton from "@/components/DownloadButton"
import "../../styles/pages/_download.scss"

export default function Download() {
    return(<section className="download">
        <div className="download__background">

        <div className="download__block">
            <div className="download__block__image">
                <img alt="" src="/images/download/phone.png" />
            </div>
            <div className="download__block__text">
                <h1>Download the ReturnQueen App</h1>
                <p>Returns just got a whole lot easier.</p>
                <p>Experience our game-changing service today.</p>

                <div className="download__block__divider">
                    <div></div>
                    <div>Join our growing family of members who have found a better way to return.</div>
                </div>

                <div className="download__block__buttons">
                    <DownloadButton icon="apple" text="Download on the App Store"/>
                    <DownloadButton icon="play" text="Get it on Google Play"/>
                </div>
            </div>
        </div>
        </div>
    </section>)
}