import "./ProjectCard.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-scroll";

const ProjectCard = ({title,category,image,description,stacks}) => {
  return (
    <div className="card project__card">
      <div className="project__card-top">
        <div className="picture">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="project__card-bottom">
        <div className="flex project__info">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div>
            <h3 className="flex title">{title}</h3>
            <div className="text__muted category">{category}</div>
          </div>
        </div>
        <p className="text__muted description">{description}</p>
        <div className="flex__center stacks">
          {stacks.map((stack, index) => (
            <div className="stack" key={index}>
              <img src={stack.logo} alt="" />
            </div>
          ))}
            <a className="flex__center icon" href="example.com" target="_blank" >
              <FaArrowUpRightFromSquare />
            </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard