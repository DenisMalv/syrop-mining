import { nanoid } from 'nanoid'

import img from './img_imports'

export const socialLinks = [
    {id:nanoid(3),name:"LinkedIn",link:'',svgSprite:img.svgIcons,svgHash:'#icon-linkedin'},
    {id:nanoid(3),name:"GitHub",link:'',svgSprite:img.svgIcons,svgHash:'#icon-github'},
    {id:nanoid(3),name:"Telegram",link:'',svgSprite:img.svgIcons,svgHash:'#icon-telegram'},
]

export const expectationItems = [
    {id:nanoid(3), type:'position',text:'FrontEnd Developer'},
    {id:nanoid(3), type:'work',text:'Remotely, Full-Time'},
    {id:nanoid(3), type:'salary',text:'$600+'},
    {id:nanoid(3), type:'work with',text:'JS, React, Redux, Node.js'},
]

export const techSkills = [
    {id:nanoid(3),name:"CSS3",svgSprite:img.svgIcons,svgHash:'#icon-css3'},
    {id:nanoid(3),name:"SCSS/SASS",svgSprite:img.svgIcons,svgHash:'#icon-sass'},
    {id:nanoid(3),name:"HTML5",svgSprite:img.svgIcons,svgHash:'#icon-html5'},
    {id:nanoid(3),name:"Rest.API",svgSprite:img.svgIcons,svgHash:'#icon-rest-api'},
    {id:nanoid(3),name:"Node.js",svgSprite:img.svgIcons,svgHash:'#icon-nodejs'},
    {id:nanoid(3),name:"React.js",svgSprite:img.svgIcons,svgHash:'#icon-react'},
    {id:nanoid(3),name:"WebPack",svgSprite:img.svgIcons,svgHash:'#icon-webpack'},
    {id:nanoid(3),name:"JavaScript",svgSprite:img.svgIcons,svgHash:'#icon-js'},
    {id:nanoid(3),name:"Redux",svgSprite:img.svgIcons,svgHash:'#icon-redux'},
    {id:nanoid(3),name:"Git",svgSprite:img.svgIcons,svgHash:'#icon-git'},
    {id:nanoid(3),name:"Parcel",svgSprite:img.svgIcons,svgHash:'#icon-parcel'},
]

export const softSkills = [
    {id:nanoid(3), text:'Hardwoking'},
    {id:nanoid(3), text:'Honest'},
    {id:nanoid(3), text:'Accurate'},
    {id:nanoid(3), text:'Willingness to learn'},
    {id:nanoid(3), text:'Critical thinking'},
    {id:nanoid(3), text:'Quick learning'},
    {id:nanoid(3), text:'Time management and organization'},
]

export const languages = [
    {id:nanoid(3),name: 'Ukrainian', level:5},
    {id:nanoid(3),name: 'Russian', level:5},
    {id:nanoid(3),name: 'English', level:3},
]

export const workExpirience = [
    {id:nanoid(3), type:'work', company:'CGP Systems sro', position:'Front-end Developer (React)', from:'July 2022', to:'November 2022',country:'Ukraine'},
    {id:nanoid(3), type:'work', company:'GoIT', position:'Mentor', from:'July 2022', to:'up to now',country:'Ukraine'},
    {id:nanoid(3), type:'work', company:'Worker, McDonalds Ukraine LTD', position:'Training Instructor', from:'May 2016', to:'up to now', country:'Ukraine'},
]

export const studyExpirience = [
    {id:nanoid(3), type:'study', company:'GoIT', position:'Full Stack developer', from:'March 2021', to:'July 2022',country:'Ukraine'},
    {id:nanoid(3), type:'study', company:'Kryvyi Rih National University', position:'Mining Faculty, Magister of mining', from:'September 2010', to:'June 2015',country:'Ukraine'},
   
]

export const projects = [
    {id:nanoid(3), img:img.projectWallet, title:'Project WALLET', technologies:'[React / Redux / REST.API / Node.js]', description:'Group project. Wallet for for counting expenses.'},
    {id:nanoid(3), img:img.projectFilmoteka, title:'Film library', technologies:'[JavaScript / HTML5 / CSS3]', description:'Group project. Two-page film library website. Role web-developer. Implemented, REST API work, custom pagination.'},
    {id:nanoid(3), img:img.projectFinder, title:'Image Finder', technologies:'[JavaScript / HTML5 / CSS3]', description:'Individual project. Working whith REST API Pixabay.'},
    {id:nanoid(3), img:img.projectCourses, title:'HellEN', technologies:'[HTML5 / CSS3 / SCSS]', description:'Group project, about English language courses. Role of the team leader.'},
]