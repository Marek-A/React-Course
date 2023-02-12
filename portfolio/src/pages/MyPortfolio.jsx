import "../components/css/MyPortfolio.css"
import "../components/css/Styler.css"
import website1 from "../assets/img/dummy.png"
import website2 from "../assets/img/jupiter.jpeg"
import website3 from "../assets/img/mars.jpg"

function MyPortfolio({ r1 }) {
    const handleClick = () => {
        window.location.assign("https://milygear.web.app/");
    };

    return (
        <div ref={r1} className="myportfolio">
            <br />
            <br />
            <h3>MY PORTFOLIO</h3>
            <div className="portfolio-grid">
                <div className="portfolio-item">
                    <img onClick={handleClick} src={website1} alt="Website 1 Thumbnail" />
                    <div className="portfolio-item-info">
                        <h4>Webshop</h4>
                        <p>Military & hiking gear online store - built for coding project purposes</p>
                    </div>
                </div>
                <div className="portfolio-item">
                    <img src={website2} alt="Website 2 Thumbnail" />
                    <div className="portfolio-item-info">
                        <h4>Website 2</h4>
                        <p>Description of Website 2</p>
                    </div>
                </div>
                <div className="portfolio-item">
                    <img src={website3} alt="Website 3 Thumbnail" />
                    <div className="portfolio-item-info">
                        <h4>Website 3</h4>
                        <p>Description of Website xx2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio