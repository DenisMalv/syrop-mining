import React from "react";

export const Table = ({tableHeader, children, tableClassName, headClassName, bodyClassName}) => {
    return (
        <table className={tableClassName}>
            <thead className={headClassName}>
                <tr>
                    {tableHeader.map(header => (
                        <th className="text-left" key={header}>{header}</th>
                    )) }
                </tr>
            </thead>
            <tbody className={bodyClassName}>
                {children}
            </tbody>
        </table>
    )
}
