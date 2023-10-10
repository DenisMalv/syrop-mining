// import Left from '../../assets/img/work_expirience_string.svg'
import {ReactComponent as Left} from '../../assets/img/work_expirience_string.svg'
import {ReactComponent as Right} from '../../assets/img/study_expirience_string.svg'

const ExperienceItem = ({id,type,company,position,from,to,country,wrapClass})=>{

    console.log(Left); 
    return (
        <li className={`expirience__item ${wrapClass ? wrapClass : ''}`}>
            <p className="expirience__description-company">{company}</p>
            <p className="expirience__description-position">{position}</p>
            <p className="expirience__description-time">{from + to + ' | ' + country}</p>
            {wrapClass.includes("work") && <Left className='work'/>}
            {wrapClass.includes("study") && <Right className='study'/>}
        </li>
    )

}

export default ExperienceItem