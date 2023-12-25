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
            imgSrc={'https://raw.githubusercontent.com/AxelUrizar/AxelCraft/master/assets/AxelCraft.png'}
            tecnologies={'Vite, React, ThreeJs'}
            link={"https://github.com/AxelUrizar/AxelCraft"}
            live={"https://axelurizar.github.io/AxelCraft/"}
          />
        </li>
        <li>
          <ProjectCard 
            name={'Real Time Online Chat 📱'}
            description={'Chat en tiempo real usando React, Express y Socket.io.'}
            imgSrc={'https://raw.githubusercontent.com/AxelUrizar/RT_Chat/master/assets/RT_Chat.png'}
            tecnologies={'React, Express, Socket.io, tailwindcss'}
            link={"https://github.com/AxelUrizar/RT_Chat"}
            live={"https://axelurizar.github.io/RT_Chat"}
          />
        </li>
        <li>
          <ProjectCard
            name={'Roll The Dice 🎲'}
            description={'Juego de dados en navegador con React.'}
            imgSrc={'https://raw.githubusercontent.com/AxelUrizar/RollTheDice-Frontend/master/src/img/readme/detallesPartida.PNG'}
            tecnologies={'React, Bootstrap5, Express, MongoDB'}
            link={"https://github.com/AxelUrizar/RollTheDice-Frontend"}
            live={"https://axelurizar.github.io/RollTheDice-Frontend"}
          />
        </li>
        <li>
          <ProjectCard  
            name={'Nvim Configuration 📝'}
            description={'Mi configuración personalizada de Nvim con plugins y atajos de teclado usando "Lazy" como plugin manager.'}
            note={'(Requiere Nvim instalado)'}
            imgSrc={'https://raw.githubusercontent.com/AxelUrizar/nvim-configuration/main/assets/oxocarbon.jpg'}
            tecnologies={'Nvim, Vimscript, Lazy, Lua'}
            link={"https://github.com/AxelUrizar/nvim-configuration"}
          />
        </li>
      </ul>
    </section>
  )
}
