import React from "react"


export const CheckRequirementsTab = ()=>{
    return (
        <div className="tab active" id="check-requirements">
            <h4 className="heading heading-h4 heading--basic mb-15">Host Requirements</h4>
            <p className="subheading opacity-50 mb-20">Want to rent out your machine? We recommend any rented
            machines meet the following requirements to rent for the best price:</p>
            <ul className="requirements-list">
                <li><span className="color-white">Ubuntu 18.04<span className="opacity-50"> (required)</span></span>
                </li>
                <li><span className="color-white">Dedicated machines only - the machine shouldn't be doing other
                        stuff while rented</span></li>
                <li><span className="color-white">Fast, reliable internet: at least 10Mbps per machine.</span>
                </li>
                <li><span className="color-white">10-series Nvidia GPU <span className="opacity-50"> (AMD not yet
                            supported, older Nvidia not recommended).</span></span></li>
                <li><span className="color-white">At least 1 physical CPU core <span className="opacity-50"> (2
                            hyperthreads) per GPU.</span></span></li>
                <li><span className="color-white">Your CPU must support AVX instruction set <span className="opacity-50">(not all lower end CPUs support this).</span></span></li>
                <li><span className="color-white">At least 4GBM of system RAM per GPU.</span></li>
                <li><span className="color-white">Fast SSD storage with at least 64GB per GPU.</span></li>
                <li><span className="color-white">At least 1X PCIE for every 2.5 TFLOPS of GPU
                        performance.</span></li>
                <li><span className="color-white">All GPUs on the machine must be of the same type.</span></li>
                <li><span className="color-white">An open port range mapped to each machine.</span></li>
            </ul>
            <p className="subheading opacity-50">The ideal machine will exceed these minimum guidelines, as some
                workloads require even more CPU, RAM, disk, and PCIE performance. Also keep in mind that
                everything scales with GPU power, so a 3090 will need more ram, a better cpu, etc, than a
                3060.</p>
        </div>
    )
} 