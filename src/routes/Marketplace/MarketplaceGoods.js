import React, {useEffect} from "react";
import { Accordion } from "../../components/base/Accordion/Accordion";

import { useSelector } from "react-redux";

export const MarketplaceGoods = () => {
    const goods = useSelector(state => state.marketplase.acordeonMutatedArray);
    // console.log(goods);

    // useEffect(()=> {
    //     const queryString = window.location.search;

    //     if(queryString){
    //         const urlParams = new URLSearchParams(queryString);
    //         const searchParam = urlParams.get('search');
    //         console.log('searchParam:', searchParam);
    //     }

    // },[]);

    return (
       <>
           <div className="content-body--body px-18 scroll--style">
               <Accordion
                   items={goods}
                   defaultActiveItem={0}
                   accordionHeaderActiveClassName="active--dropdown"
                   accordionClassName="dropdown mt-15 r-2"
                   HeaderRender={({accordionItemData, isOpen}) => (<div className="dropdown-head px-14">
                       <div className="info pt-6 mr-15" style={{ pointerEvents: 'none' }}>
                           <span className="ico ico-arrow mb-6 mr-10">
                               <svg width="22"
                                    height="22"
                                    viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                               >
                                   <path d="M7.33337 9.16667L11 12.8333L14.6667 9.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                               </svg>
                           </span>
                           <ul className="custom-list custom-list-row">
                               <li className="custom-list--item mb-6">
                                   <span className="info1 style--info">1x</span>
                                   <div className="info2 style--info">
                                       {accordionItemData.name}
                                   </div>
                               </li>
                               <li className="custom-list--item mb-6">
                                   <span className="info1 style--info">ID:</span>
                                   <div className="info2 style--info">
                                       {accordionItemData.id}
                                   </div>
                               </li>
                               <li className="custom-list--item mb-6">
                                   <span className="info1 style--info">Location:</span>
                                   <div className="info2 style--info">
                                       {accordionItemData.location}
                                   </div>
                               </li>
                               <li className="custom-list--item mb-6">
                                   <span className="info1 style--info">Max Duration:</span>
                                   <div className="info2 style--info">
                                       {accordionItemData.max_duration} Days
                                   </div>
                               </li>
                           </ul>
                       </div>
                       <div className="action pt-6">
                           <ul className="custom-list custom-list-row" style={{ pointerEvents: 'none' }}>
                               <li className="custom-list--item mb-6 flex-auto justify-content-end mr-26">
                                   <span className="info1 style--info">Price:</span>
                                   <div className="info2 style--info">
                                       ${accordionItemData.price}/hr
                                   </div>
                               </li>
                           </ul>
                           <a href="#" className="btn btn--bordered btn--bordered-shadow-dander btn--md mb-6 nowrap">
                               <span className="text fw-500">Rent Host</span>
                           </a>
                       </div>
                   </div>)}
                   ContentRender={({accordionItemData, isOpen}) => (<div className="dropdown-body px-14 border-top">
                       <div className="columns columns-16 border-bottom pb-10">
                           <div className="col-4 col-991-6 col-576-12">
                               <ul className="custom-list mt-15">
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Total GPU TeraFLOPS:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.totalGPU_teraFLOPS}
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Max CUDA:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.max_CUDA}
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">GPU RAM:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.gpu_ram} GB
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">GPU RAM Bandwidth:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.gpu_ram_Bandwidth} GB/s
                                       </div>
                                   </li>
                               </ul>
                           </div>
                           <div className="col-4 col-991-6 col-576-12">
                               <ul className="custom-list mt-15">
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Motherboard:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.Motherboard}
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">PCIE:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.PCIE}
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">PCIE Bandwidth:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.PCIE_Bandwidth} GB/s
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Reliability:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.Reliability}%
                                       </div>
                                   </li>
                               </ul>
                           </div>
                           <div className="col-4 col-991-6 col-576-12">
                               <ul className="custom-list mt-15">
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">CPU:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.CPU}
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Total of CPU:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.total_of_cpu}
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Total System RAM:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.total_system_ram} GB
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">GPU RAM Bandwidth:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.gpu_ram_Bandwidth} GB/s
                                       </div>
                                   </li>
                               </ul>
                           </div>
                       </div>
                       <div className="columns columns-16">
                           <div className="col-4 col-991-6 col-576-12">
                               <ul className="custom-list mt-15">
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Upload Speed:</span>
                                       <div className="info2 style--info mb-6">
                                           <div className="d-flex align-items-center">
                                                <span className="ico ico-16 mr-6">
                                                    <svg width="17" height="16"
                                                         viewBox="0 0 17 16"
                                                         fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.33333 3.33334V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M4.99939 6.66667L8.33339 3.33267L11.6674 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </span>
                                               {accordionItemData.upload_speed} Mbps
                                           </div>
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Download Speed:</span>
                                       <div className="info2 style--info mb-6">
                                           <div className="d-flex align-items-center">
                                               <span className="ico ico-16 mr-6">
                                                   <svg width="17" height="16"
                                                        viewBox="0 0 17 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                   >
                                                       <path d="M8.33341 12.6667L8.33342 3.33332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                       <path d="M11.6674 9.33333L8.33336 12.6673L4.99936 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                               </span>
                                               {accordionItemData.download_speed} Mbps
                                           </div>
                                       </div>
                                   </li>
                               </ul>
                           </div>
                           <div className="col-4 col-991-6 col-576-12">
                               <ul className="custom-list mt-15">
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Disc:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.disc}
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Disc Bandwidth:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.disc_bandwidth} MB/s
                                       </div>
                                   </li>
                               </ul>
                           </div>
                           <div className="col-4 col-991-6 col-576-12">
                               <ul className="custom-list mt-15">
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">DLPerf:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.dlperf}
                                       </div>
                                   </li>
                                   <li className="custom-list--item">
                                       <span className="info1 style--info mb-6">Ports:</span>
                                       <div className="info2 style--info mb-6">
                                           {accordionItemData.ports} ports
                                       </div>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>)}
               />
           </div>
       </>
    )
}

