import React from 'react'

import Projects from '../../assets/img/projects'
import { Carousel } from '../../../node_modules/react-responsive-carousel'
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import './styles.css'

const MiniCarousel = () => {
    return (
        <Carousel showThumbs={false} showArrows={true} className="wrapper-carousel" useKeyboardArrows={true}
            showStatus={false} showIndicators={false}>
                {
                    Object.values(Projects).map(
                        (project) => {
                            return(
                                <div className="item" key={project+""}>
                                    <span className="img-desc">
                                            {project.name}
                                    </span>
                                    <img className="img-carousel" src={project.src}  alt=""/>
                                </div>
                            )
                        }
                    )
                }
        </Carousel>
    )
}
export default MiniCarousel