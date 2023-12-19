import { LinkSVG } from "./LinkSVG";

export function ProjectCard ({ imgSrc, name, description, note, tecnologies, link }) {
  return (
    <div className="flex gap-4">
      <img className="w-96 h-56 rounded-xl object-contain shadow-xl drop-shadow-2xl border-solid border-2 border-gray-500 bg-gray-300" src={imgSrc} alt="project-image" />
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{description}</p>
        <p className="opacity-50">{note}</p>
        <p>{tecnologies}</p>
        {link && (
          <a target="_blank" href={link}>
            <div className="inline-flex gap-2 font-bold text-black bg-zinc-200 invert dark:invert-0 hover:invert-0 dark:hover:invert hover:outline hover:outline-1 hover:outline-black py-2 px-3 mt-2 rounded-lg transition">
              <p>Live</p> 
              <LinkSVG />
            </div>
          </a>
        )}
      </div>
    </div>
  )
}
