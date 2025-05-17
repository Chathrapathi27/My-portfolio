import { useState, useEffect } from "react"
import "odometer/themes/odometer-theme-default.css";
import "./Facts.css"
import Odometer from "react-odometerjs"

const Facts = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [boot, setBoot] = useState(0);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setExperience(1);
            setProjects(2);
            setBoot(3);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [])
  return (
    <div className="flex__center fact__container">
      {/* Experience */}
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={experience} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="lable">Years of Experience</p>
      </div>

      {/* Competed projcts */}
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={projects} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="lable">Completed projects</p>
      </div>

      {/* Events attended */}
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={boot} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="lable">Bootcamps Attended</p>
      </div>
    </div>
  );
}

export default Facts