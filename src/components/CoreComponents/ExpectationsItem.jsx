
const ExpectationsItem = ({type,text,wrapClass,br})=>{ 

    const normaliseText  = (message,idx,count) =>{
        const messageArray = message.split(' ')
            return messageArray.slice(idx,count).map(elem=><span>{elem+' '}</span>)
        }

    return (
        br
            ?   <li className={wrapClass ? wrapClass : ''}>
                    <p className={`${wrapClass}__type`}>{type}:</p>
                    <div className ={`${wrapClass}__wrapper br`} style={{marginBottom:'10px'}}>{normaliseText(text,0,2)}</div>
                    <div className={`${wrapClass}__wrapper br`}>{normaliseText(text,2)}</div>
                </li> 
            :   <li className={wrapClass ? wrapClass : ''}>
                    <p className={`${wrapClass}__type`}>{type}:</p>
                    <div className={`${wrapClass}__wrapper`}>{normaliseText(text,0,2)}</div>
                </li>
    )
}

export default ExpectationsItem