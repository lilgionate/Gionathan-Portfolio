import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img'/>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.demoUrl} className="work__button demo-button" target='_blank' rel='noopener noreferrer'>
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <a href={item.githubUrl} className="work__button github-button" target='_blank' rel='noopener noreferrer'>
        GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}

export default WorksItems