import React from "react";

export const CheckboxInput = ({label, onChange, checked, name, disabled, wrapperStyle}) => {
    return (
        <label className="checkbox" style={wrapperStyle}>
            {!disabled &&
                <>
                    <input
                        type="checkbox"
                        className="checkbox--input"
                        checked={checked}
                        name={name}
                        onChange={(event) => onChange(event.target)}
                    />
                    <span className="check mr-20"></span>
                    <span className="check--text">
                        {label}
                    </span>
                </>
            }

            {disabled &&
                <>
                    <input
                        type="checkbox"
                        className="checkbox--input"
                        disabled
                    />
                    <span className="check mr-20"></span>
                    <span className="check--text">
                        {label}
                </span>
                </>
            }
        </label>
    )
}
