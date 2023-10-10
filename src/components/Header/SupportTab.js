import React from "react";

export const SupportTab =({supportTab,handleSupportTab,numberTab,children})=>{

    return (
        <div className={`header-support__content-item ${supportTab.tab === `#head-tab-0${numberTab}` ? "header-support__content-item--active": '' }`} id={`head-tab-0${numberTab}`}>
            {children}
        </div>
    )
}