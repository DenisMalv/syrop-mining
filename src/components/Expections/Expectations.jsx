// import {useState,useEffect,useRef} from 'react'

import ExpectationsItem from '../CoreComponents/ExpectationsItem'
import { expectationItems } from '../../utils/data'
import MainContainer from 'components/CoreComponents/MainContainer'


const Expectations = () =>{

    return(
        <section className="expectations">
            <MainContainer  wrapClass={'expectations-container'}>
                <h2 className='search'>I’m looking for ..</h2>
                <ul className='expectations__list'>
                    {expectationItems.map(elem=>
                        <ExpectationsItem 
                            type={elem.type} 
                            text={elem.text} 
                            wrapClass={'expectations__item'} 
                            br={elem.type === 'work with'} 
                            key={elem.id}
                        />)
                    }
                </ul>
            </MainContainer>
        </section>
    )
}

export default Expectations