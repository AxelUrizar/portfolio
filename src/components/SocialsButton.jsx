export const SocialsButton = ({ link, icon, name, showName = true }) => {
  return (
    <a href={link} target="_blank">
      <button className="flex gap-2 font-bold text-black bg-zinc-200 invert dark:invert-0 hover:invert-0 dark:hover:invert hover:outline hover:outline-1 hover:outline-black py-2 px-3 rounded-lg transition">
        <img className="w-6 h-6" src={icon} alt="social-icon" />
        {showName && name}
      </button>
    </a>
  )
}
