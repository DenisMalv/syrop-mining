import React, { useEffect,useState} from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import { changeTotalBalanse, getTotalBalance,getCreditLimit,getLoading,getError } from '../../redux/credit limit/credit-limit-slice';
import { normalisePaymentMethod, ucFirst } from '../../helpers/helpers';

import { Table } from '../../components/base/Table/Table';
import { TableRow } from '../../components/base/Table/TableRow';
import { TableColumn } from '../../components/base/Table/TableColumn';
import { Pill } from '../../components/base/Pill/Pill';
import { Button } from '../../components/base/Button/Button';
import AddFundsPage from './AddFundsPage';
import { ReactComponent as IcoAdd } from '../../assets/img/icon-plus2.svg';
import MastercardImage from '../../assets/img/ico-mastercard.svg'
import VisaImage from '../../assets/img/ico-visa.svg'
import EtherImage from '../../assets/img/ico-ether.svg'

const TABLE_HEADERS = ["Type","Payment Method","Amount","Date","Status"]

const CreditLimit = () => {

    const dispatch = useDispatch()
    const totalBalanceSelector = useSelector(getTotalBalance)
    const creditLimitSelector = useSelector(getCreditLimit)
    const loading = useSelector(getLoading)
    const error = useSelector(getError)

    // STATE 
    const [entries,setEntries]=useState(10)
    const [dropdownEntries,setDropdownEntries]=useState(false)
    const [isAddFunds,setIsAddFunds]=useState(false)

    //METHODS
    const handleDropdownEntries = ()=>{
        setDropdownEntries(!dropdownEntries)
    }
    const handleChangeEntries = (e)=>{
        setEntries(e.currentTarget.dataset.selectOption)
        handleDropdownEntries()
    }
    const handleAddFunds=()=>{
        setIsAddFunds(!isAddFunds)
    }

    return (

        <div className="flex-content">
            {!isAddFunds && 
                <div className="content-body p-30 w-100">
                    <div className="head-flex">
                        <div className="head-flex--item d-flex flex-wrap">
                            <div className="d-flex flex-column mr-30 mb-15">
                                <p className="subheading opacity-50 color-50"  >Total Balance</p>
                                <h2 className="heading heading-h2 ff-main">{`$${totalBalanceSelector.totalBalance}`}</h2>
                            </div>
                            <div className="d-flex flex-column justify-content-center mb-15">
                                <a href="#" className="btn btn-primary btn--lg fsz-14" onClick={handleAddFunds}>
                                    <span className="info">Add Funds</span>
                                    <span className="ico ico-20 ml-8">
                                        <IcoAdd/>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-table">
                        <div className="widget-table--body">
                            <div className="table-wrapper ova-x scroll--style r-2">
                                <Table tableClassName="table" tableHeader={TABLE_HEADERS} headClassName="table--head" bodyClassName="table--body">
                                    {creditLimitSelector.slice(0,entries).map(({id,type,payment_method,amount,date,status,img})=>
                                                        <TableRow key={id}>
                                                            <TableColumn className="fw-500">{ucFirst(type)}</TableColumn>
                                                            <TableColumn>
                                                                <div className="card-number">
                                                                    <span className="card-number--image mr-12"><img src={img}/></span>
                                                                    <span className="card-number--info fw-500">
                                                                        {normalisePaymentMethod(payment_method)}
                                                                    </span>
                                                                </div>
                                                            </TableColumn>
                                                            <TableColumn className="fw-500">{`$${amount.toFixed(2)}`}</TableColumn>
                                                            <TableColumn className="fw-500">{date}</TableColumn>
                                                            <TableColumn>
                                                                <Pill label={ucFirst(status)} type={status}/>
                                                            </TableColumn>
                                                        </TableRow>
                                                        )}
                                </Table>
                            
                            </div>
                        </div>
                        <div className="widget-table--footer pt-15">
                            <div className="dbl-options">
                                <div className="option mb-15 d-flex align-items-center">
                                    <div className={`custom-select select--70 mr-15 ${dropdownEntries ? "active" : ''}`} data-select="">
                                        <button type="button" className="btn select--btn r-2" data-select-btn="" onClick={handleDropdownEntries}>
                                            <span className="info" data-select-current=""><span>{entries}</span></span>
                                            <span className="ico ico-arrow">
                                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.66667 1.33325L5.00001 4.66659L8.33334 1.33325" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <div className="select--body --top" data-select-drop="">
                                            <ul className="list-select">
                                                <li>
                                                    <a href="#" className="list-dropdown--link justify-content-center btn current" data-select-option="10" onClick={handleChangeEntries}>
                                                        <span>10</span>
                                                    </a>
                                                </li>
                                                    <li>
                                                        <a href="#" className="list-dropdown--link btn justify-content-center" data-select-option="11" onClick={handleChangeEntries}>
                                                            <span>11</span>
                                                        </a>
                                                    </li>
                                                                                                <li>
                                                        <a href="#" className="list-dropdown--link btn justify-content-center" data-select-option="12" onClick={handleChangeEntries}>
                                                            <span>12</span>
                                                        </a>
                                                    </li>
                                                                                                <li>
                                                        <a href="#" className="list-dropdown--link btn justify-content-center" data-select-option="13" onClick={handleChangeEntries}>
                                                            <span>13</span>
                                                        </a>
                                                    </li>
                                                                                                <li>
                                                        <a href="#" className="list-dropdown--link btn justify-content-center" data-select-option="14" onClick={handleChangeEntries}>
                                                            <span>14</span>
                                                        </a>
                                                    </li>
                                                                                        </ul>
                                        </div>
                                    </div>
                                    <span className="hidden-576 fsz-13">Entries</span>
                                </div>
                                <div className="option mb-15 d-flex">
                                    <div className="pagination">
                                        <a href="#" className="btn pagination--btn --prev --disabled">
                                            <span className="ico">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M4.58342 10.9999L17.4167 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M9.16675 6.41667L4.58341 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M9.16675 15.5833L4.58342 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                        <ul className="pagination--list">
                                            <li><a href="#" className="btn active pagination--page">1</a></li>
                                            <li><a href="#" className="btn pagination--page">2</a></li>
                                            <li><a href="#" className="btn pagination--page">3</a></li>
                                            <li><a href="#" className="btn pagination--page hidden-768">...</a></li>
                                            <li><a href="#" className="btn pagination--page hidden-768">6</a></li>
                                            <li><a href="#" className="btn pagination--page hidden-768">7</a></li>
                                            <li><a href="#" className="btn pagination--page hidden-768">8</a></li>
                                        </ul>
                                        <a href="#" className="btn pagination--btn --next">
                                            <span className="ico">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M4.58342 10.9999L17.4167 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M9.16675 6.41667L4.58341 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M9.16675 15.5833L4.58342 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </g>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isAddFunds && <AddFundsPage handleAddFunds={handleAddFunds}/>

            }
        </div>
    )
}

export default CreditLimit
