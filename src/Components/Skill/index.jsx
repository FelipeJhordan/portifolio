import React from 'react'
import './styles.css'
import HighIcon from '../../assets/icon/icon-high.svg'
import Mediumicon from '../../assets/icon/icon-medium.svg'
import BasicIcon from '../../assets/icon/icon-basic.svg'

const Skill = ({children, lvl, nameSkill}) => {


    const type = (  ) => {
        return (lvl === "basic" ? "Básico" : (lvl === "medium" ? "Intermediário" : "Avançado"))
    } 

    const src = () => {
        return (lvl === "basic" ? BasicIcon : (lvl === "medium" ? Mediumicon : HighIcon))
    }

    return (
        <>
            <p className={"wrapper-skill type-"+lvl}>
                <img src={src()} alt={type()}/>
                <span>
                     {nameSkill || type()}
                </span>
            </p>
        </>
    )
}

export default Skill