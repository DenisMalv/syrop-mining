import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/base/Button/Button";
import { SliderInput } from "../../components/base/Form/SliderInput";
import { CheckboxGroup } from "../../components/base/Form/CheckboxGroup";

export const MarketplaceSidebar = () => {
    return (
        <div className="control-panel-wrapper">
            <div className="control-panel scroll--style">
                <div className="control-panel--head border-bottom">
                    <h4 className="heading heading-h4 ttu mb-15">Set Docker Image</h4>
                    <Link to="/docker-image">
                        <Button text="Select Docker Image" size="medium" type="bordered-primary" outline={true} customButtonStyle={{width: "100%"}} />
                    </Link>
                    <ul className="custom-list mt-15">
                        <li className="custom-list--item">
                            <span className="info1 style--info mb-6">Image:</span>
                            <div className="info2 style--info mb-6">
                                <a href="#" className="default--link fw-500">
                                    <span className="info">nvidia/cuda</span>
                                    <span className="ico ico-16 ml-6">
                                        <svg width="16" height="16"
                                             viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.66602 8.66703L7.30161 9.30263C7.80192 9.80297 8.4805 10.0841 9.18807 10.0841C9.89563 10.0841 10.5742 9.80297 11.0745 9.30263L13.096 7.28112C14.3046 6.07236 14.3046 4.11272 13.096 2.90397V2.90397C11.8873 1.69534 9.92763 1.69534 8.71887 2.90397L8.12729 3.49621"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path
                                                d="M9.33404 6.66623L8.69844 6.03063C8.19813 5.53029 7.51955 5.24921 6.81199 5.24921C6.10442 5.24921 5.42584 5.53029 4.92553 6.03063L2.90403 8.05214C1.6954 9.2609 1.6954 11.2205 2.90403 12.4293V12.4293C4.11278 13.6379 6.07243 13.6379 7.28118 12.4293L7.87276 11.837"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </li>
                        <li className="custom-list--item">
                            <span className="info1 style--info mb-6">Launch Type:</span>
                            <div className="info2 style--info mb-6">
                                ssh
                            </div>
                        </li>
                        <li className="custom-list--item">
                            <span className="info1 style--info mb-6">One-start Script:</span>
                            <div className="info2 style--info mb-6">
                                Not set
                            </div>
                        </li>
                        <li className="custom-list--item">
                            <div className="d-flex flex-column w-100">
                                <div className="d-flex justify-content-between w-100 align-items-center">
                                    <SliderInput
                                        initialPoints={[8.24]}
                                        min={0}
                                        max={200}
                                        sliderLabel="Disk Space:"
                                        numbersAfterDot={2}
                                        inputText="GB"
                                        onSlide={(value) => {console.log(value)}}
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="control-panel--body">
                    <div className="list-controls">
                        <div className="list-control mt-15">
                            <div className="list-control--head">
                                <h4 className="heading heading-h4 ttu mb-15">Filters</h4>
                                <span className="text--info">GPU Resources</span>
                            </div>
                            <div className="list-control--body">
                                <ul className="custom-list mt-15">
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div
                                                className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[1, 16]}
                                                        min={0}
                                                        max={26}
                                                        sliderLabel="Gpu Count:"
                                                        numbersAfterDot={0}
                                                        onSlide={(value) => {console.log(value)}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <SliderInput
                                                initialPoints={[80]}
                                                min={0}
                                                max={200}
                                                sliderLabel="TFLOPS (total):"
                                                onSlide={(value) => {}}
                                            />
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="GPU RAM:"
                                                        inputText="GB"
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div
                                                className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[26, 512]}
                                                        min={0}
                                                        max={600}
                                                        sliderLabel=" GPU RAM Bandwidth:"
                                                        inputText="TB"
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div
                                                className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="PCIE Bandwidth: "
                                                        inputText="GB/s"
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div
                                                className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="NVLink Bandwidth:"
                                                        inputText="GB/s"
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="list-control">
                            <CheckboxGroup
                                groupLabel="Filter Option"
                                items={[
                                    {label: "Only Datacenters", value: "first", isChecked: true},
                                    {label: "Unverified Machines", value: "second", isChecked: false},
                                    {label: "Incompatible Machines", value: "third", isChecked: false},
                                    {label: "Unavailable Offers", value: "fourth", isChecked: false}
                                ]}
                                singleInputStyle={{marginTop: "15px"}}
                                onChange={(values) => console.log(values)}
                            >
                            </CheckboxGroup>
                        </div>
                        <div className="list-control mt-30">
                            <div className="list-control--head">
                                <span className="text--info">Availability</span>
                            </div>
                            <div className="list-control--body">
                                <ul className="custom-list mt-15">
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <SliderInput
                                                initialPoints={[90]}
                                                min={0}
                                                max={300}
                                                sliderLabel="Host Reliability:"
                                                inputText="%"
                                                onSlide={(value) => {}}
                                            />
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <SliderInput
                                                initialPoints={[3]}
                                                min={0}
                                                max={12}
                                                sliderLabel="Max Instance Duration:"
                                                inputText="days"
                                                onSlide={(value) => {}}
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="list-control mt-20">
                            <div className="list-control--head">
                                <span className="text--info">GPU Resources</span>
                            </div>
                            <div className="list-control--body">
                                <ul className="custom-list mt-15">
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[60.00, 530.00]}
                                                        min={0}
                                                        max={1000}
                                                        sliderLabel="$/Hour:"
                                                        inputText="$"
                                                        numbersAfterDot={2}
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[30.00, 500.00]}
                                                        min={0}
                                                        max={600}
                                                        sliderLabel="TFLOPS/
                                                                $/Hour"
                                                        numbersAfterDot={2}
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="list-control mt-20">
                            <div className="list-control--head">
                                <span className="text--info">Machine Resources</span>
                            </div>
                            <div className="list-control--body">
                                <ul className="custom-list mt-15">
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="Cpu Cores"
                                                        single
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="Cpu Ram"
                                                        inputText="TB"
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="Disk Bandwidth"
                                                        inputText="GB/s"
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="Inet Up"
                                                        inputText="Gbps"
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="Inet Down"
                                                        inputText="Gbps"
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="custom-list--item">
                                        <div className="d-flex flex-column w-100">
                                            <div className="d-flex justify-content-between w-100 align-items-center">
                                                <div className="info2 style--info">
                                                    <SliderInput
                                                        initialPoints={[80, 150]}
                                                        min={0}
                                                        max={200}
                                                        sliderLabel="# Open TCP/UDP Ports"
                                                        single
                                                        onSlide={(value) => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
