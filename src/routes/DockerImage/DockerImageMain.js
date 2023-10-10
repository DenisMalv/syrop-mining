import React from "react";
import { Accordion } from "../../components/base/Accordion/Accordion";

import Ubuntu from "../../assets/img/logo-ubuntu.png"
import Docker from "../../assets/img/logo-docer-squeare.svg"
import Python from "../../assets/img/logo-python.png";
import Nvidia from "../../assets/img/logo-nvidia-square.svg";
import Redis from "../../assets/img/logo-redis.png"
import Registry from "../../assets/img/logo-registry.png"
import Consul from "../../assets/img/logo-consul.png"
import {RadioboxInput} from "../../components/base/Form/RadioboxInput";
import {CheckboxGroup} from "../../components/base/Form/CheckboxGroup";
import {SliderInput} from "../../components/base/Form/SliderInput";
import { SelectBox } from "../../components/base/Form/SelectBox";

const DockerImageOptions = [
    {name: "Custom Image", text: "Enter the name of a docker image. Can be anything supported by docker", image: Docker},
    {name: "ubuntu", text: "Ubuntu is a Debian-based Linux operating system based on free software.", image: Ubuntu},
    {name: "python", text: "Python is an interpreted, interactive, object-oriented, open-source programming language.", image: Python},
    {name: "nvidia/cuda", text: "CUDA and cuDNN images from gitlab.com/nvidia/cuda", image: Nvidia},
    {name: "redis", text: "CUDA and cuDNN images from gitlab.com/nvidia/cuda", image: Redis},
    {name: "registry", text: "The Docker Registry 2.0 implementation for storing and distributing Docker images", image: Registry},
    {name: "consul", text: "Consul is a datacenter runtime that provides service discovery, configuration, and orchestration.", image: Consul}
]

