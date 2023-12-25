import { LinkSVG } from "./LinkSVG"
import { SocialsButton } from "./SocialsButton"
import { githubIcon } from "../assets/customLinks"

export function ProjectCard ({ imgSrc, name, description, note, tecnologies, link, live }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer dark:hover:bg-gray-700 hover:bg-zinc-200 transition p-6 rounded-3xl">
      <img className="p-1 md:w-96 md:h-56 rounded-3xl shadow-xl drop-shadow-2xl border-solid border-2 border-gray-500 bg-gray-300" src={imgSrc} alt="project-image" />
      <div className="flex flex-col justify-between items-start gap-3">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p>{description}</p>
          {note && <p className="opacity-50">{note}</p>}
          <p className="font-bold">{tecnologies}</p>
        </div>
        <div className="flex gap-3 items-center self-end">
          {live && (
            <a target="_blank" href={live}>
              <div className="inline-flex gap-2 font-bold text-black bg-zinc-200 invert dark:invert-0 hover:invert-0 dark:hover:invert hover:outline hover:outline-1 hover:outline-black py-2 px-3 rounded-lg transition">
                <p>Live</p> 
                <LinkSVG />
              </div>
            </a>
          )}
          <SocialsButton 
            link={link}
            icon={githubIcon}
          />
        </div>
      </div>
    </div>
  )
}
