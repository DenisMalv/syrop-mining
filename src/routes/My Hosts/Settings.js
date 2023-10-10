import React, {useEffect, useState, useRef, forwardRef} from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import { getPrices,getInternet,getGpu,getAvailableUntil,getLoading,getError,setPrices,setInternet,setGpu,setAvailableUntil } from '../../redux/my hosts/my-host-slice';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/components/date-picker.css";

import { Button } from '../../components/base/Button/Button';
import { SearchInput } from "../../components/base/Form/SearchInput";
import { ReactComponent as IcoPagination } from '../../assets/img/ico-arrow-pagin.svg';
import {SliderInput} from "../../components/base/Form/SliderInput";
import TimePicker from "../../components/base/Pickers/TimePicker";

const Settings = ({setIsSettings}) => {
    const [startDate, setStartDate] = useState(new Date());
    // SELECTORS
    const dispatch = useDispatch()

    const pricesSelector = useSelector(getPrices)
    const internetSelector = useSelector(getInternet)
    const gpuSelector = useSelector(getGpu)
    const availableUntilSelector = useSelector(getAvailableUntil)
    const isLoading = useSelector(getLoading)
    const isError = useSelector(getError)

    // STATE
    const reset = {pricesSelector,internetSelector,gpuSelector,availableUntilSelector}
    const [prices,setPricess] = useState(pricesSelector)
    const [internet,setInternett] = useState(internetSelector)
    const [gpu,setGpuu] = useState(gpuSelector)
    const [available,setAvailablee] = useState(availableUntilSelector)
    // EFFECTS
    // METHODS

    const handleSetState = (callback, state, key, value) =>{
        callback({...state,[key]:value})
    }
    const handleReset = ()=>{
        setPricess(reset.pricesSelector);
        setInternett(reset.internetSelector)
        setGpuu(reset.gpuSelector)
        setAvailablee(reset.availableUntilSelector)
    }
    const handleSave = async () =>{
        dispatch(setPrices(prices))
        dispatch(setInternet(internet))
        dispatch(setGpu(gpu))
        dispatch(setAvailableUntil(available))
        setIsSettings(false)
    }

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
            <div className="input-custom__wrap-input input-custom__wrap-input--icon-l">
                <span className="input-custom__wrap-input--icon"><span className="icon-ico-time-2"></span></span>
                <input className="input-custom__input" onClick={onClick} ref={ref} value={value} readOnly/>
                    <span className="input-custom__right-info d-flex">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7.01316 12.729C6.87516 12.729 6.76316 12.841 6.76416 12.979C6.76416 13.117 6.87616 13.229 7.01416 13.229C7.15216 13.229 7.26416 13.117 7.26416 12.979C7.26416 12.841 7.15216 12.729 7.01316 12.729" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12.0132 12.729C11.8752 12.729 11.7632 12.841 11.7642 12.979C11.7642 13.117 11.8762 13.229 12.0142 13.229C12.1522 13.229 12.2642 13.117 12.2642 12.979C12.2642 12.841 12.1522 12.729 12.0132 12.729" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17.0132 12.729C16.8752 12.729 16.7632 12.841 16.7642 12.979C16.7642 13.117 16.8762 13.229 17.0142 13.229C17.1522 13.229 17.2642 13.117 17.2642 12.979C17.2642 12.841 17.1522 12.729 17.0132 12.729" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7.01316 16.729C6.87516 16.729 6.76316 16.841 6.76416 16.979C6.76416 17.117 6.87616 17.229 7.01416 17.229C7.15216 17.229 7.26416 17.117 7.26416 16.979C7.26416 16.841 7.15216 16.729 7.01316 16.729" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12.0132 16.729C11.8752 16.729 11.7632 16.841 11.7642 16.979C11.7642 17.117 11.8762 17.229 12.0142 17.229C12.1522 17.229 12.2642 17.117 12.2642 16.979C12.2642 16.841 12.1522 16.729 12.0132 16.729" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
            </div>
    ));

    return (
        <div className="flex-content">
            <div className="content-body w-100 my-account-page">
                <div className="mb-10">
                    <a href="#" className="btn color-white opacity-50" onClick={()=>setIsSettings(false)}>
                        <IcoPagination/>
                        <span className="ml-12">Back</span>
                    </a>
                </div>

                <div className="d-flex flex-wrap  justify-content-between align-items-center w-100 ">
                    <h2 className="heading heading-h2 mb-30 pr-sm-20 ttu">Host Settings</h2>
                    <div className="group-btn mb-30">
                        <Button text={"Reset"} customButtonClass={"btn btn--bordered btn--md fsz-13 mr-10 mb-sm-15 min-w-90"} onClick={handleReset}/>
                        <Button customButtonClass={"btn btn-primary btn--md fsz-13"} text={"Save Changes"} type={"primary"} size={"medium"} onClick={handleSave}/>
                    </div>
                </div>

                <div className="max-w-800">
                    <div className="row inner-content-w-100">
                        <h4 className="heading heading-h4 mb-15 heading--basic">Set Prices</h4>

                        <div className="input-custom col-12 col-sm-6 mb-15 ">
                            <label className="input-custom__label">On-demand price</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="text" value={prices.one_demand_price} onChange={(e)=>handleSetState(setPricess,prices,"one_demand_price",+e.target.value)}/>
                                <span className="input-custom__right-info">$ / hr / GPU</span>
                            </div>
                        </div>
                        <div className="input-custom col-12 col-sm-6 mb-15">
                            <label className="input-custom__label">Min bid price</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="text" value={prices.mid_bid_ptice} onChange={(e)=>handleSetState(setPricess,prices,"mid_bid_ptice",+e.target.value)}/>
                                <span className="input-custom__right-info">$ / hr / GPU</span>
                            </div>
                        </div>
                        <div className="input-custom col-12 col-sm-6 mb-30">
                            <label className="input-custom__label">Storage price</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="text" value={prices.storage_price} onChange={(e)=>handleSetState(setPricess,prices,"storage_price",+e.target.value)}/>
                                <span className="input-custom__right-info">$ / GB / Mo</span>
                            </div>
                        </div>

                        <h4 className="heading heading-h4 mb-15 heading--basic">Internet</h4>

                        <div className="input-custom col-12 col-sm-6 mb-15 ">
                            <label className="input-custom__label">Upload price</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="text" value={internet.upload_price} onChange={(e)=>handleSetState(setInternett,internet,"upload_price",+e.target.value)}/>
                                <span className="input-custom__right-info">$ / GB</span>
                            </div>
                        </div>
                        <div className="input-custom col-12 col-sm-6 mb-30">
                            <label className="input-custom__label">Download price</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="text" value={internet.download_price} onChange={(e)=>handleSetState(setInternett,internet,"download_price",+e.target.value)}/>
                                <span className="input-custom__right-info">$ / GB</span>
                            </div>
                        </div>

                        <h4 className="heading heading-h4 mb-15 heading--basic">GPU</h4>

                        <div className="input-custom col-12 col-sm-6 mb-15">
                            <label className="input-custom__label">Min GPUs per instance</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="email" value={gpu.min_gpu} onChange={(e)=>handleSetState(setGpuu,gpu,"min_gpu",+e.target.value)}/>
                            </div>
                        </div>

                        <h4 className="heading heading-h4 mb-15 heading--basic">Available Until</h4>

                        <div className="input-custom col-12 col-sm-6 mb-15">
                            <label className="input-custom__label">Date</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                customInput={<CustomInput />}
                            />
                        </div>
                        <div className="input-custom col-12 col-sm-6 mb-15">
                            <label className="input-custom__label">Time</label>
                            <TimePicker
                                onInput={(value) => console.log(value)}
                            />
                            {/*<div className="time-picker" data-time-picker="">*/}
                            {/*    <div className="input-custom__wrap-input input-custom__wrap-input--icon-l">*/}
                            {/*        <span className="input-custom__wrap-input--icon">*/}
                            {/*            <span className="icon-ico-time-2"></span>*/}
                            {/*        </span>*/}
                            {/*        <input className="input-custom__input input-custom__input--time" type="text" placeholder="Pick time" value={available.time} onChange={(e)=>handleSetState(setAvailablee,available,"time",e.target.value)}/>*/}
                            {/*        <span className="input-custom__right-info d-flex">*/}
                            {/*        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <path d="M15.7272 12.1092H11.4629" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>*/}
                            {/*            <circle cx="12.0152" cy="11.5569" r="8.25344" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>*/}
                            {/*            <path d="M11.4624 12.1092V6.97168" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>*/}
                            {/*        </svg>*/}
                            {/*    </span>*/}
                            {/*    </div>*/}
                            {/*    <div className="input-custom__time-drop">*/}
                            {/*        <button className="input-custom__time-drop-btn">12:00 AM</button>*/}
                            {/*        <div className="input-custom__time-drop-selects">*/}
                            {/*            <div className="input-custom__time-drop-select input-custom__time-drop-select-first" data-type="hour">*/}
                            {/*                <button className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--t" data-role="plus">*/}
                            {/*                    <span className="icon-ico-chevron-top">*/}
                            {/*                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                            <path fillRule="evenodd" clipRule="evenodd" d="M8.28033 4.78033C7.98744 5.07322 7.51256 5.07322 7.21967 4.78033L4.25 1.81066L1.28033 4.78033C0.987436 5.07322 0.512563 5.07322 0.219669 4.78033C-0.0732236 4.48744 -0.0732236 4.01256 0.219669 3.71967L3.71967 0.219669C4.01256 -0.0732235 4.48744 -0.0732235 4.78033 0.219669L8.28033 3.71967C8.57322 4.01256 8.57322 4.48744 8.28033 4.78033Z" fill="#6E6B7B"></path>*/}
                            {/*                        </svg>*/}
                            {/*                    </span>*/}
                            {/*                </button>*/}
                            {/*                <input type="text" className="input-custom__time-drop-select-input time-hours-input" value="12" readOnly/>*/}
                            {/*                <button className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--b" data-role="minus">*/}
                            {/*                    <span className="icon-ico-chevron-bottom">*/}
                            {/*                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                            <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L4.25 3.18934L7.21967 0.21967C7.51256 -0.0732233 7.98744 -0.0732233 8.28033 0.21967C8.57322 0.512563 8.57322 0.987437 8.28033 1.28033L4.78033 4.78033C4.48744 5.07322 4.01256 5.07322 3.71967 4.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#6E6B7B"></path>*/}
                            {/*                        </svg>*/}
                            {/*                    </span>*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*            <div className="input-custom__time-drop-select" data-type="minutes">*/}
                            {/*                <button className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--t" data-role="plus">*/}
                            {/*                    <span className="icon-ico-chevron-top">*/}
                            {/*                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                        <path fillRule="evenodd" clipRule="evenodd" d="M8.28033 4.78033C7.98744 5.07322 7.51256 5.07322 7.21967 4.78033L4.25 1.81066L1.28033 4.78033C0.987436 5.07322 0.512563 5.07322 0.219669 4.78033C-0.0732236 4.48744 -0.0732236 4.01256 0.219669 3.71967L3.71967 0.219669C4.01256 -0.0732235 4.48744 -0.0732235 4.78033 0.219669L8.28033 3.71967C8.57322 4.01256 8.57322 4.48744 8.28033 4.78033Z" fill="#6E6B7B"></path>*/}
                            {/*                        </svg>*/}
                            {/*                    </span>*/}
                            {/*                </button>*/}
                            {/*                <input type="text" className="input-custom__time-drop-select-input time-minutes-input" value="00" readOnly/>*/}
                            {/*                <button className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--b" data-role="minus">*/}
                            {/*                    <span className="icon-ico-chevron-bottom">*/}
                            {/*                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L4.25 3.18934L7.21967 0.21967C7.51256 -0.0732233 7.98744 -0.0732233 8.28033 0.21967C8.57322 0.512563 8.57322 0.987437 8.28033 1.28033L4.78033 4.78033C4.48744 5.07322 4.01256 5.07322 3.71967 4.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#6E6B7B"></path>*/}
                            {/*                        </svg>*/}
                            {/*                    </span>*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*            <div className="input-custom__time-drop-select" data-type="timeSnap">*/}
                            {/*                <button className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--t" data-role="plus">*/}
                            {/*                    <span className="icon-ico-chevron-top">*/}
                            {/*                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                        <path fillRule="evenodd" clipRule="evenodd" d="M8.28033 4.78033C7.98744 5.07322 7.51256 5.07322 7.21967 4.78033L4.25 1.81066L1.28033 4.78033C0.987436 5.07322 0.512563 5.07322 0.219669 4.78033C-0.0732236 4.48744 -0.0732236 4.01256 0.219669 3.71967L3.71967 0.219669C4.01256 -0.0732235 4.48744 -0.0732235 4.78033 0.219669L8.28033 3.71967C8.57322 4.01256 8.57322 4.48744 8.28033 4.78033Z" fill="#6E6B7B"></path>*/}
                            {/*                        </svg>*/}
                            {/*                    </span>*/}
                            {/*                </button>*/}
                            {/*                <input type="text" className="input-custom__time-drop-select-input time-span-input" value="AM" readOnly/>*/}
                            {/*                <button className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--b" data-role="minus">*/}
                            {/*                    <span className="icon-ico-chevron-bottom">*/}
                            {/*                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L4.25 3.18934L7.21967 0.21967C7.51256 -0.0732233 7.98744 -0.0732233 8.28033 0.21967C8.57322 0.512563 8.57322 0.987437 8.28033 1.28033L4.78033 4.78033C4.48744 5.07322 4.01256 5.07322 3.71967 4.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#6E6B7B"></path>*/}
                            {/*                        </svg>*/}
                            {/*                    </span>*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="input-custom__time-drop-btn-wrap"><button className="btn secondary-outline btn--small radius-5" data-time-close="">Close</button></div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
