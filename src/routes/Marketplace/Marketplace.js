import React, {useState} from "react";

import { MarketplaceSidebar } from "./MarketplaceSidebar";
import { MarketplaceHeader } from "./MarketplaceHeader";
import { MarketplaceGoods } from "./MarketplaceGoods";
import { Pagination } from "../../components/base/Controls/Pagination";

export const Marketplace = () => {
    const [filters, setFilters] = useState({
        disk_space: [],
        gpu_count: [],
        tflops: [],
        gpu_ram: [],
        gpu_ram_bandwidth: [],
        pcie_bandwidth: [],
        nvlink_bandwidth: [],
        // general_filters: [],
        host_reliability: [],
        max_instance_duration: [],
        "$/hour": [],
        "tflops/$/hour": [],
        cpu_cores: [],
        cpu_ram: [],
        disk_bandwidth: [],
        inet_up: [],
        inet_down: [],
        "open_tcp/udp_ports": []
    });
    const [sort, setSort] = useState({
        gpu: {},
        country: {},
    });

    const setFilterOptions = (filter_type, filter_value) => {
        setFilters({
            ...filters,
            [filter_type]: filter_value
        })
    }

    return (
        <main className="content ovh">
            <div className="flex-content home-content controls-panel-js">
                <MarketplaceSidebar />
                <div className="content-body border-left pb--64-1200">
                    <MarketplaceHeader />
                    <MarketplaceGoods />
                    <Pagination />
                </div>
            </div>
        </main>
    )
}
