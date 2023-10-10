import { Outlet } from "react-router-dom"

const MainContainer = ({children,wrapClass}) =>{

    return (
        <div className={`main-container ${wrapClass ? wrapClass : ''}`}>
            <Outlet/>
            {children}
        </div>
    )
}

export default MainContainer