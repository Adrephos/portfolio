import { TechStack } from "./TechStack";

export const About = () => {
  return (
    <div className="text-secondary items-center">
      <p>
        J.Esteban, 19 years old. &ensp;&ensp;&ensp;
        <span className="text-[0.75rem] font-bold">Español & English</span>
        <br />
        Computer Science student and back-end developer
        <br />
        <br />
		  Experience using Linux and High performance Computing
		  <br/> I enjoy videogames and music as well as coding and learning
      </p>
      <br />
      <p>Technologies I commonly use:</p>
      <br />
      <TechStack />
      <br />
    </div>
  );
};
