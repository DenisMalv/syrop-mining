import {useState,useEffect} from 'react'

import { Button } from '../../components/base/Button/Button'
import { ReactComponent as IcoWithdraw } from '../../assets/img/icon-withdraw.svg';

const BalanceBlock = ({balanceSelector,handleWithdraw})=>{

    return (
            <div className="earnings-top mb-15">
                <div className="earnings-top__total mb-15">
                    <dl className="earnings-top__dl">
                        <dt className="earnings-top__dt">Rentals</dt>
                        <dd className="earnings-top__dd">
                            <span className="earnings-top__dd-currency">$</span>
                            <span>{balanceSelector.rentals.toFixed(2)}</span>
                        </dd>
                    </dl>
                    <dl className="earnings-top__dl">
                        <dt className="earnings-top__dt">Service Fee</dt>
                        <dd className="earnings-top__dd">
                            <span className="earnings-top__dd-currency">$</span>
                            <span>{balanceSelector.serviceFee}</span>
                        </dd>
                    </dl>
                    <dl className="earnings-top__dl">
                        <dt className="earnings-top__dt">Total</dt>
                        <dd className="earnings-top__dd">
                            <span className="earnings-top__dd-currency">$</span>
                            <span>{balanceSelector.total.toFixed(2)}</span>
                        </dd>
                    </dl>
                </div>
                <Button
                    text={"Withdraw"}
                    customButtonClass={"btn btn-primary btn--lg mb-15"}
                    icon={<IcoWithdraw/>}
                    iconPosition={"right"}
                    size={"large"}
                    type={"primary"}
                    onClick={handleWithdraw}
                />
            </div>
    )
}

export default BalanceBlock
