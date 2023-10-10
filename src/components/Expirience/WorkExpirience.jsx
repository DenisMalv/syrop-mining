import { workExpirience } from "../../utils/data";
import ExperienceItem from "../CoreComponents/ExperienceItem";

const WorkExpirience = () =>{
    return (
        <div className="expirience__study">
            <h2 className='skills__title mb-84'>Work expirience</h2>
            <ul className="expirience__list list">
                {workExpirience.map(({id,type,company,position,from,to,country})=>
                    <ExperienceItem id={id} type={type} company={company} position={position} from={from} to={to} country={country} key={id} wrapClass={`work`}/>
                )}
            </ul>
        </div>
    )
}

export default WorkExpirience