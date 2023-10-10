import React from "react";

export const SupportQuestion =({supportTab,handleSupportTab,number,title,question})=>{

    return (
        <div 
            className={`header-support__question ${supportTab.question === number ? "header-support__question--active" : ''}`} 
            data-dropdown-support={number}
            onClick={((e)=>handleSupportTab(supportTab.tab, e.currentTarget.dataset.dropdownSupport))}
        >
            <h4 className="header-support__question-title" data-dropdown-support--btn="">{title}</h4>
            <div className="header-support__question-text">{question}</div>
        </div>
    )
}