import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
	  <div className="flex flex-col items-center justify-center mb-5 lg:mb-0">
	  <div className="self-start">
		<p className="mb-[2.5rem] text-[1.1rem] font-bold self-start text-secondary">
		  Featured Projects
		</p>
	  </div>
      <div className="grid max-w-[43.75rem] grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2">
        <ProjectCard
          title="Portfolio"
          desc="This website"
          color="#3178C6"
          lang="TypeScript"
          url="https://github.com/Adrephos/portfolio"
        />
        <ProjectCard
          title="shux-api"
          desc="REST API for ShuxTeam Discord Bot"
          color="#00ACD7"
          lang="Go"
          url="https://github.com/shuxbot/shux-api"        
		/>
        <ProjectCard
          title="Distropia/Nursena"
          desc="Gateway for Distropia"
          color="#00ACD7"
          lang="Go"
          url="https://github.com/phelferick/Nursena"
        />
        <ProjectCard
          title="Advent of code 2022"
          desc="Some solutions of AOC 2022 edition"
          color="#00ACD7"
          lang="Go"
          url="https://github.com/Adrephos/advent-of-code"
        />
      </div>
    </div>
  );
};
