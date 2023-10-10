import {useState,useEffect,useRef} from "react";

import { useClickOutside } from "../../helpers/useClickOutside";
import { SupportQuestion } from "./SupportQuestion";
import { SupportTab } from './SupportTab'

const headOne= [
    {
    title:'How does it work in a nutshell?',
    question:'Hosts download and run our management software, list their machines, configure prices and set any default jobs. Clients then find suitable machines using our flexible search interface, rent their desired machines, and finally run commands or start SSH sessions with a few clicks.',
    },
    {
    title:'What operating systems are provided? Windows?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
    {
    title:'What interface is provided?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
    {
    title:'What happens when my interruptible instance loses the bid?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
    {
    title:'What is this HTTPS website unsecure warning?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
    {
    title:'How do I connect to an SSH instance from windows?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
]
const headTwo= [
    {
    title:'How does it work in a nutshell?',
    question:"Hosts download and run our management software, list their machines, configure prices and set any default jobs. Clients then find suitable machines using our flexible search interface, rent their desired machines, and finally run commands or start SSH sessions with a few clicks.",
    },
    {
    title:'What operating systems are provided? Windows?',
    question:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!",
    },
]
const headThree= [
    {
    title:'How does it work in a nutshell?',
    question:'Hosts download and run our management software, list their machines, configure prices and set any default jobs. Clients then find suitable machines using our flexible search interface, rent their desired machines, and finally run commands or start SSH sessions with a few clicks.',
    },
    {
    title:'What operating systems are provided? Windows?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
]
const headFour= [
    {
    title:'What is this HTTPS website unsecure warning?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
    {
    title:'How do I connect to an SSH instance from windows?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
]
const headFive= [
    {
    title:'What is this HTTPS website unsecure warning?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
    {
    title:'How do I connect to an SSH instance from windows?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
]
const headSix= [
    {
    title:'What is this HTTPS website unsecure warning?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
    {
    title:'How do I connect to an SSH instance from windows?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
]
const headSeven= [
        {
        title:'How do I connect to an SSH instance from windows?',
        question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
        },
        {
        title:'What is this HTTPS website unsecure warning?',
        question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
        },
]
const headEight= [{
    title:'How do I connect to an SSH instance from windows?',
    question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nobis dolorem non id ipsa dolor expedita dolorum quasi repudiandae reiciendis officiis quibusdam esse quaerat quisquam? Repellat consectetur molestias voluptate ab!',
    },
]

export const DropdownSupport = ({setDropDown,outBtn}) =>{
    // STATE
    const dropRef = useRef(null);
    const [supportTab,setSupportTab]=useState({tab:'#head-tab-01',question:null})

    // EFFECTS;
    useClickOutside(dropRef,setDropDown,outBtn);

    // METHODS
    const handleSupportTab = (tab,question=null)=>{
        // console.dir(e.target)
        if(supportTab.question === question){
            setSupportTab({tab,question:null})
            return 
        }
        setSupportTab({tab,question})
        
    }
    // const handleSupportTab = (e)=>{
    //     console.dir(e.target)
    //     // setSupportTab({tab,question})
    // }

    useEffect(()=>{
        setSupportTab({tab: supportTab.tab, question: '1'});
    },[])

    return (
        <div className="header-support" data-tabs="" ref={dropRef}>
            <div className="header-support__nav">
                <h4 className="header-support__nav-title">Popular topics:</h4>
                <nav className="header-support__nav-list" onClick={(e)=>handleSupportTab(e.target.dataset.tab,null)}>
                    <button className={`header-support__nav-btn ${supportTab.tab === "#head-tab-01" ?'header-support__nav-btn--active':''}`} data-tab="#head-tab-01" >Basic questions</button>
                    <button className={`header-support__nav-btn ${supportTab.tab === "#head-tab-02" ?'header-support__nav-btn--active':''}`} data-tab="#head-tab-02">Account settings</button>
                    <button className={`header-support__nav-btn ${supportTab.tab === "#head-tab-03" ?'header-support__nav-btn--active':''}`} data-tab="#head-tab-03">Billing</button>
                    <button className={`header-support__nav-btn ${supportTab.tab === "#head-tab-04" ?'header-support__nav-btn--active':''}`} data-tab="#head-tab-04">Security</button>
                    <button className={`header-support__nav-btn ${supportTab.tab === "#head-tab-05" ?'header-support__nav-btn--active':''}`} data-tab="#head-tab-05">Instances</button>
                    <button className={`header-support__nav-btn ${supportTab.tab === "#head-tab-06" ?'header-support__nav-btn--active':''}`} data-tab="#head-tab-06">SSH</button>
                    <button className={`header-support__nav-btn ${supportTab.tab === "#head-tab-07" ?'header-support__nav-btn--active':''}`} data-tab="#head-tab-07">How to start hosting</button>
                    <button className={`header-support__nav-btn ${supportTab.tab === "#head-tab-08" ?'header-support__nav-btn--active':''}`} data-tab="#head-tab-08">Examples</button>
                </nav>
            </div>
            <div className="header-support__content">
                <div className="header-support__content-head">
                    <div className="header-support__content-head-text">
                        <h4 className="header-support__content-head-title">Support</h4>
                        <p className="header-support__content-head-p">Find answer on all your questions here</p>
                    </div>
                    <button type="button" className="btn btn--md btn--bordered r-2">
                        <span className="info">Contact Us</span>
                    </button>
                </div>
                <div className="header-support__content-items">
                    {supportTab.tab === "#head-tab-01" &&
                    // header-support__question--active
                        <SupportTab supportTab={supportTab} handleSupportTab={handleSupportTab} numberTab={'1'}>
                            {headOne.map((elem,idx)=><SupportQuestion supportTab={supportTab} handleSupportTab={handleSupportTab} number={`${idx+1}`} title={elem.title} question={elem.question} key={idx}/>)}
                        </SupportTab>
                    }

                    {supportTab.tab === "#head-tab-02" &&
                        <SupportTab supportTab={supportTab} handleSupportTab={handleSupportTab} numberTab={"2"}>
                            {headTwo.map((elem,idx)=><SupportQuestion supportTab={supportTab} handleSupportTab={handleSupportTab} number={`${idx+1}`} title={elem.title} question={elem.question} key={idx}/>)}
                        </SupportTab>
                    }

                    {supportTab.tab === "#head-tab-03" &&
                        <SupportTab supportTab={supportTab} handleSupportTab={handleSupportTab} numberTab={"3"}>
                            {headThree.map((elem,idx)=><SupportQuestion supportTab={supportTab} handleSupportTab={handleSupportTab} number={`${idx+1}`} title={elem.title} question={elem.question} key={idx}/>)}
                        </SupportTab>
                    }    
                    {supportTab.tab === "#head-tab-04" &&
                        <SupportTab supportTab={supportTab} handleSupportTab={handleSupportTab} numberTab={"4"}>
                            {headFour.map((elem,idx)=><SupportQuestion supportTab={supportTab} handleSupportTab={handleSupportTab} number={`${idx+1}`} title={elem.title} question={elem.question} key={idx}/>)}
                        </SupportTab>
                    }
                    {supportTab.tab === "#head-tab-05" &&
                        <SupportTab supportTab={supportTab} handleSupportTab={handleSupportTab} numberTab={"5"}>
                            {headFive.map((elem,idx)=><SupportQuestion supportTab={supportTab} handleSupportTab={handleSupportTab} number={`${idx+1}`} title={elem.title} question={elem.question} key={idx}/>)}
                        </SupportTab>
                    }

                    {supportTab.tab === "#head-tab-06" &&
                        <SupportTab supportTab={supportTab} handleSupportTab={handleSupportTab} numberTab={"6"}>
                            {headSix.map((elem,idx)=><SupportQuestion supportTab={supportTab} handleSupportTab={handleSupportTab} number={`${idx+1}`} title={elem.title} question={elem.question} key={idx}/>)}
                        </SupportTab>
                    }

                    {supportTab.tab === "#head-tab-07" &&
                        <SupportTab supportTab={supportTab} handleSupportTab={handleSupportTab} numberTab={"7"}>
                            {headSeven.map((elem,idx)=><SupportQuestion supportTab={supportTab} handleSupportTab={handleSupportTab} number={`${idx+1}`} title={elem.title} question={elem.question} key={idx}/>)}
                        </SupportTab>
                    }

                    {supportTab.tab === "#head-tab-08" &&
                        <SupportTab supportTab={supportTab} handleSupportTab={handleSupportTab} numberTab={"8"}>
                            {headEight.map((elem,idx)=><SupportQuestion supportTab={supportTab} handleSupportTab={handleSupportTab} number={`${idx+1}`} title={elem.title} question={elem.question} key={idx}/>)}
                        </SupportTab>
                    }
                </div>
            </div>
        </div> 
    )
}
