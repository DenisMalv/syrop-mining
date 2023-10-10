import React, {useState} from "react";
import { Accordion } from "../../components/base/Accordion/Accordion";

export const MyHostsMain = ({setIsSettings}) => {
    const [hosts, setHosts] = useState([
        {
            id: '1',
            status: 'active',
            price: 0.302
        },
        {
            id: '2',
            status: 'unactive',
            price: null,
        },
        {
            id: '3',
            status: 'not-listed',
            price: 0.302
        },
    ]);

    const setListUnlist = (host) => {
        let stateCopy = [...hosts];
        stateCopy.find(item => item.id === host.id).status = stateCopy.find(item => item.id === host.id).status === 'active' ? 'not-listed' : 'active';
        setHosts(stateCopy);
    }

    return (
        <div>
            <Accordion
                items={hosts}
                accordionHeaderActiveClassName="active--dropdown"
                accordionClassName="dropdown mt-15 r-8"
                HeaderRender={({accordionItemData}) => (<div className="dropdown-head px-14" data-dropdown--action="">
                    <div className="info pt-6 mr-15" style={{ pointerEvents: 'none'}}>
                        <span className="ico ico-arrow mb-6 mr-10">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33337 9.16667L11 12.8333L14.6667 9.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                        <ul className="custom-list custom-list-row">
                            <li className="custom-list--item mb-6">
                                <span className="info1 style--info">1x</span>
                                <div className="info2 style--info">
                                    RTX 3090
                                </div>
                            </li>
                            <li className="custom-list--item mb-6">
                                <span className="info1 style--info">ID:</span>
                                <div className="info2 style--info">
                                    3059
                                </div>
                            </li>
                            <li className="custom-list--item mb-6">
                                <span className="info1 style--info">Location:</span>
                                <div className="info2 style--info">
                                    Quebec, CA
                                </div>
                            </li>
                            <li className="custom-list--item mb-6">
                                <span className="info1 style--info">Max Duration:</span>
                                <div className="info2 style--info">
                                    27 Days
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="action pt-6">
                        <ul className="custom-list custom-list-row" style={{ pointerEvents: 'none'}}>
                            <li className="custom-list--item mb-6 flex-auto justify-content-end mr-26">
                                <span className="info1 style--info">Price:</span>
                                <div className="info2 style--info">
                                    {accordionItemData.price ? `$${accordionItemData.price}/hr` : '-'}
                                </div>
                            </li>
                        </ul>
                       <div className="dbl-btns dbl-btns--10 ">
                            {(accordionItemData.status === "active" || accordionItemData.status === "not-listed") && 
                            <a href="#" className="btn btn--md btn--bordered mb-6 mr-10 fsz-13" onClick={()=>setIsSettings(true)}>
                                <span className="btn-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.6665 2.49686C11.0183 2.49686 11.3321 2.71771 11.451 3.04875L11.8745 4.22841C11.9417 4.41392 12.0722 4.56978 12.243 4.66859L13.4994 5.3939C13.67 5.49233 13.8699 5.52718 14.0638 5.49227L15.2976 5.26968C15.6441 5.20668 15.9928 5.36818 16.1688 5.67318L16.8358 6.82366C17.0123 7.12783 16.9789 7.51005 16.7524 7.77906L15.9429 8.73612C15.8154 8.88662 15.7454 9.07744 15.7453 9.27468V10.7253C15.7454 10.9225 15.8154 11.1133 15.9429 11.2638L16.7524 12.2209C16.9789 12.4899 17.0123 12.8721 16.8358 13.1763L16.1688 14.3268C15.9929 14.6315 15.6446 14.7929 15.2984 14.7303L14.0646 14.5077C13.8708 14.4728 13.6708 14.5076 13.5002 14.6061L12.2438 15.3314C12.0731 15.4302 11.9426 15.586 11.8754 15.7716L11.4518 16.9512C11.3329 17.2825 11.0186 17.5034 10.6665 17.5031H9.33263C8.98089 17.5031 8.66702 17.2822 8.54813 16.9512L8.12462 15.7716C8.05742 15.5863 7.9273 15.4305 7.75697 15.3314L6.49978 14.6061C6.32918 14.5076 6.12923 14.4728 5.93538 14.5077L4.70153 14.7303C4.35506 14.7933 4.00637 14.6318 3.83034 14.3268L3.16339 13.1763C2.98689 12.8721 3.02024 12.4899 3.24676 12.2209L4.05626 11.2638C4.18376 11.1133 4.25377 10.9225 4.25385 10.7253V9.27468C4.25377 9.07744 4.18376 8.88662 4.05626 8.73612L3.2551 7.77906C3.02858 7.51005 2.99523 7.12783 3.17173 6.82366L3.83867 5.67318C4.01459 5.3685 4.36284 5.20706 4.70904 5.26968L5.94288 5.49227C6.13673 5.52718 6.33668 5.49233 6.50728 5.3939L7.76447 4.66859C7.93481 4.56946 8.06493 4.41368 8.13213 4.22841L8.55564 3.04875C8.67358 2.72029 8.98364 2.50005 9.33263 2.49686H10.6665Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <circle cx="9.99965" cy="9.99999" r="2.29262" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>
                                    </svg>
                                </span>
                                <span className="text fw-500">Settings</span>
                            </a>}
                            { accordionItemData.status === "unactive" && <a href="#" className="btn btn-primary btn--md mb-6 nowrap fsz-13" onClick={()=>setIsSettings(true)}>
                                <span className="text fw-500">Setup your host</span>
                            </a> }
                            { accordionItemData.status !== "unactive" && 
                            <a
                                href="#" className="btn btn-primary btn--md mb-6 nowrap fsz-13 min-w-90"
                                onClick={() => setListUnlist(accordionItemData) }
                            >
                                <span className="text fw-500">{accordionItemData.status === "not-listed" ? "List" : "Unlist"}</span>
                            </a> }
                        </div>
                    </div>
                </div>)}
                ContentRender={() => (<div className="dropdown-body px-14 border-top">
                    <div className="columns columns-20 pb-10">
                        <div className="col-3 col-991-4 col-768-6 col-578-12">
                            <ul className="custom-list mt-15">
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Total GPU TeraFLOPS:</span>
                                    <div className="info2 style--info mb-6">
                                        44.1 TFLOPS
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Max CUDA:</span>
                                    <div className="info2 style--info mb-6">
                                        11.3
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">GPU RAM:</span>
                                    <div className="info2 style--info mb-6">
                                        24 GB
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">GPU RAM Bandwidth:</span>
                                    <div className="info2 style--info mb-6">
                                        767.0 GB/s
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3 col-991-4 col-768-6 col-578-12">
                            <ul className="custom-list mt-15">
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Motherboard:</span>
                                    <div className="info2 style--info mb-6">
                                        ROMED8
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">PCIE:</span>
                                    <div className="info2 style--info mb-6">
                                        PCIE 4.0,16x
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">PCIE Bandwidth:</span>
                                    <div className="info2 style--info mb-6">
                                        23.2 GB/s
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Reliability:</span>
                                    <div className="info2 style--info mb-6">
                                        99.917%
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3 col-991-4 col-768-6 col-578-12">
                            <ul className="custom-list mt-15">
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">CPU:</span>
                                    <div className="info2 style--info mb-6">
                                        Xeon® E5-2696 v2
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Total of CPU:</span>
                                    <div className="info2 style--info mb-6">
                                        12.0/24 cpu
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Total System RAM:</span>
                                    <div className="info2 style--info mb-6">
                                        32/64 GB
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">GPU RAM Bandwidth:</span>
                                    <div className="info2 style--info mb-6">
                                        767.0 GB/s
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">DLPerf:</span>
                                    <div className="info2 style--info mb-6">
                                        33.6
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3 col-991-4 col-768-6 col-578-12">
                            <ul className="custom-list mt-15">
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Disc:</span>
                                    <div className="info2 style--info mb-6">
                                        Samsung 754.3 GB
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Disc Bandwidth:</span>
                                    <div className="info2 style--info mb-6">
                                        484 MB/s
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Upload Speed:</span>
                                    <div className="info2 style--info mb-6">
                                        <div className="d-flex align-items-center">
                                            642 Mbps
                                        </div>
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Download Speed:</span>
                                    <div className="info2 style--info mb-6">
                                        <div className="d-flex align-items-center">
                                            833 Mbps
                                        </div>
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Ports:</span>
                                    <div className="info2 style--info mb-6">
                                        100 ports
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>)}
                FooterRender={({accordionItemData}) => (<div className="dropdown-footer border-top px-14">
                    <div className="columns columns-16">
                        <div className="col-12">
                        <ul className="custom-list custom-list-row mt-15">
                                <li className="custom-list--item mr-20">
                                    <span className="info1 style--info mb-15">GPU:</span>
                                    <div className="info2 style--info mb-15">
                                        0%, 35,0C
                                    </div>
                                </li>
                                <li className="custom-list--item mr-20">
                                    <span className="info1 style--info mb-15">Earnings per day:</span>
                                    <div className="info2 style--info mb-15">
                                        $3.158 / day
                                    </div>
                                </li>
                                <li className="custom-list--item mr-20">
                                    <span className="info1 style--info mb-15">Earnings per hour:</span>
                                    <div className="info2 style--info mb-15">
                                        $.132 / hr
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-15">Status:</span>
                                    <div className={`style--info mb-15 color-${accordionItemData.status}`}>
                                        {accordionItemData.status === 'active' && "Active"}
                                        {accordionItemData.status === "unactive" && "Unactive"}
                                        {accordionItemData.status === "not-listed" && "Not Listed"}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>)}
            />
        </div>
    )
}
