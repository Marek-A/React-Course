import "../components/css/MyHomepage.css"
import "../components/css/Styler.css"
import Spline from '@splinetool/react-spline';


function MyHomepage({ r1 }) {
    return (
        <div ref={r1} className="myhomepage">
            <br />
            <br />
            <p className="my-name">
                Marek Angelštok
            </p>
            <p className="welcome-message">
                junior front-end developer based in Estonia
            </p>
            <p className="introduction">

            </p>
            <Spline scene="x" />
        </div>
    )
}

export default MyHomepage
