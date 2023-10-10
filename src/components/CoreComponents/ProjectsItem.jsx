

const ProjectsItem = ({idx,id,img,title,technologies,description}) =>{

    return (
        <li className="projects__item" style={idx ? {top:"120px"} : {}}>
            <img src={img} alt={title} className="projects__image"/>
            <div className="projects__descr-container">
                <p>
                    <a href="" className="projects__title">{title}</a>
                    <a href="" className="projects__subtitle">github</a>
                </p>
                <p className="projects__technologies">{technologies}</p>
                <p className="projects__desctiption">{description}</p>
            </div>
        </li>
    )
}

export default ProjectsItem