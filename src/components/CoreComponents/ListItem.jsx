const ListItem =({id,wrapClass,children}) =>{

    return (
        <li className={wrapClass}>{children}</li>
    )
}

export default ListItem