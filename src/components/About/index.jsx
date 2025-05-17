import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";
const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am{" "}
            <span className="color__primary">Chathrapathi Nulupuri 👋</span>
          </h1>
          <p className="text__muted description">
            I'm a full-stack developer who gets genuinely excited about building
            things that make a positive impact for users. Beyond the code – and
            I do love coding with React, HTML, CSS on the front-end and Java,
            Spring Boot, and MySQL on the back-end – I really value being part
            of a strong team. For me, that means keeping the lines of
            communication open, sharing what I know, and truly listening to
            different perspectives. I'm all about rolling up my sleeves, working
            together, and making sure we build something great, together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About