import React from 'react'

import Photo from '../../Components/Photo'
import photoSrc from '../../assets/img/photo.jpg'

import './styles.css'
import ContentBox from '../../Components/ContentBox'
import Skill from '../../Components/Skill'
import MiniCarousel from '../../Components/MiniCarousel'

const Main = () => {


    return (
        <>
           <div className="container-main grid">
               <header>
                    <Photo src={photoSrc} desc="photo perfil" photoName="Felipe Jhordan"/>
               </header>
               <ContentBox className="wrapper-about" title="Sobre mim">
                   <div>
                       Olá sou o felipe, tenho 21 anos, pai de duas filhas caninas, Uberabense com muito orgulho e apaixonado por games, séries, animes e javascript. 
                   </div>
               </ContentBox>
               <ContentBox className="wrapper-skills" title="Habilidades">
                   <Skill lvl="basic" />
                   <Skill lvl="medium" />
                   <Skill lvl="high" />
                   <br />
                   <Skill nameSkill="Tríade Web" lvl="high"/>
                   <Skill nameSkill="React" lvl="medium"/>
                   <Skill nameSkill="Angular 2+" lvl="medium"/>
                   <Skill nameSkill="Node" lvl="medium"/>
                   <Skill nameSkill="Java" lvl="medium"/>
                   <Skill nameSkill="Kotlin" lvl="medium"/>
                   <Skill nameSkill="Git" lvl="medium"/>
                   <Skill nameSkill="Banco de dados" lvl="medium"/>
                   <Skill nameSkill="Spring" lvl="basic"/>
                   <Skill nameSkill="Vue" lvl="basic"/>
                   <Skill nameSkill="Typescript" lvl="basic"/>
               </ContentBox>
               <ContentBox className="wrapper-proj" title="Projetos">
                   <MiniCarousel />
               </ContentBox>
               <ContentBox className="wrapper-contact" title="Contato">
               </ContentBox>
           </div>
        </>
    )
}

export default Main