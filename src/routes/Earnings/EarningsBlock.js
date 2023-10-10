import {useState,useEffect} from 'react'


import { ReactComponent as IcoTime } from '../../assets/img/icon-time.svg';
import { ReactComponent as IcoCalendar } from '../../assets/img/icon-calendar.svg';
import { ReactComponent as IcoMyHosts } from '../../assets/img/icon-best.svg';
import { ReactComponent as IcoArrowTop } from '../../assets/img/icon-arrow-top.svg';


const EarningsBlock = ({earningsSelector})=>{

    return (
        <div className="columns columns-14 mb-15">
        <div className="col-4 col-991-6 col-578-12 d-flex">
            <div className="earnings-detail__item mb-15 w-100">
                <span className="earnings-top__dt mr-15">
                    <span className="earnings-top__dt-icon">
                        <IcoTime/>
                    </span>
                    <span className="earnings-top__dt-text">All Time Earnings</span>
                </span>
                <span className="earnings-top__dd">
                    <span className="earnings-top__dd-currency">$</span>
                    <span>{earningsSelector.all.toFixed(2)}</span>
                </span>
            </div>
        </div>
        <div className="col-4 col-991-6 col-578-12 d-flex">
            <div className="earnings-detail__item mb-15 w-100">
                <span className="earnings-top__dt mr-15">
                    <span className="earnings-top__dt-icon">
                        <IcoCalendar/>
                    </span>
                    <span className="earnings-top__dt-text">Earnings Today</span>
                </span>
                <span className="earnings-top__dd">
                    <span className="earnings-top__dd-currency">$</span>
                    <span>{earningsSelector.today.toFixed(2)}</span>
                    <span className="earnings-top__dd-arrow">
                        <IcoArrowTop width={20} height={20}/>
                    </span>
                </span>
            </div>
        </div>
        <div className="col-4 col-991-6 col-578-12 d-flex">
            <div className="earnings-detail__item mb-15 w-100">
                <span className="earnings-top__dt mr-15">
                    <span className="earnings-top__dt-icon">
                        <IcoMyHosts/>
                    </span>
                    <span className="earnings-top__dt-text">Best Host</span>
                </span>
                <span className="earnings-top__dd">
                    <span className="earnings-top__dd-currency mr-6">ID: &nbsp;</span>
                    <span>{earningsSelector.best_host}</span>
                </span>
            </div>
        </div>
    </div>

    )
}

export default EarningsBlock
