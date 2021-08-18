import React from 'react'
import Button from '../../Components/Button'
import './styles.css'

const Welcome = () => {


    return (
        <>
            <div className="container-welcome">
                <header>
                    <h1>Bem vindo!</h1>
                </header>
                <section>
                    <div className="text">
                        <p>
                            {new Date().getHours() >= 12 &&  Date().getHours() < 18 
                               ? "Boa tarde "
                               : new Date().getHours() >= 18 
                                   ? "Boa noite "
                                   : "Bom dia "  }, meu nome é felipe, sou desenvolvedor full-stack e espero que esse site te agrade!
                        </p>
                    </div>
                    <div className="wrapper-button">
                        <Button wrapper="/main">Prosseguir</Button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Welcome