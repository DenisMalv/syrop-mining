import React, {useState} from "react";

export const Tabs = ({tabs, tabsClassName, tabsHeadClassName, tabsListClassName, contentClassName, tabClassName, activeTabClassName}) => {
    const [tabsInfo, setTabsInfo] = useState({
        activeTab: 0
    })

    const setActiveTab = (index) => {
        setTabsInfo({activeTab: index})
    };
    return (
        <div className={`${tabsClassName ? tabsClassName : "tabs"}`}>
            <div className={`${tabsHeadClassName ? tabsHeadClassName : "tabs-head"}`}>
                <ul className={`${tabsListClassName ? tabsListClassName : "how-setup-list"}`}>
                    {
                        tabs.map((tab, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={ index === tabsInfo.activeTab ? 'setup-item active' : 'setup-item' }
                                data-href="#check-requirements"
                            >
                                {tab.tabButton}
                            </li>
                        ))
                    }

                </ul>
            </div>
            <div className={`${contentClassName ? contentClassName : "tab-content"}`}>
                {tabs.map(({ component }, index) => (
                    <div key={index} className={ index === tabsInfo.activeTab ?
                        `${tabClassName ? tabClassName : "tab"} ${activeTabClassName ? activeTabClassName : "active"}`
                        : `${tabClassName ? tabClassName : "tab"}` }
                    >
                        { component }
                    </div>
                ))}
            </div>
        </div>
    )
}
