import { ProjectCard } from "./ProjectCard";

export const Projects = ({statusColor} : { statusColor: string | undefined }) => {
  return (
	  <div className="flex flex-col items-center justify-center mb-5 lg:mb-0">
	  <div className="self-start">
		<p className="mb-[2.5rem] text-[1.1rem] font-bold self-start text-secondary">
		  Featured Projects
		</p>
	  </div>
      <div className="grid max-w-[43.75rem] grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2">
        <ProjectCard
          title="Optika"
          desc="Home security system"
          color="#ffe873"
          lang="Python"
          url="https://github.com/DanielPalacios05/OptikaProject"
					statusColor={statusColor}
        />
        <ProjectCard
          title="shux-api"
          desc="REST API for ShuxTeam Discord Bot"
          color="#00ACD7"
          lang="Go"
          url="https://github.com/shuxbot/shux-api"        
					statusColor={statusColor}
		/>
        <ProjectCard
          title="Syntax analysis"
          desc="Top-down and bottom-up parsers"
          color="#00ACD7"
          lang="Go"
          url="https://github.com/Adrephos/syntax-analysis"
					statusColor={statusColor}
        />
        <ProjectCard
          title="TelePong"
          desc="Oline Pong game with multiplayer"
          color="#3949a9"
          lang="C"
          url="https://github.com/Adrephos/TelePong"
					statusColor={statusColor}
        />
      </div>
    </div>
  );
};
