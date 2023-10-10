import React, {useState} from "react";
// ========================= BUTTON ====================
import { Button } from "../../components/base/Button/Button";
// ========================= CONTROLS ====================
import { Accordion } from "../../components/base/Accordion/Accordion";
import { Tabs } from "../../components/base/Controls/Tabs";
import { Dropdown } from "../../components/base/Controls/Dropdown";
// ========================= CHECKBOX ====================
import { CheckboxInput } from "../../components/base/Form/CheckboxInput";
import { CheckboxGroup } from "../../components/base/Form/CheckboxGroup";
import { SliderInput } from "../../components/base/Form/SliderInput";
import { SelectBox } from "../../components/base/Form/SelectBox";
// ========================= TABLE ====================
import { Table } from "../../components/base/Table/Table";
import { TableRow } from "../../components/base/Table/TableRow";
import { TableColumn } from "../../components/base/Table/TableColumn";
// ========================= PILL ====================
import { Pill } from "../../components/base/Pill/Pill";
// ========================= ICONS ====================
import MasterIcon from"../../assets/img/ico-mastercard.svg"
import Download from "../../assets/img/icon-download-arrow.svg"
import {RadioboxInput} from "../../components/base/Form/RadioboxInput";
import {SearchInput} from "../../components/base/Form/SearchInput";

const options = [
    { label: "Any GPU", value: 'all' },
    { value: 'rtx-3090', label: 'RTX 3090' },
    { value: 'rtx-a6000', label: 'RTX A6000' },
    { value: 'tesla-v100', label: 'Tesla V100' },
    { value: 'a100-pcie', label: 'A100 PCIE' },
    { value: 'a100-sxm4', label: 'A100 SXM4' },
    { value: 'rtx-3080ti', label: 'RTX 3080 Ti' },
    { value: 'rtx-3080', label: 'RTX 3080' },
    { value: 'rtx-3070', label: 'RTX 3070' },
    { value: 'rtx-3060', label: 'RTX 3060' }
]

const buttons = [
    {type: "primary", size: "large", text: "Primary Button", icon: Download},
    {type: "primary", size: "medium", text: "Primary Button"},
    {type: "secondary", size: "medium", text: "Secondary Button"},
    {type: "primary", size: "medium", text: "Secondary Button", outline: true},
    {type: "secondary", size: "medium", text: "Secondary Button", outline: true},
]
const pills = [
    {label: "Completed", type: "completed"},
    {label: "Pending", type: "pending"},
    {label: "Failed", type: "failed"},
]

const accordions = [
    {someData: "1"},
    {someData: "2"},
    {someData: "3"},
    {someData: "4"},
]

