import React from "react";

export const Dropdown = ({button, children, wrapperDropdownClass, activeDropdownClass}) => {
    return (
        <div className={`${wrapperDropdownClass} ${activeDropdownClass}`}>
            <div className="dropdown__button" onClick={() => {}}>
                { button }
            </div>
            <div className="dropdown__content">
                { children }
            </div>
        </div>
    )
}
