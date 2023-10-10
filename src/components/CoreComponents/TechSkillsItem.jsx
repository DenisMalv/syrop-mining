

const TechSkillsItem = ({name,svgSprite,svgHash,wrapClass,idx})=>{

    const itemPositions = (id)=>{
        const possitionsArray  = [
            {id:0,top:'44px',left:'-8px'},
            {id:1,top:'-16px',left:'150px'},
            {id:2,top:'4px',left:'340px'},
            {id:3,top:'140px',left:'98px'},
            {id:4,top:'98px',left:'252px'},
            {id:5,top:'112px',left:'454px'},
            {id:6,top:'240px',left:'-34px'},
            {id:7,top:'260px',left:'190px'},
            {id:8,top:'240px',left:'346px'},
            {id:9,top:'370px',left:'68px'},
            {id:10,top:'380px',left:'308px'},
        ]
        return possitionsArray[id]
    }

    return(
        <li className={wrapClass ? wrapClass : '' } style={itemPositions(idx)}>
            <div className="icon__wrapper">
                <svg className="tech__item__icon" width="30" height="30">
                    <use href={svgSprite + svgHash}></use>
                </svg>
            </div>
            <p className="tech__item__name">{name}</p>
        </li>
    )
}

export default TechSkillsItem