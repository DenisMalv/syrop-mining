import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/base/Button/Button'
import { ReactComponent as IcoBitpay } from '../../assets/img/icon-bitpay.svg'; 
import { ReactComponent as IcoStripe } from '../../assets/img/ico-streap.svg';
import { ReactComponent as IcoWithdraw } from '../../assets/img/icon-withdraw.svg'; 
import { ReactComponent as IcoPagination } from '../../assets/img/ico-arrow-pagin.svg';
import { ReactComponent as IcoVISA } from '../../assets/img/logo-visa.svg';
import { ReactComponent as IcoMastercard } from '../../assets/img/ico-mastercard.svg';
import { CREDIT_CARDS, PAYMENT_METHODS } from '../../helpers/localDB';
import { ucFirst } from '../../helpers/helpers';


const AddFundsPage = ({handleAddFunds})=>{
    // SELECTORS
    // STATE
    const navigate = useNavigate()
    const [addFundsValue,setAddFundsValue] = useState('')
    const [activePaymentMethod,setActivePaymentMethod] = useState(PAYMENT_METHODS[0])
    const [activeCard,setActiveCard] = useState(CREDIT_CARDS[0])

    //EFFECTS

    // METHODS

    const handleSetPaymentMethod = (elem)=>{
        setActivePaymentMethod(elem)
    }

    const normaliseCardNumber = (cardNumber,type) =>{
        if(type==="number"){
            const normalise = cardNumber.slice(-4)
            return `•••• •••• •••• ${normalise}`
        }
        if(type==="cvv"){
            return '•••'
        }
    }
    return (<>
        <div className="content-body p-30 w-100">
            <div className="mb-10" onClick={handleAddFunds}>
                <a href="#" className="btn color-white ">
                    <div style={{opacity:.2}}>
                        <IcoPagination/>
                    </div>
                    <span className="ml-12 opacity-50">Back</span>
                </a>
            </div>
            <h2 className="heading heading-h2 mb-30">ADD FUNDS</h2>            
                <ul className="withdraw-list">
                    <li className="withdraw-list__item mb-30">
                        <h4 className="withdraw-list__title">
                            <span className="withdraw-list__title-number"></span>
                            <span>Select a payment method</span>
                        </h4>
                        <ul className="switches-payment">
                            {PAYMENT_METHODS && PAYMENT_METHODS.length > 0 &&
                                PAYMENT_METHODS.map(elem=>
                                <li className={`switches-payment__item switches-payment__item--bank-card ${activePaymentMethod.id === elem.id ? "switches-payment__item--active":''}`} 
                                    onClick={()=>handleSetPaymentMethod(elem)} 
                                    key={elem.id}
                                    >
                                    <span className="switches-payment__logo switches-payment__logo--stripe">
                                        {elem.type === "stripe" ? <IcoStripe color={activePaymentMethod.id === elem.id ? "#6772E5" :''}/> : <IcoBitpay color={activePaymentMethod.id === elem.id ? "#2240C4" : ""}/>}
                                    </span>
                                    <span >{ucFirst(elem.type)}</span>

                                </li>
                            )}
                        </ul>
                    </li>
                    {activePaymentMethod.type === 'stripe' && 
                        <li className="withdraw-list__item mb-30">
                            <h4 className="withdraw-list__title">
                                <span className="withdraw-list__title-number"></span>
                                <span>Select credit card</span>
                            </h4>
                            <ul className="bank-card-list">
                                {CREDIT_CARDS && CREDIT_CARDS.length > 0 &&
                                    CREDIT_CARDS.map(elem=>
                                    <li className={`bank-card-item ${activeCard.id === elem.id ? "bank-card-item--active":''}`} 
                                        onClick={()=>setActiveCard(elem)} 
                                        key={elem.id}
                                    >
                                        <div className="bank-card-head">
                                            <div className="bank-card-name">{ucFirst(elem.type)}</div>
                                            {elem.type === "mastercard" ? <IcoMastercard/> : <IcoVISA/>}
                                        </div>
                                        <div className="bank-card-number">{normaliseCardNumber(elem.number,"number")}</div>
                                        <div className="bank-card-footer">
                                            <span className="bank-card-date">{`${elem.month}/${elem.year}`}</span>
                                            <span className="bank-card-cvv">{normaliseCardNumber(elem.number,"cvv")}</span>
                                        </div>
                                    </li>
                                )}
                                <li className="bank-card-item bank-card-item--new">
                                    <div className="bank-card-icon-new">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div className="bank-card-text-new">Add new card</div>
                                </li>
                            </ul>
                        </li>
                    }
                    <li className="withdraw-list__item mb-30">
                        <h4 className="withdraw-list__title">
                            <span className="withdraw-list__title-number"></span>
                            <span>Amount of credit to add </span>
                        </h4>
                        <label className="withdraw-list__input-wrap">
                            <input type="text" className="withdraw-list__input" value={addFundsValue} onChange={(e)=>setAddFundsValue(e.target.value)}/>
                            <span className="withdraw-list__input-label">
                                <strong>{`You'll be withdrawed for $${addFundsValue ? addFundsValue : ""} once.`}</strong>
                                {activePaymentMethod.type === "stripe" && <span>We use Stripe, so your card is never sent to our servers.</span>}
                            </span>
                        </label>
                    </li>
                </ul>
                <div>
                    <Button  
                        text={"Add Funds"} 
                        customButtonClass={"btn btn-primary btn--lg fsz-14"} 
                        icon={<IcoWithdraw/>} 
                        size={"large"} 
                        type={"primary"}
                        onClick={()=>{
                            console.log(`Withdraw! ${addFundsValue}`);
                            handleAddFunds()
                            navigate('/credit-limit',{replace:true})
                            }}

                    />
                </div>
        </div>
    </>
    )
}

export default AddFundsPage