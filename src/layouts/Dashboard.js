import React,{useEffect} from 'react'
import {Outlet,useNavigate,useLocation} from "react-router-dom";
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import {Connect} from "../components/modal/Connect/Connect";


// import "../assets/css/bootstrap-grid.css"
// import "../assets/css/bootstrap-utilities.css"
// import "../assets/css/reset.css";
// import "../assets/css/global.css";
// import "../assets/css/main-alpha.css";
// import "../assets/css/main-bravo.css";
// import "../assets/css/main-charlie.css";
// import "../assets/css/main-delta.css";
// import "../assets/css/media-alpha.css";
// import "../assets/css/media-bravo.css";
// import "../assets/css/media-charlie.css";
// import "../assets/css/media-delta.css";
// import "../assets/css/components/header.css"
// import '../assets/css/react.css';

const Dashboard = () => {
    const location = useLocation()
    const navigate = useNavigate()

useEffect(()=>{
    location.pathname ==='/' && navigate('/marketplace')
},[])
return (
    <div className="dashboard">
        <Header/>
        <LeftNav/>
            <div className='wrapper'>
                <main className="content">
                    <Outlet />
                </main>
            </div>
    </div>
)
}

export default Dashboard
