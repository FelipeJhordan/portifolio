import React from 'react'
import './styles.css'

const ContentBox = ({title, children, className}) => {

    return (
        <section className={className}>
            <div className="section-title">
                <h1>{title}</h1>
            </div>
           <div className="content">
                 {children}
           </div>
        </section>
    )
}


export default ContentBox