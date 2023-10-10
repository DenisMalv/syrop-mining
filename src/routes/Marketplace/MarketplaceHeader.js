import React, { useState } from "react";
import { SelectBox } from "../../components/base/Form/SelectBox";

import { useDispatch } from "react-redux";
import { filterGPUReducer, sortReducer } from "../../redux/marketplace/marketplace-slice";

import IcoAfgan from "../../assets/img/ico-afgan.svg";
import IcoAlbania from "../../assets/img/ico-albania.svg"
import IcoAlgeria from "../../assets/img/ico-algeria.svg"
import IcoAmericanSamoa from "../../assets/img/ico-samoa.svg";
import IcoAndorra from "../../assets/img/ico-andorra.svg";
import IcoAllCountries from "../../assets/img/ico-world.svg"

const gpuOptions = [
    { value: 'default', label: "Any GPU" },
    { value: 'rtx3090', label: 'RTX 3090'},
    { value: 'rtxa6000', label: 'RTX A6000' },
    { value: 'teslav100', label: 'Tesla V100' },
    { value: 'a100pcie', label: 'A100 PCIE' },
    { value: 'a100sxm4', label: 'A100 SXM4' },
    { value: 'rtx3080ti', label: 'RTX 3080 Ti' },
    { value: 'rtx3080', label: 'RTX 3080' },
    { value: 'rtx3070', label: 'RTX 3070' },
    { value: 'rtx3060', label: 'RTX 3060' }
]
const sortOptions = [
    { label: "Sort by Default", value: 'default' },
    { label: 'Sort by Price (high)', value: 'by-price-high' },
    { label: 'Sort by Price (low)', value: 'by-price-low' },
    { label: 'Sort by TFLOPS', value: 'by-tflops' },
    { label: 'Sort by DLPerf', value: 'by-dlperf' },
]

const countryOptions = [
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAllCountries} /> All Countries</div>, value: 'default' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAfgan} /> Afghanistan</div>, value: 'afghanistan' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAlbania} /> Albania</div>, value: 'albania' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAlgeria} /> Algeria</div>, value: 'algeria' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAmericanSamoa} /> American Samoa</div>, value: 'american-samoa' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAndorra} /> Andorra</div>, value: 'andorra' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAlbania} />Angola</div>, value: 'angola' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAfgan} /> Afghanistan</div>, value: 'afghanistan' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAlgeria} />Algeria</div>, value: 'algeria' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAmericanSamoa} /> American Samoa</div>, value: 'american-samoa' },
    { label: <div style={{display: "flex", alignItems: "center", columnGap: "10px"}}><img src={IcoAndorra} />Andorra</div>, value: 'andorra' },
]

const sidebarToggle = (e) => {
    e.preventDefault();
    document.querySelector('.controls-panel-js').classList.toggle("active--controls");
}

export const MarketplaceHeader = () => {
    const [mainFilter, setMainFilter] = useState('Interruptible');
    const filtersArray = ['Interruptible', 'On-Demand'];

    const dispatch = useDispatch();
    return (
        <div className="content-body--head px-18 pt-15 border-bottom">
            <div className="dbl-options js-scroller">
                <div className="option">
                    <div className="dbl-btns dbl-btns--10">
                        <div className="mb-15 visible-991">
                            <button
                                type="button"
                                className="btn-widget btn btn-primary btn-widget--36 btn--controls"
                                onClick={sidebarToggle}
                            >
                                <span className="ico ico-20">
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48px" height="48px">
                                        <path
                                            d="M52.339,28.023C53.299,28.188,54,29.02,54,29.994v4.012c0,0.974-0.701,1.806-1.661,1.971l-3.464,0.596	c-0.395,1.461-0.969,2.846-1.707,4.129l2.026,2.868c0.562,0.795,0.469,1.88-0.219,2.568l-2.837,2.837	c-0.689,0.689-1.773,0.781-2.568,0.219l-2.868-2.025c-1.283,0.738-2.668,1.311-4.129,1.707l-0.596,3.464	C35.812,53.299,34.98,54,34.006,54h-4.012c-0.974,0-1.806-0.701-1.971-1.661l-0.596-3.464c-1.461-0.395-2.846-0.969-4.129-1.707	l-2.868,2.025c-0.795,0.562-1.88,0.469-2.568-0.219l-2.837-2.837c-0.688-0.689-0.781-1.773-0.219-2.568l2.026-2.868	c-0.738-1.283-1.312-2.668-1.707-4.129l-3.464-0.596C10.701,35.812,10,34.98,10,34.006v-4.012c0-0.974,0.701-1.806,1.661-1.971	l3.464-0.596c0.395-1.461,0.969-2.846,1.707-4.129l-2.026-2.868c-0.562-0.795-0.469-1.88,0.219-2.568l2.837-2.837	c0.689-0.688,1.773-0.781,2.568-0.219l2.868,2.026c1.283-0.738,2.668-1.311,4.129-1.707l0.596-3.464	C28.188,10.701,29.02,10,29.994,10h4.012c0.974,0,1.806,0.701,1.971,1.661l0.596,3.464c1.461,0.395,2.846,0.969,4.129,1.707	l2.868-2.026c0.795-0.562,1.88-0.469,2.568,0.219l2.837,2.837c0.688,0.688,0.781,1.773,0.219,2.568l-2.026,2.868	c0.738,1.283,1.312,2.668,1.707,4.129L52.339,28.023z M32,40c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S27.582,40,32,40z">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>

                        { filtersArray.map((item, index) => {
                            return <button 
                                key={index} type="button" onClick={(e)=> {e.preventDefault(); setMainFilter(item);}}
                                className={`btn btn--sm btn--status mb-15 fw-500 ${mainFilter === item ? 'btn--status--active' : ''}`}>
                                <span className="info">{ item }</span>
                            </button>
                        }) }
                    </div>
                </div>
                <div className="option">
                    <div className="option">
                        <div className="dbl-btns dbl-btns--10">
                            <div className="custom-select select--small fixed--select" data-select="">
                                <SelectBox
                                    options={gpuOptions}
                                    defaultValue="default"
                                    onSelect={(selectedValue) => dispatch(filterGPUReducer({filter_type: selectedValue.value}))}
                                    // selectBoxControlStyle={}
                                />
                            </div>
                            <div className="custom-select custom-select--countries select--small fixed--select" data-select="">
                                <SelectBox
                                    options={countryOptions}
                                    widthMenu="200px"
                                    defaultValue="default"
                                    onSelect={(value) => console.log(value)}
                                />
                            </div>
                            <div className="custom-select select--small fixed--select" data-select="">
                                <SelectBox
                                    options={sortOptions}
                                    defaultValue="default"
                                    onSelect={(selectedValue) => dispatch(sortReducer({sort_type: selectedValue.value}))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
