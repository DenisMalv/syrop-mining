// import {useState,useEffect,useRef} from 'react'

// import { Outlet } from 'react-router-dom';


import MainContainer from '../components/CoreComponents/MainContainer'
import Header from '../components/Header/Header'
import Hero from "../components/Hero/Hero";
import Expectations from "../components/Expections/Expectations";
import Skills from "../components/Skills/Skills";
import Expirience from "../components/Expirience/Expirience";
import Projects from "../components/Projects/Projects";
import Contacts from "../components/Contacts/Contacts";
import Footer from '../components/Footer/Footer'


const Layout = () =>{


    return(
        // <MainContainer>
        <>
            <Header/>
            <Hero/>
            <Expectations/>
            <Skills/>
            <Expirience/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </>
        // </MainContainer>
    )
}

export default Layout