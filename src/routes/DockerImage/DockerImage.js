import React from "react";

import { DockerImageHeader } from "./DockerImageHeader";
import { DockerImageMain } from "./DockerImageMain";

export const DockerImage = () => {
    return (
        <div className="content-body p-30 w-100">
            <DockerImageHeader />
            <DockerImageMain />
        </div>
    )
}
