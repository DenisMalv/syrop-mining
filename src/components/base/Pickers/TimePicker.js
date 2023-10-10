import React from "react";
import {useState, useEffect} from "react";
import { useRef } from "react";

import InputMask from "react-input-mask";

const TimePicker = ({onInput, className, boxCustomStyle, labelRequired, label, value}) => {
    const [isTimePikerActive, setIsTimePikerActive] = useState(false);
    const [inputValue, setInputValue] = useState([]);
    const [error, setError] = useState(false);
    const [timePikerState, setTimePikerState] = useState({
        hour: {initialHour: "12", limitHour: 9},
        minutes:  {initialMinute: "00", limitMinutes: 59},
        timeSnap: 'AM'
    });

    useEffect(() => {
        onInput(`${timePikerState.hour.initialHour}:${timePikerState.minutes.initialMinute} ${timePikerState.timeSnap}`)
        if(Number(timePikerState.hour.initialHour)> 12 || Number(timePikerState.minutes.initialMinute) > 59){
            setError(true);
            setTimePikerState({
                hour: {initialHour: "12", limitHour: 9},
                minutes:  {initialMinute: "00", limitMinutes: 59},
                timeSnap: 'AM'
            })
        }
        else{
            setError(false);
        }
    }, [timePikerState])

    useEffect(() => {
        if(!value) return;
        const inputArray = [...value];
        let timeSnap = (inputArray[6] && inputArray[7]) ? `${inputArray[6]}${inputArray[7]}` : 'AM';
        setTimePikerState({
            ...timePikerState,
            hour: {initialHour: `${inputArray[0]}${inputArray[1]}`, limitHour: 9},
            minutes: {initialMinute: `${inputArray[3]}${inputArray[4]}`, limitMinutes: 59},
            timeSnap,
        })
        onInput(`${timePikerState.hour.initialHour}:${timePikerState.minutes.initialMinute} ${timePikerState.timeSnap}`)
    }, [])

    const getArrayFromString = (string) => [...string]
    const handleInput = (e) => {
        const inputArray = getArrayFromString(e.target.value);
        if(!inputArray.length) return false;
        setTimePikerState({
            ...timePikerState,
            hour: {initialHour: `${inputArray[0]}${inputArray[1]}`, limitHour: 9},
            minutes: {initialMinute: `${inputArray[3]}${inputArray[4]}`, limitMinutes: 59}
        })
        setInputValue([...e.target.value]);
        // }
    }
    // const keyPressCheck = (e)=>{
    //     console.log(e.target.value);
    //     const hours = e.target.value.split(":")[0];
    //     const minutes = e.target.value.split(":")[1].split(" ")[0];
    //     if(hours > 12 || minutes > 59){
    //         e.preventDefault()
    //     }
    // }

    const handleHour = (typeAction) => {
        if(inputValue.filter(value => value === '_').length > 0) {
            setTimePikerState({
                ...timePikerState,
                hour: {initialHour: '12', limitHour: 9},
                minutes: {initialMinute: '00', limitMinutes: 59}
            })
            setInputValue([])
            return;
        }
        switch (typeAction) {
            case "addTime":
                if(timePikerState.hour.initialHour === '12'
                    || Number(timePikerState.hour.initialHour) > 12) setTimePikerState({...timePikerState, hour: {initialHour: '00', limitHour: 9}})
                if(timePikerState.hour.initialHour !== '12') setTimePikerState((prevState) =>
                    ({
                        ...timePikerState,
                        hour: {
                            initialHour: Array.from(prevState.hour.initialHour)[1] > 8 || prevState.hour.initialHour > 8  ? `${++prevState.hour.initialHour}` : `0${++Array.from(prevState.hour.initialHour)[1]}`,
                            limitHour: 9
                        }
                    }))
                break;
            case "subtractTime":
                if(timePikerState.hour.initialHour === '00') setTimePikerState({...timePikerState, hour: {initialHour: '12', limitHour: 9}})
                if(timePikerState.hour.initialHour !== '00') setTimePikerState((prevState) =>
                    ({
                        ...timePikerState,
                        hour: {
                            initialHour: prevState.hour.initialHour < 11  ? `0${--prevState.hour.initialHour}` : `${--prevState.hour.initialHour}`,
                            limitHour: 9
                        }
                    }))
                break;
        }
    }

    const handleMinutes = (typeAction) => {
        if(inputValue.filter(value => value === '_').length > 0) {
            setTimePikerState({
                ...timePikerState,
                hour: {initialHour: '12', limitHour: 9},
                minutes: {initialMinute: '00', limitMinutes: 59}
            })
            setInputValue([])
            return;
        }
        switch (typeAction) {
            case "addTime":
                if(timePikerState.minutes.initialMinute === '59'
                    || Number(timePikerState.hour.initialHour) > 59) setTimePikerState({...timePikerState, minutes: {initialMinute: '00', limitHour: 9}})
                if(timePikerState.minutes.initialMinute !== '59') setTimePikerState((prevState) =>
                    ({
                        ...timePikerState,
                        minutes: {
                            initialMinute: Array.from(prevState.minutes.initialMinute)[1] > 8 || prevState.minutes.initialMinute > 8  ? `${++prevState.minutes.initialMinute}` : `0${++Array.from(prevState.minutes.initialMinute)[1]}`,
                            limitMinutes: 59
                        }
                    }))
                break;
            case "subtractTime":
                if(timePikerState.minutes.initialMinute === '00') setTimePikerState({...timePikerState, minutes: {initialMinute: '59', limitMinutes: 59}})
                if(timePikerState.minutes.initialMinute !== '00') setTimePikerState((prevState) =>
                    ({
                        ...timePikerState,
                        minutes: {
                            initialMinute: prevState.minutes.initialMinute < 11  ? `0${--prevState.minutes.initialMinute}` : `${--prevState.minutes.initialMinute}`,
                            limitMinutes: 59
                        }
                    }))
                break;
        }
    }
    const secondRef = useRef();
    const timePickerRef = useRef();
    // useClickOutside(timePickerRef, secondRef, () => setIsTimePikerActive(false));

    return(
        <div className={`input-custom ${className ? className : ''}`} style={boxCustomStyle}>
            { label && <label className="input-custom__label">{label} &nbsp; { labelRequired && <span className="color-warning">*</span> }</label> }
            <div className="time-picker" ref={timePickerRef}>
                <div ref={secondRef} className="input-custom__wrap-input input-custom__wrap-input--icon-l">
                    <span className="input-custom__wrap-input--icon">
                        <span className="icon-ico-time-2"></span>
                    </span>
                    <InputMask
                        className="input-custom__input input-custom__input--time"
                        mask={`99:99 ${timePikerState.timeSnap}`}
                        maskChar="0"
                        style={error ? {border: "1px solid var(--base-danger)", color: "var(--base-danger)"} : {}}
                        value={`${timePikerState.hour.initialHour}:${timePikerState.minutes.initialMinute} ${timePikerState.timeSnap}`}
                        onChange={(e) => handleInput(e)}
                        onFocus={() => setIsTimePikerActive(true)}
                        // onKeyPress={keyPressCheck}
                    >
                    </InputMask>
                    <span className="input-custom__right-info d-flex">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7272 12.1092H11.4629" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle cx="12.0152" cy="11.5569" r="8.25344" stroke="currentColor" strokeLinecap="round"
                                        strokeLinejoin="round"></circle>
                                <path d="M11.4624 12.1092V6.97168" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                    </span>
                </div>
                <div className={isTimePikerActive ? "input-custom__time-drop input-custom__time-drop--active" : "input-custom__time-drop"}>
                    <button className="input-custom__time-drop-btn"> {timePikerState.hour.initialHour}:{timePikerState.minutes.initialMinute} {timePikerState.timeSnap}</button>
                    <div className="input-custom__time-drop-selects">
                        <div className="input-custom__time-drop-select input-custom__time-drop-select-first" data-type="hour">
                            <button
                                className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--t"
                                data-role="plus"
                                onClick={() => handleHour("addTime")}
                            >
                                <span className="icon-ico-chevron-top">
                                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.28033 4.78033C7.98744 5.07322 7.51256 5.07322 7.21967 4.78033L4.25 1.81066L1.28033 4.78033C0.987436 5.07322 0.512563 5.07322 0.219669 4.78033C-0.0732236 4.48744 -0.0732236 4.01256 0.219669 3.71967L3.71967 0.219669C4.01256 -0.0732235 4.48744 -0.0732235 4.78033 0.219669L8.28033 3.71967C8.57322 4.01256 8.57322 4.48744 8.28033 4.78033Z" fill="#6E6B7B"></path>
                                    </svg>
                                </span>
                            </button>
                            <input type="text" className="input-custom__time-drop-select-input time-hours-input" value={ timePikerState.hour.initialHour } readOnly />
                            <button
                                className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--b"
                                onClick={() => handleHour("subtractTime")}
                            >
                                <span className="icon-ico-chevron-bottom">
                                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L4.25 3.18934L7.21967 0.21967C7.51256 -0.0732233 7.98744 -0.0732233 8.28033 0.21967C8.57322 0.512563 8.57322 0.987437 8.28033 1.28033L4.78033 4.78033C4.48744 5.07322 4.01256 5.07322 3.71967 4.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#6E6B7B"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="input-custom__time-drop-select" data-type="minutes">
                            <button
                                className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--t"
                                onClick={() => handleMinutes("addTime")}
                            >
                                <span className="icon-ico-chevron-top">
                                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.28033 4.78033C7.98744 5.07322 7.51256 5.07322 7.21967 4.78033L4.25 1.81066L1.28033 4.78033C0.987436 5.07322 0.512563 5.07322 0.219669 4.78033C-0.0732236 4.48744 -0.0732236 4.01256 0.219669 3.71967L3.71967 0.219669C4.01256 -0.0732235 4.48744 -0.0732235 4.78033 0.219669L8.28033 3.71967C8.57322 4.01256 8.57322 4.48744 8.28033 4.78033Z" fill="#6E6B7B"></path>
                                    </svg>
                                </span>
                            </button>
                            <input type="text" className="input-custom__time-drop-select-input time-minutes-input" value={ timePikerState.minutes.initialMinute } readOnly />
                            <button
                                className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--b"
                                onClick={() => handleMinutes("subtractTime")}
                            >
                                <span className="icon-ico-chevron-bottom">
                                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L4.25 3.18934L7.21967 0.21967C7.51256 -0.0732233 7.98744 -0.0732233 8.28033 0.21967C8.57322 0.512563 8.57322 0.987437 8.28033 1.28033L4.78033 4.78033C4.48744 5.07322 4.01256 5.07322 3.71967 4.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#6E6B7B"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="input-custom__time-drop-select" data-type="timeSnap">
                            <button className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--t"
                                    onClick={() => {
                                        console.log(timePikerState.timeSnap);
                                        setTimePikerState({...timePikerState, timeSnap: timePikerState.timeSnap === "AM" ? "PM" : "AM" })}
                                    }
                            >
                                <span className="icon-ico-chevron-top">
                                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.28033 4.78033C7.98744 5.07322 7.51256 5.07322 7.21967 4.78033L4.25 1.81066L1.28033 4.78033C0.987436 5.07322 0.512563 5.07322 0.219669 4.78033C-0.0732236 4.48744 -0.0732236 4.01256 0.219669 3.71967L3.71967 0.219669C4.01256 -0.0732235 4.48744 -0.0732235 4.78033 0.219669L8.28033 3.71967C8.57322 4.01256 8.57322 4.48744 8.28033 4.78033Z" fill="#6E6B7B"></path>
                                    </svg>
                                </span>
                            </button>
                            <input type="text" className="input-custom__time-drop-select-input time-span-input" value={ timePikerState.timeSnap } readOnly />
                            <button className="input-custom__time-drop-select-btn input-custom__time-drop-select-btn--b" data-role="minus"
                                    onClick={() => setTimePikerState({...timePikerState, timeSnap: timePikerState.timeSnap === "AM" ? "PM" : "AM" })}
                            >
                                <span className="icon-ico-chevron-bottom">
                                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L4.25 3.18934L7.21967 0.21967C7.51256 -0.0732233 7.98744 -0.0732233 8.28033 0.21967C8.57322 0.512563 8.57322 0.987437 8.28033 1.28033L4.78033 4.78033C4.48744 5.07322 4.01256 5.07322 3.71967 4.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#6E6B7B"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="input-custom__time-drop-btn-wrap">
                        <button
                            className="btn secondary-outline btn--small radius-5"
                            onClick={() => setIsTimePikerActive(false)}
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimePicker

