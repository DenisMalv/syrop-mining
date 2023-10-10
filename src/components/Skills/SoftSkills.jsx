import ListItem from "components/CoreComponents/ListItem"
import { softSkills } from "../../utils/data"

const SoftSkills = ()=>{
    return  (
        <div className="skills-soft__wrapper">
            <h2 className='skills__title mb-20'>Soft Skills</h2>
            <ul className="skills-soft__list list ml-40">
                {softSkills.map(({id,text})=><ListItem wrapClass={'skills-soft__item point--before'} key={id}>{text}</ListItem>)}
            </ul>
        </div>
    )
}

export default SoftSkills