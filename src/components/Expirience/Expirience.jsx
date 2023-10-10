// import {useState,useEffect,useRef} from 'react'
import MainContainer from 'components/CoreComponents/MainContainer'
import StudyExpirience from './StudyExpirience'
import WorkExpirience from './WorkExpirience'


const Expirience = () =>{


    return(
        <section className='expirience'>
            <MainContainer>
                <div className='expirience__container'>
                    <WorkExpirience/>
                    <StudyExpirience/>
                </div>
            </MainContainer>
        </section>
    )
}

export default Expirience