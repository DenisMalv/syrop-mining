// import {useState,useEffect,useRef} from 'react'

import ProjectsItem from '../CoreComponents/ProjectsItem'
import MainContainer from 'components/CoreComponents/MainContainer'
import { projects } from '../../utils/data'


const Projects = () =>{


    return(
        <section className='projects'>
            <MainContainer>
            <h2 className='projects__h-title ' style={{position:"relative",top:"60px"}}>Projects</h2>
                <ul className='projects__list'>
                
                    {projects.map(({id,img,title,technologies,description},idx)=>
                        <ProjectsItem idx={idx%2 === 0} id={id} img={img} title={title} technologies={technologies} description={description} key={id}/>
                    )}
                </ul>
            </MainContainer>
        </section>
    )
}

export default Projects