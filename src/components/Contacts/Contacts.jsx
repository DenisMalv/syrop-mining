// import {useState,useEffect,useRef} from 'react'

import ContactLink from '../CoreComponents/SvgLink'

import { socialLinks } from '../../utils/data'
import Button from '../CoreComponents/Button'
import MainContainer from 'components/CoreComponents/MainContainer'

import img from '../../utils/img_imports'


const Contacts = () =>{


    return(
        <section className='contacts'>
            <MainContainer>
                <div className='contacts__wrapper'>
                    <div className='contacts__links'>
                        <h2 className='contacts__h-title'>Contacts</h2>
                        <a href="https://github.com/DenisMalv/" type='tel' className='contacts__phone'>+380984733446</a>
                        <a href="https://github.com/DenisMalv/" type='email' className='contacts__mail'>denis.malniev@gmail.com</a>
                        <ul className='contacts__list'>
                            {socialLinks.map(({id,link,svgSprite,svgHash})=> <ContactLink id={id}link={link} svgSprite={svgSprite} svgHash={svgHash} key={id}/>)}
                        </ul>
                        <Button className={'btn btn btn--accent '} text={'Contact me'} type={'button'}/>
                    </div>
                    <img src={img.denisContacts} alt="photo-2" className='contacts__photo'/>
                </div>
            </MainContainer>
        </section>
    )
}

export default Contacts