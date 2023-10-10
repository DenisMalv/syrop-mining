import { studyExpirience } from "../../utils/data";
import ExperienceItem from "../CoreComponents/ExperienceItem";

const StudyExpirience = () =>{
    return (
        <div >
            <h2 className='skills__title mb-22'>Study expirience</h2>
            <ul className="expirience__list list h-88 ml-130" style={{top:"50px"}}>
                {studyExpirience.map(({id,type,company,position,from,to,country},idx)=>
                    <ExperienceItem id={id} type={type} company={company} position={position} from={from} to={to} country={country} key={id} wrapClass={`${idx === 0 ? 'mt-auto' : ''} ${idx === studyExpirience.length -1 ? 'mb-22' : ''} study`}/>
                )}
            </ul>
        </div>
    )
}

export default StudyExpirience