import React from "react";
import { Accordion } from "../../components/base/Accordion/Accordion";
import { RadioboxInput } from "../../components/base/Form/RadioboxInput";
import { CheckboxGroup } from "../../components/base/Form/CheckboxGroup";
import Nvidia from "../../assets/img/logo-nvidia-square.svg";
import { SliderInput } from "../../components/base/Form/SliderInput";
import { SelectBox } from "../../components/base/Form/SelectBox";

export const DockerImageSettingsMain = () => {
    return (
        <div className="select-list-docker">

            <div className="select-item-image-head">
                <div className="d-flex align-items-center flex-column-sm w-100">
                    <div className="avatar-logo mb-sm-15">
                        <img src={Nvidia} alt="nvidia/cuda" />
                    </div>
                    <div className="mb-sm-15 w-100">
                        <h4 className="heading heading-h4 mb-4">nvidia/cuda</h4>
                        <p className="subheading opacity-50">
                            CUDA and cuDNN images from gitlab.com/nvidia/cuda
                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-secondary btn--lg">Change Image</button>
                </div>
            </div>

            <div className="content-item" style={{ display: 'block' }}>
                <h4 className="heading heading-h4 mb-15 ff-main">Settings</h4>
                <div className="input-custom max-w-385 mb-30">
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
                    <div className="input-custom__wrap-input">
                        <input className="input-custom__input" type="text" placeholder="Enter full docker image/tag name for docker pull" />
                    </div>
                </div>
                <h4 className="heading heading-h4 mb-15 ff-main">Launch Mode</h4>
                <RadioboxInput
                    onSelect={(value) => console.log(value)}
                    name="r1"
                    value="1"
                    label={
                        <span className="custom-radio__label">
                            <span className="color-white">Run a <a href="#" className="radio-link">jupyter-python notebook</a> (easiest).
                            </span> A browser based GUI with python editor,
                            bash terminal and more.<br /> SSH as well.
                        </span>
                    }
                />
                <div className="pl-30">
                    <CheckboxGroup
                        items={[
                            { label: "Use Jupyter Lab interface", value: "first", isChecked: false },
                            { label: "Jupyter direct HTTPS - much faster, but requires first loading our TLS certificate in your browser (one-time).", value: "second", isChecked: false },
                        ]}
                        singleInputStyle={{ marginTop: "15px" }}
                        groupStyle={{ marginTop: "0px" }}
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
                            <span className="color-white">Run interactive shell server,SSH.
                            </span> This will allow you to connect and run commands using an SSH client.
                        </span>
                    }
                    radioBoxStyle={{ marginTop: "20px" }}
                />

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
                <h4 className="heading heading-h4 mb-15 ff-main">Docker Repository Authentication</h4>
                <div className="d-flex flex-column w-100 max-w-385 pb-30">
                    <div className="mb-20">
                        <SliderInput
                            initialPoints={[8.24]}
                            min="0"
                            max="50"
                            inputText="GB"
                            numbersAfterDot={2}
                            sliderLabel="Disk Space:"
                            sliderWidth="100%"
                            labelStyle={{fontSize:"13px"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
