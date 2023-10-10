import React, {useEffect, useState} from "react";
import { getTrackBackground, Range } from "react-range";

import DiapazonLine from "../../../assets/img/diapazon-line.svg";

export const SliderInput = ({initialPoints, min, max, sliderLabel,labelStyle, numbersAfterDot, inputText, sliderWidth, boxStyle,onSlide}) => {
    const [rangeValue, setRangeValue] = useState(initialPoints);

    return (
        <>
            <div className="d-flex flex-column" style={boxStyle}>
                <div className="d-flex justify-content-between w-100 align-items-center">
                    <span className="info1 style--info mb-15" style={labelStyle?labelStyle:{}}>{sliderLabel}</span>
                    <div className="info2 style--info mb-15">
                        <div className="diapazon">
                            <div className="diapazon--item">
                                <input
                                    className="input input--77 from"
                                    type="text"
                                    value={`${rangeValue[0]} ${inputText ? inputText : ""}`}
                                    // onChange={ (event) => {
                                    //     setRangeValue([parseFloat(event.target.value).toFixed(numbersAfterDot), ...rangeValue])
                                    //     onSlide([parseFloat(event.target.value).toFixed(numbersAfterDot), ...rangeValue]);
                                    // }}
                                    readOnly
                                />
                            </div>
                            {initialPoints.length > 1 && <>
                                 <span className="ico">
                                <img src={DiapazonLine} />
                            </span>
                                <div className="diapazon--item">
                                    <input
                                        className="input input--77 to"
                                        type="text"
                                        value={`${rangeValue[1]} ${inputText ? inputText : ""}`}
                                        // onChange={ (event) => {
                                        //     setRangeValue([...rangeValue, parseFloat(event.target.value).toFixed(numbersAfterDot)])
                                        //     onSlide([...rangeValue, parseFloat(event.target.value).toFixed(numbersAfterDot)]);
                                        // }}
                                        readOnly
                                    />
                                </div>
                            </>
                            }
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                    <Range
                        step={0.1}
                        min={min}
                        max={max}
                        values={rangeValue}
                        onChange={(values) => {
                            console.log("values: ", values);
                            setRangeValue(values.map(value => parseFloat(value).toFixed(numbersAfterDot)))
                            onSlide(values.map(value => parseFloat(value).toFixed(numbersAfterDot)))
                        }}
                        renderTrack={({ props, children }) => (
                            <div
                                style={{
                                    ...props.style,
                                    height: "4px",
                                    display: "flex",
                                    width: sliderWidth ? sliderWidth : "250px",
                                    background: "#200637"
                                }}
                            >
                                <div
                                    ref={props.ref}
                                    style={{
                                        height: "6px",
                                        width: "100%",
                                        borderRadius: "4px",
                                        background: getTrackBackground({
                                            values: rangeValue,
                                            colors: initialPoints.length > 1 ? ["#200637", "#9B2EFB", "#200637"] : ["#9B2EFB", "#200637"],
                                            min: min,
                                            max: max
                                        }),
                                        alignSelf: "center",
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: "16px",
                                    width: "16px",
                                    backgroundColor: "#200637",
                                    border: "2px solid #9B2EFB",
                                    borderRadius: "2px"
                                }}
                            />
                        )}
                    />
                </div>
            </div>
        </>

    )
}
