import React from 'react'
import './styles.css'

import {Link} from 'react-router-dom'

const Button = ({children, isMethod, wrapper}) => {
    return (
        <>
            <div className="container-button"> 
                {
                    (isMethod) ? 
                      <a href="#" onClick={wrapper}  className="btn"/>
                      : <Link className="btn" to={wrapper}> {children} </Link>
                }
            </div>  
        </>
    )
}

export default Button