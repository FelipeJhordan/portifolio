import React from 'react'
import './styles.css'
import homeImage from '../../assets/img/img-main.png'

import Button from '../../Components/Button'
const Home = () => {


    return (
        <div className="home grid">
            <div class="home-image-container">
                <img class="home-image" src={homeImage} alt="home"/>
            </div>
            <div className="contend-home">
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
        </div>
    )
}


export default Home;