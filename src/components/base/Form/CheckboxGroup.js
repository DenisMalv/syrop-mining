import React, {useEffect, useState} from "react";
import {CheckboxInput} from "./CheckboxInput";

export const CheckboxGroup = ({groupLabel, items, onChange, singleInputStyle, groupStyle,disableBorder}) => {
    const [checkboxGroup, setCheckboxGroup] = useState(items);
    const handleChange = (isChecked, checkboxName) => {
        console.log(isChecked, checkboxName);
        setCheckboxGroup(checkboxGroup.map(checkbox =>
            checkbox.value === checkboxName ? {...checkbox, isChecked} : checkbox))
    }
    useEffect(() => {
        onChange(checkboxGroup)
    }, [checkboxGroup])
    return (
        <div className="list-control mt-15" style={groupStyle}>
            <div className="list-control--head">
                <span className="text--info">{groupLabel}</span>
            </div>
            <div className="list-control--body">
                <ul className="custom-list">
                    {checkboxGroup.map(checkbox => (
                        <li className="custom-list--item" key={checkbox.value} style={disableBorder?{border:"none"}:{}}>
                            <CheckboxInput
                                wrapperStyle={singleInputStyle}
                                label={checkbox.label}
                                name={checkbox.value}
                                checked={checkbox.isChecked}
                                onChange={({checked, name}) => handleChange(checked, name)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
