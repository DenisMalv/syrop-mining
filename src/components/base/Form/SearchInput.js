import React from "react";

export const SearchInput = ({onChange, placeholder, value, type, icon, boxStyle}) => {
    return (
        <div className="input-custom__wrap-input input-custom__wrap-input--icon-l" style={boxStyle}>
            <span className="input-custom__wrap-input--icon"><span className="icon-ico-time-2"></span></span>
            <input
                className="input-custom__input input-custom__input--time"
                type={type ? type : "text"}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            {icon && <span className="input-custom__right-info d-flex">
               {icon}
            </span>
            }
        </div>
    )
}
