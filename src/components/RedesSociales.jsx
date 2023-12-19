import { SocialsButton } from "./SocialsButton";

export function RedesSociales () {
  return (
    <section id="socials" className='mb-8'>
      <h2 className='text-3xl font-bold mb-4'>Redes Sociales 📱</h2>
      <div className='flex gap-3'>
        <SocialsButton 
          link={"https://github.com/AxelUrizar"}
          icon={"https://imgs.search.brave.com/GRQN6egSOcKH4BKTb3OpTGUE9q4yx-gORaanOJMs8tQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZm9udC1hd2Vz/b21lLzE3OTIvZ2l0/aHViLTUxMi5wbmc"}
          name={"Github"} 
        />
        <SocialsButton 
          link={"https://www.linkedin.com/in/axelurizar/"}
          icon={"https://imgs.search.brave.com/w173jw0bDmcvZMigrKdcNp-kKVvGtrWcLm2ugTt2V6s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzUzNi8zNTM2/NTY5LnBuZw"}
          name={"LinkedIn"}
        />
      </div>
    </section>
  )
}
