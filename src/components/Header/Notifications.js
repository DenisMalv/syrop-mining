import {useState,useEffect,useRef} from 'react'


import { useClickOutside } from "../../helpers/useClickOutside";
import  {ReactComponent as IcoMark} from '../../assets/img/icon-mark.svg'
import  {ReactComponent as IcoLock} from '../../assets/img/icon-lock.svg'


export const Notifications =({setDropDown,outBtn})=>{
    // STATE
    const dropRef = useRef(null);
    // EFFECTS;
    useClickOutside(dropRef,setDropDown,outBtn);
    // METHODS
    const[viewAll, setViewAll] = useState(false);

    const notifications = [
        {
            title: 'Your password has been changed.',
            date: 'Jul 23, 2022 at 09:15 AM',
            viewed: false,
        },
        {
            title: 'Your password has been changed.',
            date: 'Jul 24, 2022 at 10:15 AM',
            viewed: false,
        },
        {
            title: 'Your password has been changed.',
            date: 'Jul 24, 2022 at 05:25 AM',
            viewed: false,
        },
        {
            title: 'Your password has been changed.',
            date: 'Jul 23, 2022 at 09:15 AM',
            viewed: false,
        },
        {
            title: 'Your password has been changed.',
            date: 'Jul 24, 2022 at 10:15 AM',
            viewed: false,
        },
        {
            title: 'Your password has been changed.',
            date: 'Jul 24, 2022 at 05:25 AM',
            viewed: false,
        },
    ];

    return(
        <div className="header__btn-drop" style={{zIndex:101}} ref={dropRef}>
            <div className={`header__btn-drop-wrap ${viewAll ? 'max-h-320' : ''}`}>
                <div className="header__btn-drop-head">
                    <h3 className="header__btn-drop-title">Notifications</h3>
                    <button className="header__btn-drop-status">
                        <span className="header__btn-drop-status-icon">
                            <IcoMark/>
                        </span>
                        <span>Mark as read</span>
                    </button>
                </div>
                <div className="header__btn-drop-list">
                    {
                        (viewAll ? notifications : [...notifications].slice(0, 3)).map((item, index) => {
                            return <a href="#" className={`header__btn-drop-item ${ !item.viewed ? 'header__btn-drop-item--not-read' : '' }`} key={index}>
                                <div className="header__btn-drop-item-text">
                                    <div className="header__btn-drop-item-title">{ item.title }</div>
                                    <div className="header__btn-drop-item-date">{ item.date }</div>
                                </div>
                                <div className="header__btn-drop-item-icon">
                                    <IcoLock/>
                                </div>
                            </a>
                        })
                    }
                </div>
                <button className="header__btn-all" onClick={() => setViewAll(!viewAll)}>
                    { viewAll ? 'View less notifications' : 'View all notifications' }
                </button>
            </div>
        </div>
    )
}