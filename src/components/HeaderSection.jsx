import { SocialsButton } from "./SocialsButton";

export function HeaderSection () {
  return (
    <header className="flex flex-col md:flex-row items-center gap-8">
      <img className="w-36 h-36 rounded-full object-contain bg-white shadow-2xl shadow-zinc-600 dark:shadow-gray-900" src="https://i.pinimg.com/564x/ec/97/1a/ec971a06ff83ed82e0a8e3b48d17d75c.jpg" />
      <div>
        <h1 className="text-2xl md:text-5xl font-bold">Axel Urizar</h1>
        <p className='text-sm md:text-md mb-3'>Soy un apasionado desarrollador web fullstack con especial gusto por el frontend.</p>
        <div className='flex gap-2 items-center'>
          <a href='./assets/CV_AxelUrizarMartin.pdf' target='_blank' className="bg-blue-400 hover:bg-blue-500 transition text-zinc-100 py-2 px-3 font-bold rounded-md">📄 Currículum</a>
          <SocialsButton
            link={"https://github.com/AxelUrizar"}
            icon={"./assets/githubIcon.png"}
            name={"Github"} 
            showName={false}
          />
          <SocialsButton 
            link={"https://www.linkedin.com/in/axelurizar/"}
            icon={"./assets/linkedinIcon.png"}
            name={"LinkedIn"}
            showName={false}
          />
        </div>
      </div>
    </header>
  )
}
