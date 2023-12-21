import { ProjectCard } from "./ProjectCard";

export function Projectos () {
  return (
    <section className='mb-8'>
      <h2 className='text-3xl font-bold mb-4'>Proyectos ⭐</h2>
      <ul className="flex flex-col gap-3">
        <li>
          <ProjectCard
            name={'AxelCraft 🧊'}
            description={'Copia del videojuego Minecraft en navegador usando React y ThreeJs.'}
            note={'(Probar preferentemente en Google Chrome)'}
            imgSrc={'https://www.freeiconspng.com/uploads/minecraft-icon-0.png'}
            tecnologies={'Vite, React, ThreeJs'}
            link={"https://githu.com/AxelUrizar/AxelCraft"}
            live={"https://axelurizar.github.io/AxelCraft/"}
          />
        </li>
        <li>
          <ProjectCard  
            name={'Nvim Config 📝'}
            description={'Mi configuración personalizada de Nvim con plugins y atajos de teclado.'}
            note={'(Requiere Nvim instalado)'}
            imgSrc={'https://raw.githubusercontent.com/AxelUrizar/nvim-configuration/main/assets/oxocarbon.jpg'}
            tecnologies={'Nvim, Vimscript, Lua'}
            link={"https://github.com/AxelUrizar/nvim-configuration"}
          />
        </li>
        <li>
          <ProjectCard
            name={'Roll The Dice 🎲'}
            description={'Juego de dados en navegador con React.'}
            imgSrc={'https://raw.githubusercontent.com/AxelUrizar/RollTheDice-Frontend/master/src/img/readme/detallesPartida.PNG'}
            tecnologies={'React, Bootstrap5, Express, MongoDB'}
            link={"https://github.com/AxelUrizar/RollTheDice-Frontend"}
            note={'- Actualmente no deployeada -'}
          />
        </li>
      </ul>
    </section>
  )
}
