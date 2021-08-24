import React, { useState } from 'react'

import Photo from '../../Components/Photo'
import photoSrc from '../../assets/img/photo.jpg'
import emailIcon from '../../assets/icon/icon-email.svg'
import whatsIcon from '../../assets/icon/icon-whats.svg'

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
               <div className="wrapper-about">
                   <header>
                        <Photo src={photoSrc} desc="photo perfil" photoName="Felipe Jhordan"/>
                    </header>
                        <ContentBox className="about" title="Sobre mim">
                    <div className="desc">
                        Olá, meu nome é felipe! tenho 21 anos, QUASE terminando a faculdade, pai de duas filhas caninas, nascido e criado em Uberaba.
                        Tenho pretensões de seguir carreira como desenvolvedor e atingir grandes objetivos!
                    </div>
                        </ContentBox>
               </div>
               <ContentBox className="wrapper-skills" title="Habilidades">
                   <div className="class">
                       <Skill lvl="basic" />
                       <Skill lvl="medium" />
                       <Skill lvl="high" />
                   </div>
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
                   <div className="contact-details">
                       <div className="contact-icon">
                           <img src={emailIcon} />
                           felipejordan.alves@gmail.com
                           </div>
                       <div className="contact-icon">
                           <img src={whatsIcon} />
                            (34) 9-96535688
                           </div>
                   </div>
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
                <div class="dev"> <h3>Desenvolvido por felipe🛹</h3> </div>
           </div>
        </>
    )
}

export default Main