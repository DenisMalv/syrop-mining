import React, {useEffect, useState} from "react";

export const Accordion = ({items, HeaderRender, FooterRender, ContentRender, defaultActiveItem,
                              accordionHeaderActiveClassName, accordionClassName}) => {
    const [activeAccordionItem, setActiveAccordionItem] = useState(defaultActiveItem >= 0 ? defaultActiveItem : -1);
    const toggleAccordionItem = (index, target) => {
        // preventDefaultRefs.forEach((ref => {
        //     if(!ref.current.contains(target)) {
                if(target.nodeName === "A" || target.nodeName === 'SPAN' || target.nodeName  === "svg" || target.nodeName  === "path"){
                    return
                }
                if(index === activeAccordionItem) {
                    return setActiveAccordionItem(-1);
                }
                setActiveAccordionItem(index)
        //     }
        // }))
    }

    return (
        <>
            {items.map((accordion, index) => (
                <div
                    className={`${accordionClassName} ${activeAccordionItem === index ? accordionHeaderActiveClassName : ""}`}
                    key={index}
                >
                    <div className="dropdown__header" onClick={(event) => toggleAccordionItem(index, event.target)}>
                        <HeaderRender accordionItemData={accordion} isOpen={activeAccordionItem === index}/>
                    </div>
                    {activeAccordionItem === index ? <ContentRender accordionItemData={accordion} isOpen={activeAccordionItem === index} /> : ''}
                    {FooterRender && <FooterRender accordionItemData={accordion} isOpen={activeAccordionItem === index}/>}
                </div>
            ))}
        </>
    )
}
