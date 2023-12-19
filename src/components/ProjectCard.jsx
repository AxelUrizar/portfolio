import { LinkSVG } from "./LinkSVG"
import { SocialsButton } from "./SocialsButton"
import { githubIcon } from "../assets/customLinks"

export function ProjectCard ({ imgSrc, name, description, note, tecnologies, link }) {
  return (
    <div className="flex gap-4 dark:hover:bg-gray-700 hover:bg-zinc-200 transition p-4 rounded-xl">
      <img className="w-44 h-44 p-3 md:w-96 md:h-56 rounded-xl object-contain shadow-xl drop-shadow-2xl border-solid border-2 border-gray-500 bg-gray-300" src={imgSrc} alt="project-image" />
      <div className="flex-grow flex flex-col justify-between items-start gap-3">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p>{description}</p>
          <p className="opacity-50">{note}</p>
          <p className="font-bold">{tecnologies}</p>
        </div>
        <div className="flex gap-3 items-center self-end">
          {link && (
            <a target="_blank" href={link}>
              <div className="inline-flex gap-2 font-bold text-black bg-zinc-200 invert dark:invert-0 hover:invert-0 dark:hover:invert hover:outline hover:outline-1 hover:outline-black py-2 px-3 rounded-lg transition">
                <p>Live</p> 
                <LinkSVG />
              </div>
            </a>
          )}
          <SocialsButton 
            link={"https://github.com/AxelUrizar/AxelCraft"}
            icon={githubIcon}
          />
        </div>
      </div>
    </div>
  )
}
