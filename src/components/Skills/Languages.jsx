
// import { softSkills } from "../../utils/data"
import ListItem from "components/CoreComponents/ListItem"
import SkillLevel from "components/CoreComponents/SkillLevel"
import { languages } from "../../utils/data"

const Languages = ()=>{

    const normaliseLevel = (level) =>{
    const res = []
    for(let i = 1;i<=5;i+=1){
        res.push(i)
    }
    console.log('res',res)
    return res
}


    return  (
        <div>
            <h2 className='skills__title mb-22'>Langusages</h2>
            <ul className="skills-soft__list list">
                {languages.map(({id,name,level})=><ListItem wrapClass={'skills-soft__item mb-22'} key={id} >
                    {<>
                        <span className="skills-soft__item__name">{name}</span>
                        {normaliseLevel(level).map(elem=><span className={`skills-soft__item__level ${elem <= level ? "fill" : ''}`}></span>)}
                    </>}
                    </ListItem>)
                }
            </ul>
        </div>
    )
}

export default Languages

// .point--after