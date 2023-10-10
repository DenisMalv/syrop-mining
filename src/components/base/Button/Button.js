import React from "react";

export const Button = ({
                           text, disabled, customButtonClass, customButtonStyle,
                           icon, iconPosition, customIconClass, onClick, size, type, outline
}) => {
    const getProperSize = (size) => {
        if (size === "large") return "btn--lg"
        if (size === "medium") return "btn--md"
    }
    const getProperType = (type) => {
        if (type === "primary") return "btn-primary"
        if (type === "bordered-primary") return "btn--bordered-primary"
        if (type === "secondary") return "btn--secondary"
    }
    const createButtonClass = () => {
        const sizeButton = getProperSize(size);
        const styleButton = getProperType(type);
        if(type === "primary" && outline === true) return `${sizeButton} btn--bordered`
        if(type === "secondary" && outline === true) return `${sizeButton} btn--bordered-2 ${styleButton}`
        return `${sizeButton} ${styleButton}`
    }
    return (
        <>
            { !disabled &&
                <button
                    className={customButtonClass ? customButtonClass :  `btn ${createButtonClass()}`}
                    style={customButtonStyle}
                    onClick={onClick}
                >
                    {icon && iconPosition === "left" && <span className={ customIconClass ? customIconClass : "btn-icon"}>{ icon }</span>}
                    {text && <span>{text}</span>}
                    {icon && iconPosition === "right" && <span className={ customIconClass ? customIconClass : "btn-icon"}>{ icon }</span>}
                </button>
            }
            {
                disabled && <button
                    className={customButtonClass ? customButtonClass :  `btn ${createButtonClass()}`}
                    disabled
                >
                    {icon && iconPosition === "left" && <span className={ customIconClass ? customIconClass : "btn-icon"}>{ icon }</span>}
                    {text && <span>{text}</span>}
                    {icon && iconPosition === "right" && <span className={ customIconClass ? customIconClass : "btn-icon"}>{ icon }</span>}
                </button>
            }
        </>
    )
}
