import { SocialsButton } from "./SocialsButton";

export function RedesSociales () {
  return (
    <section id="socials" className='mb-8'>
      <h2 className='text-3xl font-bold mb-4'>Redes Sociales 📱</h2>
      <div className='flex gap-3'>
        <SocialsButton 
          link={"https://github.com/AxelUrizar"}
          icon={"./assets/githubIcon.png"}
          name={"Github"} 
        />
        <SocialsButton 
          link={"https://www.linkedin.com/in/axelurizar/"}
          icon={"./assets/linkedinIcon.png"}
          name={"LinkedIn"}
        />
      </div>
    </section>
  )
}
