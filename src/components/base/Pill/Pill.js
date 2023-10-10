import React from "react";

export const Pill = ({label, type}) => {
    const getProperStyle = (type) => {
        const pillStyleMap = {
            completed: ["--completed"],
            pending: ["--pending"],
            failed: ["--failed"]
        }
        return pillStyleMap[type]
    }
    return (
        <div className={`status ${getProperStyle(type)}`}>
            <span className="info fw-500">{label}</span>
        </div>
    )
}
