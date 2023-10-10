import React from "react";
import Select, { components } from 'react-select';

import "../../../assets/css/components/select-box.css"

const DropdownIndicator = props => {
    return (
        <>
            { components.DropdownIndicator && (
                <components.DropdownIndicator {...props}>
                    <svg
                        width="9"
                        height="6"
                        viewBox="0 0 9 6"
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{transform: `${props.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)"}`}}
                    >
                        <path d="M5.22928 5.22267C4.83425 5.64372 4.16574 5.64372 3.77072 5.22267L0.450953 1.68421C-0.148153 1.04564 0.30462 1.86545e-08 1.18024 9.52033e-08L7.81976 6.75649e-07C8.69538 7.52198e-07 9.14815 1.04564 8.54905 1.68421L5.22928 5.22267Z" fill="#FFFFFF" fillOpacity="0.5"></path>
                    </svg>
                </components.DropdownIndicator>
            )}
        </>
    );
};

export const SelectBox = ({options, onSelect, defaultValue, menuAutoPlacement, widthControl, widthMenu, itemsCenter, disableInputMarginBottom,customStules,}) => {
    const customStyles = {
        option: state => ({
            padding: "3px 10px",
            fontSize: "13px",
            lineHeight: "22px",
            whiteSpace: "nowrap",
            color: state.isSelected ? "#fff" : "#fff",
            overflow: "hidden",
            transition: "0.3s all",
            cursor: "pointer",
            boxSizing: "border-box",
            border: "1px solid transparent",
            "&:hover": {
                backgroundColor: "transparent",
                borderColor: "#9B2EFB",
                borderRadius: "2px"
            },
            textAlign: itemsCenter ? "center" : "left",
            
        }),
        control: () => ({
            display: "flex",
            justifyContent: "space-between",
            background: "rgba(255, 255, 255, 0.05)",
            border: "0.5px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "2px",
            maxWidth: widthControl ? widthControl : "150px",
            cursor: "pointer",
            "&:focus": {
                color: "#FFF",
            },
            ...customStules
        }),
        menu: base => ({
            ...base,
            borderRadius: "2px",
            padding: "6px",
            width: widthMenu ? widthMenu : "168px",
            marginTop: "6px",
            background: "#ffffff0d",
            border: "1px solid #ffffff14",
            backdropFilter: "blur(70px)",
            zIndex: 1000,
            right: 0,
            left: "auto",
           
        }),
        menuList: base => ({
            ...base,
            maxHeight: "306px",
            overflow: "auto",
            padding: 0,
            
        }),
        singleValue: base => ({
            ...base,
            color: "rgba(255, 255, 255, 0.5)",
        })
    }

    return (
        <div className={`select--small fixed--select ${disableInputMarginBottom ? "" : "mb-15"}`} data-select="">
            <Select
                components={{ DropdownIndicator }}
                styles={customStyles}
                options={options}
                defaultValue={options.find(option => option.value === defaultValue)}
                onChange={(value) => onSelect(value)}
                menuPosition={menuAutoPlacement ? "fixed" : "absolute"}
                menuPortalTarget={document.body}
            />
        </div>
    )
}
