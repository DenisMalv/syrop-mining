

const ContactLink = ({link,svgSprite,svgHash}) =>{
    return (
        <li className="list__item">
            <a href={link} className='list__link'>
                <svg width="30" height="30" className="list__icon">
                    <use href={svgSprite + svgHash}></use>
                </svg>
            </a>
        </li>
    )
}

export default ContactLink