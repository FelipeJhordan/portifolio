import React, { useState } from 'react'

import Photo from '../../Components/Photo'
import photoSrc from '../../assets/img/photo.jpg'

import './styles.css'
import ContentBox from '../../Components/ContentBox'
import Skill from '../../Components/Skill'
import MiniCarousel from '../../Components/MiniCarousel'
import Button from '../../Components/Button'
import Modal from '../../Components/Modal'
const Main = () => {
    const [openModal, setOpenModal] = useState(false)

    const onContact = () => {
        setOpenModal(true)
    }   

    const onCloseModal = () => {
        setOpenModal(false)
    }

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
               <ContentBox id="mod" className="wrapper-contact" title="Contato">
                   <div className="text-contact">
                       Me envie alguma mensagem ou sugestão de melhoria, críticas construtivas sempre serão bem vindas!
                   </div>
                   <div className="wrapper-button">
                        <Button isMethod={true} wrapper={onContact}>Contatar</Button>
                        { openModal &&
                          <Modal  hasChanged={openModal} hasClosed={onCloseModal}/>
                        }
                   </div>
               </ContentBox>
           </div>
        </>
    )
}

export default Main