import React from 'react'
import { Accordion } from "../../components/base/Accordion/Accordion";

const accordions = [
    {title: "How does it work in a nutshell?"},
    {title: "What operating systems are provided? Windows?"},
    {title: "What interface is provided?"},
    {title: "What happens when my interruptible instance loses the bid?"},
    {title: "What is this HTTPS website unsecure warning?"},
    {title: "How do I connect to an SSH instance from windows?"},
]

const Questions = () =>{
    return (
        <section className="section relative" id="faq">
            <div className="circle-bg purple" style={{left: "-950px", bottom: "-592px"}}></div>
            <div className="container container-lg">
                <h2 className="section-title mb-12 text-center">frequently asked questions</h2>
                <div className="section-subtitle mb-50 text-center">
                    <p>Answers on most popular questions</p>
                </div>
                <ul className="accordion-list">

                    <Accordion
                        items={accordions}
                        defaultActiveItem={0}
                        accordionHeaderActiveClassName="active"
                        accordionClassName="accordion-list__item"
                        HeaderRender={({accordionItemData}) => (<h4>
                                {accordionItemData.title}
                                <button className="accordion-icon"></button>
                            </h4>)}
                        ContentRender={({accordionItemData}) => (<div className="answer">
                                <p>
                                    Hosts download and run our management software, list their machines, configure prices
                                    and set any default jobs. Clients then find suitable machines using our flexible search
                                    interface, rent their desired machines, and finally run commands or start SSH sessions
                                    with a few clicks.
                                </p>
                            </div>)}
                    />
                </ul>
            </div>
        </section>
    )
}

export default Questions
