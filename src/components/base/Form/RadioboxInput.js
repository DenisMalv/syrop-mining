import React, {useEffect, useState} from "react";

export const RadioboxInput = ({onSelect, label, value, name, radioBoxStyle, labelClassName}) => {
    return (
        <>
            <label className={`${labelClassName ? labelClassName : "custom-radio"}`} style={radioBoxStyle}>
                <input
                    type="radio"
                    className="custom-radio__input"
                    onChange={(event) => onSelect(event.target.value)}
                    value={value}
                    name={name}
                />
                <span className="custom-radio__input-fake"></span>
                <span className="custom-radio__label">
                    {label}
                </span>
            </label>
        </>
    )
}
