import { techSkills } from "../../utils/data"
import TechSkillsItem from "../CoreComponents/TechSkillsItem"

const TechSkills = ()=>{
    return  (
        <div className="skills-tech__wrapper">
            <h2 className='skills__title'>Tech Skills</h2>
            <ul className="skills-tech__list list">
                {techSkills.map(({id,name,svgSprite,svgHash},idx)=>
                    <TechSkillsItem 
                        wrapClass='skills-tech__item' 
                        id={id}
                        name={name}
                        svgSprite={svgSprite} 
                        svgHash={svgHash}
                        idx={idx} 
                        key={id}
                    />)
                }
            </ul>
        </div>
    )
}

export default TechSkills