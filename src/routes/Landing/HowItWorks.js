import React, {useState} from 'react'

import howItWorksFirst from '../../assets/img/how-it-wroks-1.png'
import howItWorksSecond from '../../assets/img/how-it-wroks-2.png'
import howItWorksThree from '../../assets/img/how-it-wroks-3.png'

import { Tabs } from "../../components/base/Controls/Tabs";
import {CheckRequirementsTab} from "../HowSetupHost/CheckRequiremenstTab";
import {InstallAplicationsTab} from "../HowSetupHost/InstallAplicationsTab";
import {ConfigureNetworkingTab} from "../HowSetupHost/ConfigureNetworkingTab";
import {ListYourHostTab} from "../HowSetupHost/ListYourHostTab";
import {SetupHostTab} from "../HowSetupHost/SetupHostTab";
import {ExtraMiningTab} from "../HowSetupHost/ExtraMiningTab";
import {RadioboxInput} from "../../components/base/Form/RadioboxInput";

const HowItWorks = () =>{
    const [isTabSelected, setIsTbaSelected] = useState(true);
    return (
        <section id="how-it-works" className="section-100">
            <div className="container container-lg">
                <div className="heading-block flex-end--items">
                    <div className="heading-block--info mb-30 mr-20">
                        <h2 className="heading heading-h2">How it works</h2>
                        <div className="mt-12">
                            <p className="default--text">
                                Some tutorials how to start using HashMarket
                            </p>
                        </div>
                    </div>
                    <div className="heading-block--action mb-30">
                        <div className="radio-btns r-8">
                            {/*<Tabs*/}
                            {/*    tabsClassName=""*/}
                            {/*    tabsHeadClassName=""*/}
                            {/*    tabsListClassName=""*/}
                            {/*    contentClassName=""*/}
                            {/*    tabs={[*/}
                            {/*        {*/}
                            {/*            tabButton:  <div className="btn r-6">*/}
                            {/*                <span className="info fw-500">How to host GPU</span>*/}
                            {/*            </div>,*/}
                            {/*            component: <div>Tab 1</div>*/}
                            {/*        },*/}
                            {/*        {*/}
                            {/*            tabButton:  <div className="btn r-6">*/}
                            {/*                <span className="info fw-500">How to rent GPU</span>*/}
                            {/*            </div>,*/}
                            {/*            component: <div>Tab 2</div>*/}
                            {/*        }*/}
                            {/*    ]}*/}
                            {/*/>*/}

                            {/*<RadioboxInput*/}
                            {/*    label="How to host GPU"*/}
                            {/*    name="check"*/}
                            {/*    labelClassName="radio-btn"*/}
                            {/*/>*/}
                            {/*<RadioboxInput*/}
                            {/*    label="How to rent GPU"*/}
                            {/*    name="check"*/}
                            {/*    labelClassName="radio-btn"*/}
                            {/*/>*/}

                            <label className="radio-btn">
                                <input
                                    type="radio"
                                    className="radio-btn--input"
                                    id="check-1"
                                    name="check"
                                    checked={isTabSelected}
                                    onChange={(event) => setIsTbaSelected(event.target.checked)}
                                />
                                    <div className="btn r-6">
                                        <span className="info fw-500">How to host GPU</span>
                                    </div>
                            </label>
                            <label className="radio-btn">
                                <input
                                    type="radio"
                                    className="radio-btn--input"
                                    id="check-2"
                                    name="check"
                                    checked={isTabSelected}
                                    onChange={(event) => setIsTbaSelected(event.target.checked)}
                                />
                                    <div className="btn r-6">
                                        <span className="info fw-500">How to rent GPU</span>
                                    </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="columns columns-15">
                    <div className="col-4">
                        <div className="card card-style-2 mb-15">
                            <div className="card--image p-20 mh-250 r-20 pb-0">
                                <div className="wrapper--image">
                                    <img src={howItWorksFirst} alt="" />
                                </div>
                            </div>
                            <div className="card--info py-30">
                                <div className="d-flex align-items-center">
                                    <div className="circle mr-12">1</div>
                                    <h4 className="heading heading-h4">Sign up to HashMarket</h4>
                                </div>
                                <div className="mt-15">
                                    <p className="default--text">
                                        Fill in sign up form to sign up in HashMarket. Submit your email and open your
                                        dashboard.
                                        Add Funds to your Credit Limit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card card-style-2 mb-15">
                            <div className="card--image p-20 mh-250 r-20 pb-0">
                                <div className="wrapper--image">
                                    <img src={howItWorksSecond} alt="" />
                                </div>
                            </div>
                            <div className="card--info py-30">
                                <div className="d-flex align-items-center">
                                    <div className="circle mr-12">2</div>
                                    <h4 className="heading heading-h4">Go to Marketplace</h4>
                                </div>
                                <div className="mt-15">
                                    <p className="default--text">
                                        Select tab Marketpalce on your Dashboard,
                                        filter GPU that you want and set custom image or select one of our list.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card card-style-2 mb-15">
                            <div className="card--image p-20 mh-250 r-20 pb-0">
                                <div className="wrapper--image">
                                    <img src={howItWorksThree} alt="" />
                                </div>
                            </div>
                            <div className="card--info py-30">
                                <div className="d-flex align-items-center">
                                    <div className="circle mr-12">3</div>
                                    <h4 className="heading heading-h4">Rent GPU and connect</h4>
                                </div>
                                <div className="mt-15">
                                    <p className="default--text">
                                        Push Rent button on selected GPU.
                                        Rented GPU will apear on Instance tab and then push Connect button.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
