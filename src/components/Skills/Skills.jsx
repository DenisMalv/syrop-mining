// import {useState,useEffect,useRef} from 'react'

import TechSkills from './TechSkill'
import SoftSkills from './SoftSkills'
import MainContainer from 'components/CoreComponents/MainContainer'
import Languages from './Languages'


const Skills = () =>{


    return(
        <section className='skills'>
            <MainContainer wrapClass={'skills-container'}>
                <TechSkills/>
                <div className='skills-wrapper'>
                    <SoftSkills/>
                    <Languages/>
                </div>
            </MainContainer>
        </section>
    )
}

export default Skills