export const CoreComponents = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [activeAccordionItem, setActiveAccordionItem] = useState();
    return (
        <div className="core-components">
            <div className="container">
                <h1>Core Components</h1>
                <div className="core-components__body component">
                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Input</h3>
                        <SearchInput
                            placeholder="Pick Time"
                            value={inputValue}
                            boxStyle={{width: "40%"}}
                            icon={ <svg width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15.7272 12.1092H11.4629" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle
                                    cx="12.0152"
                                    cy="11.5569"
                                    r="8.25344"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></circle>
                                <path
                                    d="M11.4624 12.1092V6.97168"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">

                                </path>
                            </svg>}
                            onChange={(value) => setInputValue(value)}
                        />
                    </div>

                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Checkbox</h3>
                        <CheckboxInput
                            label="Test label"
                            checked={isChecked}
                            onChange={({checked, name}) => {
                                setIsChecked(checked)
                                console.log("value", checked);
                            }}
                        />
                        <CheckboxInput
                            wrapperStyle={{marginTop: "15px"}}
                            label="Test label"
                            disabled
                        />
                    </div>

                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Radio Button</h3>
                        <RadioboxInput
                            onSelect={(value) => console.log(value)}
                            name="r1"
                            value="1"
                            label={
                                    <span className="custom-radio__label">
                                        <span className="color-white">Run a <a href="#" className="radio-link">
                                                jupyter-python notebook
                                            </a> (easiest).
                                        </span> A browser based GUI with python editor,
                                        bash terminal and more.<br /> SSH as well.
                                    </span>
                                }
                        />
                        <RadioboxInput
                            onSelect={(value) => console.log(value)}
                            name="r1"
                            value="2"
                            label={<span className="custom-radio__label">
                                    <span className="color-white">Run a <a href="#" className="radio-link">
                                            jupyter-python notebook
                                        </a> (easiest).
                                    </span> A browser based GUI with python editor,
                                    bash terminal and more.<br /> SSH as well.
                                </span>}
                        />
                    </div>
                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Checkbox Group</h3>
                        <CheckboxGroup
                            groupLabel="Filter Option"
                            items={[
                                {label: "Only Datacenters", value: "first", isChecked: true},
                                {label: "Unverified Machines", value: "second", isChecked: false},
                                {label: "Incompatible Machines", value: "third", isChecked: false},
                                {label: "Unavailable Offers", value: "fourth", isChecked: false}
                            ]}
                            singleInputStyle={{marginTop: "15px"}}
                            onChange={(values) => console.log(values)}>
                        </CheckboxGroup>
                    </div>
                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Button</h3>
                        <div style={{display: "flex", columnGap: "15px"}}>
                            {buttons.map((button, index) => (
                                <Button
                                    text={button.text}
                                    type={button.type}
                                    size={button.size}
                                    key={index}
                                    outline={button.outline}
                                    // icon={button.icon}
                                    customButtonStyle={{alignSelf: "center"}}
                                />
                            ))  }
                        </div>
                    </div>
                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Range Slider</h3>
                        <SliderInput
                            // start={80}
                            // end={150}
                            initialPoints={[80, 150]}
                            min={0}
                            max={200}
                            sliderLabel="Gpu Count:"
                            sliderWidth="250px"
                            boxStyle={{width: "250px"}}
                            onSlide={(value) => {}}
                        />
                    </div>

                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Accordion</h3>
                            <Accordion
                                items={accordions}
                                defaultActiveItem={0}
                                accordionHeaderActiveClassName="active--dropdown"
                                accordionClassName="dropdown mt-15 r-8"
                                HeaderRender={({accordionItemData, isOpen}) => (<div className="dropdown-head px-14">
                                    <div className="info pt-6 mr-15">
                                             <span className="ico ico-arrow mb-6 mr-10">
                                         <svg width="22" height="22"
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
                                        <ul className="custom-list custom-list-row">
                                            <li className="custom-list--item mb-6 flex-auto justify-content-end mr-26">
                                                <span className="info1 style--info">Price:</span>
                                                <div className="info2 style--info">
                                                    $0.302/hr
                                                </div>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn btn-primary btn--md mb-6 nowrap">
                                            <span className="text fw-500">Rent Host</span>
                                        </a>
                                    </div>
                                </div>)}
                                FooterRender={({accordionItemData, isOpen}) => (<div className="dropdown-footer border-top px-14">
                                    <div className="columns columns-16">
                                        <div className="col-12">
                                            <ul className="custom-list custom-list-row mt-15">
                                                <li className="custom-list--item mr-20">
                                                    <span className="info1 style--info mb-15">GPU:</span>
                                                    <div className="info2 style--info mb-15">
                                                        0%, 35,0C
                                                    </div>
                                                </li>
                                                <li className="custom-list--item">
                                                    <span className="info1 style--info mb-15">Status:</span>
                                                    <div className="info2 style--info mb-15">
                                                        Successfully loaded
                                                        <a href="#" className="default--link fw-500">
                                                            <span className="info">nvidia / cuda</span>
                                                            <span className="ico ico-16 ml-6"><svg width="16"
                                                                                                   height="16"
                                                                                                   viewBox="0 0 16 16"
                                                                                                   fill="none"
                                                                                                   xmlns="http://www.w3.org/2000/svg">
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>)}
                                ContentRender={({accordionItemData, isOpen}) => (<div className="dropdown-body px-14 border-top">
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
                                                        <span
                                                            className="info1 style--info mb-6">GPU RAM Bandwidth:</span>
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
                                                        <span
                                                            className="info1 style--info mb-6">PCIE Bandwidth:</span>
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
                                                        <span
                                                            className="info1 style--info mb-6">Total of CPU:</span>
                                                        <div className="info2 style--info mb-6">
                                                            12.0/24 cpu
                                                        </div>
                                                    </li>
                                                    <li className="custom-list--item">
                                                        <span
                                                            className="info1 style--info mb-6">Total System RAM:</span>
                                                        <div className="info2 style--info mb-6">
                                                            32/64 GB
                                                        </div>
                                                    </li>
                                                    <li className="custom-list--item">
                                                        <span
                                                            className="info1 style--info mb-6">GPU RAM Bandwidth:</span>
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
                                                        <span
                                                            className="info1 style--info mb-6">Disc Bandwidth:</span>
                                                        <div className="info2 style--info mb-6">
                                                            484 MB/s
                                                        </div>
                                                    </li>
                                                    <li className="custom-list--item">
                                                        <span
                                                            className="info1 style--info mb-6">Upload Speed:</span>
                                                        <div className="info2 style--info mb-6">
                                                            <div className="d-flex align-items-center">
                                                <span className="ico ico-16 mr-6"><svg width="17" height="16"
                                                                                       viewBox="0 0 17 16"
                                                                                       fill="none"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.33333 3.33334V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                                          strokeLinejoin="round"></path>
                                                                    <path d="M4.99939 6.66667L8.33339 3.33267L11.6674 6.66667" stroke="currentColor" strokeWidth="1.5"
                                                                          strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                    </span>
                                                                642 Mbps
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="custom-list--item">
                                                        <span
                                                            className="info1 style--info mb-6">Download Speed:</span>
                                                        <div className="info2 style--info mb-6">
                                                            <div className="d-flex align-items-center">
                                                <span className="ico ico-16 mr-6"><svg width="17" height="16"
                                                                                       viewBox="0 0 17 16"
                                                                                       fill="none"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M8.33341 12.6667L8.33342 3.33332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                                          strokeLinejoin="round"></path>
                                                                    <path d="M11.6674 9.33333L8.33336 12.6673L4.99936 9.33333" stroke="currentColor" strokeWidth="1.5"
                                                                          strokeLinecap="round" strokeLinejoin="round"></path>
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
                            />
                    </div>

                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Table</h3>
                        <Table
                            tableHeader={["Type", "Payment Method", "Amount", "Date", "Status"]}
                            tableClassName="table table-wrapper ova-x scroll--style r-8"
                            headClassName="table--head"
                            bodyClassName="table--body"
                        >
                            <TableRow>
                                <TableColumn
                                    columnClassName="fw-500"
                                    columnStyle={{width: "300px"}}
                                >
                                    Stripe
                                </TableColumn>
                                <TableColumn>
                                    <div className="card-number">
                                        <span className="card-number--image mr-12"><img
                                            src={MasterIcon} /></span>
                                        <span className="card-number--info fw-500">
                                            •••• •••• •••• 1234
                                        </span>
                                    </div>
                                </TableColumn>
                                <TableColumn>
                                    $123.00
                                </TableColumn>
                                <TableColumn>
                                    Apr 14, 2022
                                </TableColumn>
                                <TableColumn>
                                    <Pill
                                        label="Pending"
                                        type="pending"
                                    />
                                </TableColumn>
                            </TableRow>
                            <TableRow>
                                <TableColumn
                                    columnClassName="fw-500"
                                    columnStyle={{width: "300px"}}
                                >
                                    Stripe
                                </TableColumn>
                                <TableColumn>
                                    <div className="card-number">
                                        <span className="card-number--image mr-12"><img
                                            src={MasterIcon} /></span>
                                        <span className="card-number--info fw-500">
                                            •••• •••• •••• 1234
                                        </span>
                                    </div>
                                </TableColumn>
                                <TableColumn>
                                    $123.00
                                </TableColumn>
                                <TableColumn>
                                    Apr 14, 2022
                                </TableColumn>
                                <TableColumn>
                                    <Pill
                                        label="Completed"
                                        type="completed"
                                    />
                                </TableColumn>
                            </TableRow>
                            <TableRow>
                                <TableColumn
                                    columnClassName="fw-500"
                                    columnStyle={{width: "300px"}}
                                >
                                    Stripe
                                </TableColumn>
                                <TableColumn>
                                    <div className="card-number">
                                        <span className="card-number--image mr-12"><img
                                            src={MasterIcon} /></span>
                                        <span className="card-number--info fw-500">
                                            •••• •••• •••• 1234
                                        </span>
                                    </div>
                                </TableColumn>
                                <TableColumn>
                                    $123.00
                                </TableColumn>
                                <TableColumn>
                                    Apr 14, 2022
                                </TableColumn>
                                <TableColumn>
                                    <Pill
                                        label="Failed"
                                        type="failed"
                                    />
                                </TableColumn>
                            </TableRow>
                        </Table>
                    </div>

                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Pill</h3>
                        <div style={{display: "flex", columnGap: "15px"}}>
                            {pills.map((pill, index) => (
                                <Pill label={pill.label} type={pill.type} key={index} />
                            ))}
                        </div>
                    </div>

                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Dropdown</h3>
                        <div style={{display: "flex", columnGap: "15px"}}>
                           <Dropdown
                               button={<Button
                                   // text="New dropdown button"
                                   customButtonClass="header__btn"
                                   // outline={true}
                                   // type="secondary"
                                   // size="medium"
                                   iconPosition="left"
                                   icon={<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M10.509 19.0025V19.5147C10.509 20.1752 10.7715 20.8086 11.2388 21.2754C11.706 21.7423 12.3396 22.0043 13.0001 22.0038V22.0038C13.6606 22.004 14.2943 21.7418 14.7614 21.2748C15.2286 20.8078 15.4911 20.1743 15.4911 19.5137V19.0025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                       <path fillRule="evenodd" clipRule="evenodd" d="M18.9496 19.0025C20.084 19.0025 21.0035 18.0829 21.0035 16.9486V16.9486C21.003 16.3724 20.7742 15.8198 20.3672 15.412L19.0027 14.0484V9.99872C19.0027 6.68363 16.3152 3.99622 13.0002 3.99622V3.99622C9.68507 3.99622 6.99766 6.68363 6.99766 9.99872V14.0484L5.63309 15.412C5.22608 15.8198 4.99729 16.3724 4.99683 16.9486V16.9486C4.99683 17.4933 5.21321 18.0157 5.59839 18.4009C5.98356 18.7861 6.50597 19.0025 7.05068 19.0025H18.9496Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                   </svg>

                                   }
                                   onClick={() => setIsDropdownVisible(!isDropdownVisible)} />}
                               wrapperDropdownClass="header__btn-wrap"
                               activeDropdownClass={isDropdownVisible ? " header__btn-wrap--active" : ""}
                           >
                               <div className="header__btn-drop" style={{left: "0", right: "auto", zIndex: "100000"}}>
                                   <div className="header__btn-drop-wrap">
                                       <div className="header__btn-drop-head">
                                           <h3 className="header__btn-drop-title">Notifications</h3>
                                           <button className="header__btn-drop-status">
                                               <span className="header__btn-drop-status-icon">
                                                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <circle cx="11" cy="11" r="7.50312" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                                      <path d="M8.0354 11.2826L9.84199 13.0892L9.83031 13.0775L13.9062 9.00165" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                  </svg>
                                               </span>
                                               <span>Mark as read</span>
                                           </button>
                                       </div>
                                       <div className="header__btn-drop-list">
                                           <a href="#"
                                              className="header__btn-drop-item header__btn-drop-item--not-read">
                                               <div className="header__btn-drop-item-text">
                                                   <div className="header__btn-drop-item-title">Your password has been
                                                       changed.
                                                   </div>
                                                   <div className="header__btn-drop-item-date">Jul 23, 2022 at 09:15
                                                       AM
                                                   </div>
                                               </div>
                                               <div className="header__btn-drop-item-icon">
                                                   <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule="evenodd"
                                                             clipRule="evenodd"
                                                             d="M21.25 26.25H8.75C7.36875 26.25 6.25 25.1313 6.25 23.75V15C6.25 13.6187 7.36875 12.5 8.75 12.5H21.25C22.6313 12.5 23.75 13.6187 23.75 15V23.75C23.75 25.1313 22.6313 26.25 21.25 26.25Z"
                                                             stroke="currentColor"
                                                             strokeWidth="1.5"
                                                             strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                       </path>
                                                       <path
                                                           d="M10 12.5V8.75V8.75C10 5.98875 12.2387 3.75 15 3.75V3.75C17.7613 3.75 20 5.98875 20 8.75V8.75V12.5"
                                                           stroke="currentColor"
                                                           strokeWidth="1.5"
                                                           strokeLinecap="round"
                                                           strokeLinejoin="round"></path>
                                                   </svg>
                                               </div>
                                           </a>
                                           <a href="#"
                                              className="header__btn-drop-item header__btn-drop-item--not-read">
                                               <div className="header__btn-drop-item-text">
                                                   <div className="header__btn-drop-item-title">Your password has been
                                                       changed.
                                                   </div>
                                                   <div className="header__btn-drop-item-date">Jul 23, 2022 at 09:15
                                                       AM
                                                   </div>
                                               </div>
                                               <div className="header__btn-drop-item-icon">
                                                   <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule="evenodd"
                                                             clipRule="evenodd"
                                                             d="M21.25 26.25H8.75C7.36875 26.25 6.25 25.1313 6.25 23.75V15C6.25 13.6187 7.36875 12.5 8.75 12.5H21.25C22.6313 12.5 23.75 13.6187 23.75 15V23.75C23.75 25.1313 22.6313 26.25 21.25 26.25Z"
                                                             stroke="currentColor"
                                                             strokeWidth="1.5"
                                                             strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                       </path>
                                                       <path
                                                           d="M10 12.5V8.75V8.75C10 5.98875 12.2387 3.75 15 3.75V3.75C17.7613 3.75 20 5.98875 20 8.75V8.75V12.5"
                                                           stroke="currentColor"
                                                           strokeWidth="1.5"
                                                           strokeLinecap="round"
                                                           strokeLinejoin="round">

                                                       </path>
                                                   </svg>
                                               </div>
                                           </a>
                                           <a href="#"
                                              className="header__btn-drop-item header__btn-drop-item--not-read">
                                               <div className="header__btn-drop-item-text">
                                                   <div className="header__btn-drop-item-title">Your password has been
                                                       changed.
                                                   </div>
                                                   <div className="header__btn-drop-item-date">Jul 23, 2022 at 09:15
                                                       AM
                                                   </div>
                                               </div>
                                               <div className="header__btn-drop-item-icon">
                                                   <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule="evenodd"
                                                             clipRule="evenodd"
                                                             d="M21.25 26.25H8.75C7.36875 26.25 6.25 25.1313 6.25 23.75V15C6.25 13.6187 7.36875 12.5 8.75 12.5H21.25C22.6313 12.5 23.75 13.6187 23.75 15V23.75C23.75 25.1313 22.6313 26.25 21.25 26.25Z"
                                                             stroke="currentColor"
                                                             strokeWidth="1.5"
                                                             strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                       </path>
                                                       <path
                                                           d="M10 12.5V8.75V8.75C10 5.98875 12.2387 3.75 15 3.75V3.75C17.7613 3.75 20 5.98875 20 8.75V8.75V12.5"
                                                           stroke="currentColor"
                                                           strokeWidth="1.5"
                                                           strokeLinecap="round"
                                                           strokeLinejoin="round">
                                                       </path>
                                                   </svg>
                                               </div>
                                           </a>
                                       </div>
                                       <button className="header__btn-all">View all notifications</button>
                                   </div>
                               </div>
                           </Dropdown>
                        </div>
                    </div>

                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Select</h3>
                        <div style={{display: "flex", columnGap: "15px"}}>
                            <SelectBox
                                options={options}
                                onSelect={(value) => console.log(value)}
                            />
                        </div>
                    </div>

                    <div className="component__presentation">
                        <h3 style={{marginTop: "20px", marginBottom: "10px"}}>Tabs</h3>
                        <div style={{display: "flex", columnGap: "15px"}}>
                            <Tabs tabs={
                                [
                                    { tabButton:  <button className="btn">
                                            <span className="setup-number">1</span>
                                            <span className="tab-name">Check Requirements</span>
                                        </button>,
                                        component: <div className="tab active" id="check-requirements">
                                            <h4 className="heading heading-h4 mb-15">Host Requirements</h4>
                                            <p className="subheading opacity-50 mb-20">Want to rent out your machine? We
                                                recommend any rented
                                                machines meet the following requirements to rent for the best price:</p>
                                            <ul className="requirements-list">
                                                <li><span className="color-white">Ubuntu 18.04<span
                                                    className="opacity-50"> (required)</span></span>
                                                </li>
                                                <li><span className="color-white">Dedicated machines only - the machine shouldn't be doing other
                                                    stuff while rented</span></li>
                                                <li><span className="color-white">Fast, reliable internet: at least 10Mbps per machine.</span>
                                                </li>
                                                <li><span className="color-white">10-series Nvidia GPU <span
                                                    className="opacity-50"> (AMD not yet
                                                        supported, older Nvidia not recommended).</span></span></li>
                                                <li><span className="color-white">At least 1 physical CPU core <span
                                                    className="opacity-50"> (2
                                                        hyperthreads) per GPU.</span></span></li>
                                            </ul>
                                        </div> },
                                    { tabButton: <button className="btn">
                                            <span className="setup-number">2</span>
                                            <span className="tab-name">Install Applications</span>
                                        </button>,
                                        component: <div>
                                            <div className="d-flex align-items-center mb-15">
                                                <span className="instal-setup">1</span>
                                                <h4 className="heading heading-h4">Install Ubuntu 18.04:</h4>
                                            </div><p className="paragraph mb-10">Our software requires an XFS disk partition which is
                                            not installed by
                                            default. If an XFS disk partition is not found, the installer will create a
                                            loopback
                                            (emulated) XFS partition as a fallback, but we recommend using an actual XFS
                                            partition. Our
                                            setup script will automatically create the XFS partition from free space on the
                                            drive,
                                            however the default Ubuntu install will not leave any free space.</p>
                                        </div>
                                    }
                                ]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
