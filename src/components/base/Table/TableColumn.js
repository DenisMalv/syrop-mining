import React from "react";

export const TableColumn = ({children, columnClassName, columnStyle}) => {
    return (
        <td
            className={columnClassName}
            style={columnStyle}
        >{children}</td>
    )
}
