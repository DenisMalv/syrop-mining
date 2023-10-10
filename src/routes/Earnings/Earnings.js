import {useEffect, useState, useRef, memo} from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import {getBalance,getEarnings,getTransactionsHistory} from '../../redux/earnings/earnings-slice';


import { Button } from '../../components/base/Button/Button';
import { ReactComponent as IcoExports } from '../../assets/img/icon-export.svg';


import BalanceBlock from './BalanceBlock';
import EarningsBlock from './EarningsBlock';
import TableBlock from './TableBlock';
import PaginationBlock from './PaginationBlock';
import WithdrawPage from './WithdrawPage';

const TABLE_HEADERS = ["ID","Email","Host ID",`Amount`,"Date","Status"]
const ENTRIES = [10,11,12,13,14,]

const Earnings = memo(() => {

    const dispatch = useDispatch()
    const balanceSelector = useSelector(getBalance)
    const earningsSelector = useSelector(getEarnings)
    const transactionsHistorySelector = useSelector(getTransactionsHistory)
    const holder = useRef(null)
    const holder2 = useRef(null)

    // ===== STATE
    const [entries,setEntries]=useState(10)
    const [dropdownEntries,setDropdownEntries]=useState(false)
    const [isWithdraw,setIsWithdraw] = useState(false)
    const [isConnectWithdraw,setIsConnectWithdraw] = useState(false)
    const [isActivePage,setIsActivePage] = useState(1)
    const [error,setError] = useState({
        errorName:false,
    })

    //METHODS
    const handleDropdownEntries = ()=>{
        setDropdownEntries(!dropdownEntries)
    }
    const handleChangeEntries = (e)=>{
        setEntries(e.currentTarget.dataset.selectOption)
        handleDropdownEntries()
    }
    const handleWithdraw = ()=>{
        setIsWithdraw(!isWithdraw)
        setIsConnectWithdraw(false)
    }
    const handleConnectWithdraw = ()=>{
        setIsConnectWithdraw(!isConnectWithdraw)
    }
    const handleChangePage = (id)=>{
        setIsActivePage(id)
    }

    return (
        <div className="flex-content">
            {!isWithdraw && <div className="content-body p-30 w-100">
                {/* ===== Balance Block start ====*/}
                <BalanceBlock balanceSelector={balanceSelector} handleWithdraw={handleWithdraw}/>
                {/* ===== Balance Block end ====*/}

                {/* ===== Earnings Block start ====*/}
                <EarningsBlock earningsSelector={earningsSelector}/>
                {/* ===== Earnings Block end ====*/}

                <div className="widget-table-title">
                    <span className="widget-table-title__text mb-15 mr-15">Transactions History</span>
                    <Button text={"Export"} customButtonClass={"btn btn--bordered btn--md mb-15 fsz-13"} icon={<IcoExports/>} iconPosition={"right"}/>
                </div>

                {/* ===== Table Block start ====*/}
                <div className="widget-table">

                    {/* ===== table Block start ====*/}
                    <TableBlock
                        TABLE_HEADERS={TABLE_HEADERS}
                        transactionsHistorySelector={transactionsHistorySelector.slice(0,entries)}
                    />
                    {/* ===== table Block end ====*/}
                    {/* ===== pagination  Block start ====*/}
                    <PaginationBlock
                        ENTRIES={ENTRIES}
                        entries={entries}
                        dropdownEntries={dropdownEntries}
                        handleChangeEntries={handleChangeEntries}
                        handleDropdownEntries={handleDropdownEntries}
                        isActivePage={isActivePage}
                        handleChangePage={handleChangePage}
                        />
                    {/* ===== pagination Block end ====*/}
                </div>
                {/* ===== Table Block end ====*/}
            </div>}
            {isWithdraw && <WithdrawPage handleWithdraw={handleWithdraw} handleConnectWithdraw={handleConnectWithdraw} isConnectWithdraw={isConnectWithdraw}/>}
        </div>

    )
})

export default Earnings
