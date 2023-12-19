import { ProjectCard } from "./ProjectCard";

export function Projectos () {
  return (
    <section className='mb-8'>
      <h2 className='text-3xl font-bold mb-4'>Proyectos ⭐</h2>
      <ProjectCard
        name={'AxelCraft 🧊'}
        description={'Copia del videojuego Minecraft en navegador usando React y ThreeJs.'}
        note={'(Probar preferentemente en Google Chrome)'}
        imgSrc={'https://www.freeiconspng.com/uploads/minecraft-icon-0.png'}
        tecnologies={'React, ThreeJs'}
        link={"https://axelurizar.github.io/AxelCraft/"}
      />
    </section>
  )
}
