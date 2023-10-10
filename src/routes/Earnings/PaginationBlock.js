import {useState,useEffect} from 'react'

import { Button } from '../../components/base/Button/Button';
import { ReactComponent as IcoPagination } from '../../assets/img/ico-arrow-pagin.svg';
import {SelectBox} from "../../components/base/Form/SelectBox";


const PaginationBlock = ({
    ENTRIES,
    entries,
    dropdownEntries,
    handleChangeEntries,
    handleDropdownEntries,
    isActivePage,
    handleChangePage,
    })=>{

    //SELECTORS
    //STATE
    //EFFECTS
    //METHODS

    return (
    <div className="widget-table--footer pt-15">
        <div className="dbl-options">
            <div className="option d-flex align-items-center mb-15" style={{columnGap: "15px"}}>
                <div style={{flex: "1 0 70px"}}>
                    <SelectBox
                        disableInputMarginBottom
                        options={[

                            {label: "10", value: "10"},
                            {label: "11", value: "11"},
                            {label: "12", value: "12"},
                            {label: "13", value: "13"},
                            {label: "14", value: "14"},
                        ]}
                        defaultValue="10"
                        widthMenu="70px"
                        widthControl="70px"
                        itemsCenter
                        menuAutoPlacement
                        // customStyles={{width: "70px"}}
                        onSelect={(value) => console.log(value)}
                    />
                </div>
                <span className="hidden-768">Entries</span>
            </div>
            <div className="option mb-15 d-flex">
                <div className="pagination">
                    <Button  icon={<IcoPagination/>} iconPosition={"right"} customIconClass={"ico"} customButtonClass={`btn pagination--btn --prev ${isActivePage <= 1 ? "--disabled" : ""} `}/>
                    <ul className="pagination--list">
                        <Button text={1} customButtonClass={`btn pagination--page active`} />
                        <Button text={2} customButtonClass={"btn pagination--page"} />
                        <Button text={3} customButtonClass={"btn pagination--page"} />
                        <Button text={"..."} customButtonClass={"btn pagination--page hidden-768"} />
                        <Button text={6} customButtonClass={"btn pagination--page hidden-768"} />
                        <Button text={7} customButtonClass={"btn pagination--page hidden-768"} />
                        <Button text={8} customButtonClass={"btn pagination--page hidden-768"} />
                    </ul>
                    <Button  icon={<IcoPagination/>} iconPosition={"right"} customIconClass={"ico"} customButtonClass={"btn pagination--btn --next"} />
                </div>
            </div>
        </div>
    </div>

    )
}

export default PaginationBlock