export const DockerImageMain = () => {
    return (
        <div className="select-list-docker">
            <Accordion
                items={DockerImageOptions}
                // defaultActiveItem={0}
                accordionHeaderActiveClassName="active"
                accordionClassName="select-item-image"
                HeaderRender={({accordionItemData, isOpen}) => (<div className="select-item-image-head">
                        <div className="d-flex align-items-center flex-column-sm w-100">
                            <div className="avatar-logo mb-sm-15">
                                <img src={accordionItemData.image} className="radius-50"  alt={accordionItemData.name} />
                            </div>
                            <div className="mb-sm-15 w-100">
                                <h4 className="heading heading-h4 mb-4 ff-main fw-400">{accordionItemData.name}</h4>
                                <p className="subheading opacity-50">
                                    {accordionItemData.text}
                                </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <a href="#" className="btn mr-20 pl-20">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M13.8005 3.99625C14.2226 3.99625 14.5992 4.26128 14.7419 4.65852L15.2501 6.07411C15.3308 6.29672 15.4874 6.48375 15.6923 6.60233L17.1999 7.47269C17.4046 7.59082 17.6446 7.63264 17.8772 7.59074L19.3578 7.32363C19.7736 7.24803 20.192 7.44183 20.4033 7.80783L21.2036 9.18841C21.4154 9.55342 21.3754 10.0121 21.1035 10.3349L20.1321 11.4834C19.9791 11.664 19.8951 11.8929 19.895 12.1296V13.8704C19.8951 14.107 19.9791 14.336 20.1321 14.5166L21.1035 15.6651C21.3754 15.9879 21.4154 16.4466 21.2036 16.8116L20.4033 18.1922C20.1922 18.5578 19.7743 18.7515 19.3588 18.6764L17.8782 18.4092C17.6456 18.3674 17.4056 18.4092 17.2009 18.5273L15.6933 19.3977C15.4884 19.5162 15.3318 19.7033 15.2511 19.9259L14.7429 21.3415C14.6001 21.7391 14.223 22.0041 13.8005 22.0037H12.1998C11.7777 22.0037 11.4011 21.7387 11.2584 21.3415L10.7502 19.9259C10.6696 19.7036 10.5134 19.5166 10.309 19.3977L8.80042 18.5273C8.59569 18.4092 8.35576 18.3674 8.12314 18.4092L6.64252 18.6764C6.22675 18.752 5.80832 18.5582 5.59709 18.1922L4.79675 16.8116C4.58495 16.4466 4.62498 15.9879 4.8968 15.6651L5.8682 14.5166C6.02119 14.336 6.1052 14.107 6.1053 13.8704V12.1296C6.1052 11.8929 6.02119 11.664 5.8682 11.4834L4.9068 10.3349C4.63498 10.0121 4.59496 9.55342 4.80676 9.18841L5.60709 7.80783C5.81819 7.44222 6.23609 7.24849 6.65153 7.32363L8.13214 7.59074C8.36476 7.63264 8.6047 7.59082 8.80942 7.47269L10.3181 6.60233C10.5225 6.48338 10.6786 6.29643 10.7592 6.07411L11.2674 4.65852C11.409 4.26436 11.7811 4.00008 12.1998 3.99625H13.8005Z"
                                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"></path>
                                    <circle cx="13.0002" cy="13" r="2.75115" stroke="currentColor" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round"></circle>
                                </svg>
                            </a>
                            <a href="#" className="btn btn-secondary btn--lg">Select Image</a>
                        </div>
                    </div>)}
                ContentRender={({accordionItemData, isOpen}) => (<div className="content-item">
                    <h4 className="heading heading-h4 mb-15 ff-main">Settings</h4>
                    {accordionItemData.name ==="Custom Image" 
                        ?   <div className="input-custom max-w-385 mb-30">
                                <div className="input-custom__wrap-input">
                                    <input className="input-custom__input" type="text"
                                        placeholder="Enter full docker image/tag name for docker pull" />
                                </div>
                            </div>
                        :   <>
                            <SelectBox
                                options={[
                                    {label:'10.0-cudnn7-runtime',value:'10.0-cudnn7-runtime'},
                                    {label:'10.0-cudnn7-runtime',value:'10.0-cudnn7-runtime'},
                                    {label:'10.0-cudnn7-runtime',value:'10.0-cudnn7-runtime'},
                                    {label:'10.0-cudnn7-runtime',value:'10.0-cudnn7-runtime'},
                                ]}
                                defaultValue="default"
                                onSelect={(value) => console.log(value)}
                                widthControl='385px'
                                widthMenu='100%'
                                customStules={{padding:"4px 0px"}}
                            />
                            <div className="input-custom max-w-385 mb-30">
                                <div className="input-custom__wrap-input">
                                    <input className="input-custom__input" type="text"
                                        placeholder="Enter full docker image/tag name for docker pull" />
                                </div>
                            </div>
                            </>
                    }
                    
                    <h4 className="heading heading-h4 mb-15 ff-main">Launch Mode</h4>
                    <RadioboxInput
                        onSelect={(value) => console.log(value)}
                        name="r1"
                        value="1"
                        label={
                            <span className="custom-radio__label">
                                        <span className="color-white">Run a <a href="#" className="radio-link">jupyter-python notebook</a> (easiest).
                                        </span> A browser based GUI with python editor,
                                        bash terminal and more.<br />SSH as well.
                                    </span>
                        }
                    />
                    <div className="pl-30">
                       <CheckboxGroup
                           items={[
                               {label: "Use Jupyter Lab interface", value: "first", isChecked: false},
                               {label: "Jupyter direct HTTPS - much faster, but requires first loading our TLS certificate in your browser (one-time).", value: "second", isChecked: false},
                           ]}
                           singleInputStyle={{marginTop: "15px"}}
                           groupStyle={{marginTop: "0px"}}
                           onChange={(values) => console.log(values)}
                           disableBorder
                       />
                    </div>
                    <RadioboxInput
                        onSelect={(value) => console.log(value)}
                        name="r1"
                        value="2"
                        label={
                            <span className="custom-radio__label">
                                <span className="color-white">Run interactive shell server, SSH.
                                </span> This will allow you to connect and run commands using an SSH client.
                            </span>
                        }
                        radioBoxStyle={{marginTop: "20px"}}
                    />

                    {/*<label className="custom-radio mb-15">*/}
                    {/*    <input type="radio" className="custom-radio__input" name="r1" />*/}
                    {/*        <span className="custom-radio__input-fake"></span>*/}
                    {/*        <span className="custom-radio__label">*/}
                    {/*            <span className="color-white">Run interactive shell server,SSH.</span>*/}
                    {/*            This will allow you to connect and run commands using an SSH client.*/}
                    {/*        </span>*/}
                    {/*</label>*/}
                    {/*<label className="custom-radio mb-30">*/}
                    {/*    <input type="radio" className="custom-radio__input" name="r1" />*/}
                    {/*        <span className="custom-radio__input-fake"></span>*/}
                    {/*        <span className="custom-radio__label">*/}
                    {/*            <span className="color-white">Docker Run: use dockerENTRYPOINT.</span>*/}
                    {/*        </span>*/}
                    {/*</label>*/}

                    <h4 className="heading heading-h4 mb-15 mt-30 ff-main">On-start script</h4>
                    <div className="input-custom mb-10">
                        <div className="input-custom__wrap-input mb-10">
                            <input className="input-custom__input" type="text"
                                   placeholder="This is where your bash commands to go" />
                        </div>
                    </div>
                    <p className="description opacity-30 mb-30">(Bash commands that are invoked whenever your instance starts, see FAQ/docs for details.)</p>
                    <h4 className="heading heading-h4 mb-15 ff-main">Docker Repository Authentication</h4>
                    <div className="row">
                        <div className="input-custom col-12 col-sm-6 mb-15 ">
                            <label className="input-custom__label">docker.io:</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="text" value="docker.io" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-30">
                        <div className="input-custom col-12 col-sm-6 mb-sm-15">
                            <label className="input-custom__label">Docker Login:</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="text" value="Login123" />
                            </div>
                        </div>
                        <div className="input-custom col-12 col-sm-6 mb-sm-15">
                            <label className="input-custom__label">Password:</label>
                            <div className="input-custom__wrap-input">
                                <input className="input-custom__input" type="password" value="Password123" />
                            </div>
                        </div>
                    </div>
                    <h4 className="heading heading-h4 mb-15 ff-main" >Docker Repository Authentication</h4>
                    <div className="d-flex flex-column w-100 max-w-385 pb-30">
                        <div className="mb-20">
                            <SliderInput
                                initialPoints={[8.24]}
                                min="0"
                                max="50"
                                inputText="GB"
                                numbersAfterDot={2}
                                sliderLabel="Disk Space:"
                                labelStyle={{fontSize:"13px"}}
                                sliderWidth="100%"
                                
                            />
                        </div>
                    </div>
                </div>)}
            />
        </div>
    )
}
