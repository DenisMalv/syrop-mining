import React from "react";

export const PricingTable = () => {
    return (
        <section className="section">
            <div className="container container-lg">
                <div className="pricing__table-wrapper">
                    <table className="pricing__table" style={{width: "100%"}}>
                        <thead className="pricing__table--head">
                        <tr>
                            <th className="text-left" style={{width:" 397px"}}>
                                GPU TYPE
                            </th>
                            <th className="text-right" style={{width: "44px"}}>
                                VCPU
                            </th>
                            <th className="text-right" style={{width: "114px"}}>
                                RAM
                            </th>
                            <th className="text-right" style={{width: "157px"}}>
                                SPOT ($/HR)
                            </th>
                            <th className="text-right" style={{width: "216px"}}>
                                ON-DEMAND ($/HR)
                            </th>
                        </tr>
                        </thead>
                        <tbody className="pricing__table--body">
                        <tr>
                            <td>
                                1x A100 80GB
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2x A100 80GB
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4x A100 80GB
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                8x A100 80GB
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1x A40
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2x A40
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4x A40
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                8x A40
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1x RTX A6000
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2x RTX A6000
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4x RTX A6000
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        <tr>
                            <td>
                                8x RTX A6000
                            </td>
                            <td className="text-right">
                                16
                            </td>
                            <td className="text-right">
                                125 GB
                            </td>
                            <td className="text-right">
                                0.442
                            </td>
                            <td className="text-right">
                                1.368
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
