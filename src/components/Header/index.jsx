import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import Facts from "../../ui/Facts";
import SocialHandle from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `
code developer={
      firstName: "Chathrapathi";
      lastName: "Nulupuri";
      aka: "Mr Chathra"
      hobby:repeat = () =>{
        //eat();
        //sleep();
        //Code();
        //Play();
        //Repeat();
      }
}`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile1} className="profile__photo" alt="" />
          </div>
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              You know that feeling when something just works smoothly online?
              That's what gets them excited. They're the kind of developer who
              dives into all the layers of a project from making things look
              good with React to building the behind-the-scenes magic with Java
              and Spring Boot to make those experiences happen. They're not
              just about writing code; they're about creating stuff that
              actually makes a difference for people, turning those "it would be
              cool if..." ideas into real, working things...
            </p>
            <Facts />
            <SocialHandle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
