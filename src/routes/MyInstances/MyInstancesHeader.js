import React from "react";
import { SelectBox } from "../../components/base/Form/SelectBox";

const sortOptions = [
    { label: "Sort by Default", value: 'default' },
    { label: 'Sort by Price (high)', value: 'sort-by-price-high' },
    { label: 'Sort by Price (low)', value: 'sort-by-price-low' },
    { label: 'Sort by TFLOPS', value: 'sort-by-tflops' },
    { label: 'Sort by DLPerf', value: 'sort-by-dlperf' },
]

export const MyInstancesHeader = () => {
    return (
        <div className="head-flex">
            <div className="head-flex--item d-flex mb-15 flex-column">
                <h2 className="heading heading-h2 ttu mb-8">My Instances</h2>
                <p className="subheading opacity-50">Control all your instances on this page</p>
            </div>
            <div className="head-flex--item d-flex align-items-end">
                <SelectBox
                    options={sortOptions}
                    defaultValue="default"
                    onSelect={(value) => console.log(value)}
                />
            </div>
        </div>
    )
}
