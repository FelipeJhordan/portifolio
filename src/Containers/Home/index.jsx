import React from 'react'
import './styles.css'

import Button from '../../Components/Button'
const Home = () => {


    return (
        <div className="grid">
            <header>
                <h1>
                    <span>Dev</span>
                    <span>Full-stack</span>
                </h1>
            </header>
            <section>
                <div className="wrapper-subtitles">
                    <p>Portifólio</p>
                    <p>Felipe Jhordan</p>
                </div>
                <div className="wrapper-button">
                    <Button wrapper="/welcome">Acessar</Button>
                </div>
            </section>
            <footer>
                <span>
                    {new Date().getFullYear()}
                </span>
            </footer>
        </div>
    )
}


export default Home;