import React from "react";

import { DockerImageSettingsHeader } from "./DockerImageSettingsHeader";
import { DockerImageSettingsMain } from "./DockerImageSettingsMain";

export const DockerImageSettings = () => {
    return (
        <div className="content-body p-30 w-100">
            <DockerImageSettingsHeader />
            <DockerImageSettingsMain />
        </div>
    )
}
