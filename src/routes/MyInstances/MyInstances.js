import React from "react";

import { MyInstancesHeader } from "./MyInstancesHeader";
import { MyInstancesMain } from "./MyInstancesMain";
import {Connect} from "../../components/modal/Connect/Connect";

export const MyInstances = () => {
    return (
        <>
            <div className="content-body p-30 w-100">
                <MyInstancesHeader />
                <MyInstancesMain />
            </div>
        </>
    )
}
