import { SocialsButton } from "./SocialsButton";

export function HeaderSection () {
  return (
    <header className="flex items-center gap-8">
      <img className="w-36 h-36 rounded-full object-cover shadow-2xl shadow-zinc-600 dark:shadow-gray-900" src="https://imgs.search.brave.com/LLwzjZEFfi0vIRC1NBKIavvyes2g4Aw5CjK-GFQQNLE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTI2/ODEwMjk4L2VzL2Zv/dG8vbnVldmEteW9y/ay1jaXVkYWQtbWVu/dGUtZXN0YWRvLWNv/bmNlcHRvLWltYWdl/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b1ZnamlVT19m/Sjd5cVR0ZDZZTjVt/RGo4QzVwVURZUHIy/T21ReUQyY185TT0" />
      <div>
        <h1 className="text-5xl font-bold">Axel Urizar</h1>
        <p className='mb-3'>Soy un apasionado desarrollador web fullstack con especial gusto por el frontend.</p>
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
