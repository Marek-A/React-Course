import "../components/css/MyAbout.css"
import "../components/css/Styler.css"
import profilePicture from "../assets/img/profile.png"

import { useTranslation } from "react-i18next";

function MyAbout({ r1 }) {

  const { t } = useTranslation();


  return (
    <div ref={r1} className="myabout">
      <br />
      <br />
      <h3>{t("ABOUT ME")}</h3>
      <div className="about-section">
        <img src={profilePicture} alt="My face" />
        <div className="about-text">
          <h4>Me, myself, I & coding </h4>
          <p>
            As a junior web developer focused on React, I bring drive and passion to every project. I am committed to staying current with the latest web development advancements and delivering high-quality, user-friendly experiences. I am eager to showcase my abilities and am always looking for opportunities to bring my skills and energy to a team. Thank you for considering my profile.
          </p>
          <p>I am a junior front-end developer with less than 1 year of experience in HTML, CSS, JavaScript, and React. I have a deep understanding of technology and am motivated to continue learning and expanding my skills. My experience in React demonstrates my ability to create dynamic user interfaces and provide a seamless user experience. I have a keen eye for detail and a commitment to producing high-quality work.
            My hobbies, including hiking, DIY building, photography, and archery, also help me to develop important skills such as persistence, problem-solving, and attention to detail. I am seeking an entry-level developer position, preferably in an office setting, where I can continue to grow and make a real impact.
            Overall, I am a talented and driven junior developer with a strong foundation in technical skills and the ability to transfer skills developed through my hobbies to my work.</p>
        </div>
      </div>

    </div>
  )
}

export default MyAbout
