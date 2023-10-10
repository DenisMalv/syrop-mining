import React, {useState,useEffect} from 'react'

import { SelectBox } from '../../components/base/Form/SelectBox'
import { Accordion } from '../../components/base/Accordion/Accordion'
import { Connect } from '../../components/modal/Connect/Connect';
import { Link } from "react-router-dom";

const sortOptions = [
    { label: "Sort by Default", value: 'default' },
    { label: 'Sort by Price (high)', value: 'sort-by-price-high' },
    { label: 'Sort by Price (low)', value: 'sort-by-price-low' },
    { label: 'Sort by TFLOPS', value: 'sort-by-tflops' },
    { label: 'Sort by DLPerf', value: 'sort-by-dlperf' },
]

const itemsSort = [
    { value: '1' },
]
const BackgroundTasks = () => {

    const [isConnectShown, setIsConnectShown] = useState(false);
    const [isStart,setIsStart] = useState(true)
    const [isDropOpen,setIsDropOpen] = useState(false)
    const close = () => {
        setIsConnectShown(false);
    }

    return (
        <div className="flex-content">
            <div className="content-body p-30 w-100 pt-0">
                <div className="head-flex align-items-center border-bottom mb-30">
                    <div className="head-flex--item d-flex flex-column">
                        <ul className="custom-list custom-list-row mt-15">
                            <li className="custom-list--item mr-20">
                                <h4 className="heading heading-h4 mb-15 ff-main fw-400">Set background task</h4>
                            </li>
                            <li className="custom-list--item mr-20">
                                <Link to="/docker-image" className="btn btn--bordered r-2 btn--lg mb-15 fsz-13">Select Docker Image</Link>
                            </li>
                            <li className="custom-list--item">
                                <span className="info1 style--info mb-15">Image:</span>
                                <div className="info2 style--info mb-15">
                                    <a href="#" className="default--link fw-500">
                                        <span className="info">nvidia / cuda</span>
                                        <span className="ico ico-16 ml-6">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.66602 8.66703L7.30161 9.30263C7.80192 9.80297 8.4805 10.0841 9.18807 10.0841C9.89563 10.0841 10.5742 9.80297 11.0745 9.30263L13.096 7.28112C14.3046 6.07236 14.3046 4.11272 13.096 2.90397V2.90397C11.8873 1.69534 9.92763 1.69534 8.71887 2.90397L8.12729 3.49621" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M9.33404 6.66623L8.69844 6.03063C8.19813 5.53029 7.51955 5.24921 6.81199 5.24921C6.10442 5.24921 5.42584 5.53029 4.92553 6.03063L2.90403 8.05214C1.6954 9.2609 1.6954 11.2205 2.90403 12.4293V12.4293C4.11278 13.6379 6.07243 13.6379 7.28118 12.4293L7.87276 11.837" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="head-flex--item d-flex">
                        <ul className="custom-list custom-list-row mt-15">
                            <li className="custom-list--item mr-20">
                                <span className="info1 style--info mb-15">Launch Type:</span>
                                <div className="info2 style--info mb-15">
                                    ssh
                                </div>
                            </li>
                            <li className="custom-list--item">
                                <span className="info1 style--info mb-15">One-start Script:</span>
                                <div className="info2 style--info mb-15">
                                    Not set
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="head-flex align-items-center">
                    <div className="head-flex--item d-flex flex-column mb-sm-15">
                        <h4 className="heading heading-h4">My Hosts</h4>
                    </div>
                    <div className="head-flex--item d-flex mb-sm-15">
                        {/* <div className="custom-select select--small" data-select=""> */}
                            <SelectBox
                                options={sortOptions}
                                defaultValue="default"
                                onSelect={(value) => console.log(value)}
                                disableInputMarginBottom
                                standartInputFontSize
                                isDropOpen={isDropOpen}
                                setIsDropOpen={setIsDropOpen}
                            />
                        {/* </div> */}
                    </div>
                </div>

                <div className="dropdowns">
                <Accordion
                    items={itemsSort}
                    accordionHeaderActiveClassName="active--dropdown"
                    accordionClassName="dropdown mt-15 r-2"
                    HeaderRender={() => (<div className="dropdown-head px-14" data-dropdown--action="">
                    <div className="info pt-6 mr-15" style={{ pointerEvents: 'none' }}>
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
                        <ul className="custom-list custom-list-row" style={{ pointerEvents: 'none' }}>
                            <li className="custom-list--item mb-6 flex-auto justify-content-end mr-26">
                                <span className="info1 style--info">Price:</span>
                                <div className="info2 style--info">
                                    $0.302/hr
                                </div>
                            </li>
                        </ul>
                        <div className="dbl-btns dbl-btns--10 ">
                            <Link to="/docker-image-settings" href="#" className="btn btn-widget btn-widget--34 btn--bordered-2 r-2 mb-6">
                                <span className="ico">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.6665 2.49686C11.0183 2.49686 11.3321 2.71771 11.451 3.04875L11.8745 4.22841C11.9417 4.41392 12.0722 4.56978 12.243 4.66859L13.4994 5.3939C13.67 5.49233 13.8699 5.52718 14.0638 5.49227L15.2976 5.26968C15.6441 5.20668 15.9928 5.36818 16.1688 5.67318L16.8358 6.82366C17.0123 7.12783 16.9789 7.51005 16.7524 7.77906L15.9429 8.73612C15.8154 8.88662 15.7454 9.07744 15.7453 9.27468V10.7253C15.7454 10.9225 15.8154 11.1133 15.9429 11.2638L16.7524 12.2209C16.9789 12.4899 17.0123 12.8721 16.8358 13.1763L16.1688 14.3268C15.9929 14.6315 15.6446 14.7929 15.2984 14.7303L14.0646 14.5077C13.8708 14.4728 13.6708 14.5076 13.5002 14.6061L12.2438 15.3314C12.0731 15.4302 11.9426 15.586 11.8754 15.7716L11.4518 16.9512C11.3329 17.2825 11.0186 17.5034 10.6665 17.5031H9.33263C8.98089 17.5031 8.66702 17.2822 8.54813 16.9512L8.12462 15.7716C8.05742 15.5863 7.9273 15.4305 7.75697 15.3314L6.49978 14.6061C6.32918 14.5076 6.12923 14.4728 5.93538 14.5077L4.70153 14.7303C4.35506 14.7933 4.00637 14.6318 3.83034 14.3268L3.16339 13.1763C2.98689 12.8721 3.02024 12.4899 3.24676 12.2209L4.05626 11.2638C4.18376 11.1133 4.25377 10.9225 4.25385 10.7253V9.27468C4.25377 9.07744 4.18376 8.88662 4.05626 8.73612L3.2551 7.77906C3.02858 7.51005 2.99523 7.12783 3.17173 6.82366L3.83867 5.67318C4.01459 5.3685 4.36284 5.20706 4.70904 5.26968L5.94288 5.49227C6.13673 5.52718 6.33668 5.49233 6.50728 5.3939L7.76447 4.66859C7.93481 4.56946 8.06493 4.41368 8.13213 4.22841L8.55564 3.04875C8.67358 2.72029 8.98364 2.50005 9.33263 2.49686H10.6665Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <circle cx="9.99965" cy="9.99999" r="2.29262" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>
                                    </svg>
                                </span>
                            </Link>
                            <a href="#" className="btn btn-widget btn-widget--34 btn--bordered-2 r-2 mb-6">
                                <span className="ico">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.66 10.0267C16.6533 11.7242 16.0091 13.4192 14.7141 14.7142C12.1108 17.3175 7.88913 17.3175 5.28579 14.7142C4.82246 14.2508 4.44579 13.735 4.14746 13.1883" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.33643 9.89168C3.36309 8.22168 4.01143 6.56001 5.28559 5.28584C7.88893 2.68251 12.1106 2.68251 14.7139 5.28584C15.1773 5.74918 15.5539 6.26501 15.8523 6.81168" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M13.2939 6.81251H16.2398V3.86584" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.7056 13.1875H3.75977V16.1342" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </a>

                            <a href="#" className="btn btn-widget btn-widget--34 btn--bordered r-2 mb-6" onClick={()=>setIsStart(!isStart)}>
                                {isStart 
                                    ? <span className="ico">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.25 3.75V14.25M12.75 3.75V14.25" stroke="currentColor" strokeLinecap="round"></path>
                                        </svg>
                                    </span> 
                                    :  <span className="ico">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 2.25L14.25 9L3.75 15.75V2.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>}
                            </a>  
                            <a href="#" className="btn btn-primary btn--md mb-6 nowrap" onClick={() => setIsConnectShown(true)}>
                                <span className="text fw-500 fsz-13">Connect</span>
                            </a>
                        </div>
                    </div>
                </div>)}
                    ContentRender={() => (<div className="dropdown-body px-14 border-top">
                    <div className="columns columns-16 pb-10">
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
                                            <span className="ico ico-16 mr-6">
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.33333 3.33334V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M4.99939 6.66667L8.33339 3.33267L11.6674 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                            642 Mbps
                                        </div>
                                    </div>
                                </li>
                                <li className="custom-list--item">
                                    <span className="info1 style--info mb-6">Download Speed:</span>
                                    <div className="info2 style--info mb-6">
                                        <div className="d-flex align-items-center">
                                            <span className="ico ico-16 mr-6">
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.33341 12.6667L8.33342 3.33332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M11.6674 9.33333L8.33336 12.6673L4.99936 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
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
                    FooterRender={() => (<div className="dropdown-footer px-14 border-top">
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
                                <li className="custom-list--item mr-20">
                                    <span className="info1 style--info mb-15">Current image:</span>
                                    <div className="info2 style--info mb-15">
                                        No Image
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>)}
            />
            <Accordion
                    items={itemsSort}
                    accordionHeaderActiveClassName="active--dropdown"
                    accordionClassName="dropdown mt-15 r-2"
                    HeaderRender={() => (
                    <div className="dropdown-head px-14" data-dropdown--action="">
                        <div className="info pt-6 mr-15" style={{ pointerEvents: 'none' }}>
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
                            <ul className="custom-list custom-list-row" style={{ pointerEvents: 'none' }}>
                                <li className="custom-list--item mb-6 flex-auto justify-content-end mr-26">
                                    <span className="info1 style--info">Price:</span>
                                    <div className="info2 style--info">
                                        $0.302/hr
                                    </div>
                                </li>
                            </ul>
                            <Link to="/docker-image" className="btn btn-primary btn--md mb-6 nowrap">
                                <span className="text fw-500 fsz-13">Set Image</span>
                            </Link>
                        </div>
                    </div>)}
                    ContentRender={() => (<div className="dropdown-body px-14 border-top">
                    <div className="columns columns-16 pb-10">
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
                                                <span className="ico ico-16 mr-6">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.33333 3.33334V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M4.99939 6.66667L8.33339 3.33267L11.6674 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </span>
                                                642 Mbps
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <span className="info1 style--info mb-6">Download Speed:</span>
                                        <div className="info2 style--info mb-6">
                                            <div className="d-flex align-items-center">
                                                <span className="ico ico-16 mr-6">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.33341 12.6667L8.33342 3.33332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M11.6674 9.33333L8.33336 12.6673L4.99936 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </span>
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
                    FooterRender={() => (<div className="dropdown-footer px-14 border-top">
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
                                    <li className="custom-list--item mr-20">
                                        <span className="info1 style--info mb-15">Current image:</span>
                                        <div className="info2 style--info mb-15">
                                                <a href="#" class="default--link fw-500">
                                                    <span class="info">nvidia / cuda</span>
                                                    <span class="ico ico-16 ml-6">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6.66602 8.66703L7.30161 9.30263C7.80192 9.80297 8.4805 10.0841 9.18807 10.0841C9.89563 10.0841 10.5742 9.80297 11.0745 9.30263L13.096 7.28112C14.3046 6.07236 14.3046 4.11272 13.096 2.90397V2.90397C11.8873 1.69534 9.92763 1.69534 8.71887 2.90397L8.12729 3.49621" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M9.33404 6.66623L8.69844 6.03063C8.19813 5.53029 7.51955 5.24921 6.81199 5.24921C6.10442 5.24921 5.42584 5.53029 4.92553 6.03063L2.90403 8.05214C1.6954 9.2609 1.6954 11.2205 2.90403 12.4293V12.4293C4.11278 13.6379 6.07243 13.6379 7.28118 12.4293L7.87276 11.837" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>)}
                />
            </div>
        </div>

        <Connect isShown={isConnectShown} onClose={() => close()} />
    </div>
    )
}

export default BackgroundTasks
