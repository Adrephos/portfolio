import { TechStack } from "./TechStack";

export const About = ({ statusColor }: { statusColor: string | undefined }) => {
  const today = new Date();
  const ageMillis = today.getTime() - new Date('2003-12-19').getTime();
  const age = Math.floor(ageMillis / 31556952000);


  return (
    <div className="text-secondary items-center">
      <p>
        J.Esteban, {age} years old. &ensp;&ensp;&ensp;
        <span className="text-[0.75rem] font-bold">Español & English</span>
        <br />
        Computer Science student and back-end developer
        <br />
        <br />
        Experience using Linux and High performance Computing
        <br /> I enjoy videogames and music as well as coding and learning
      </p>
      <br />
      <p>Technologies I commonly use:</p>
      <br />
      <TechStack statusColor={statusColor} />
      <br />
    </div>
  );
};
