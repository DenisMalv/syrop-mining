import React, {useEffect, useState} from "react";
import "../../../assets/css/components/modal.css";

export const Connect = ({isShown, onClose}) => {
    const [isPopupShow, setIsPopupShown] = useState();
    const [connectSSHValue, setConnectSSHValue] = useState("ssh -p 18999 root@shh5.hasmarket.com");

    useEffect(() => {
        setIsPopupShown(isShown);
    }, [isShown])

    const handleClose = () => {
        onClose();
        setIsPopupShown(false);
    }
    const handleSubmit = () => {
        console.log("submit connect SSH");
        onClose();
    }
    return (
        <div id="modal-1" className={`modal modal-1 ${isPopupShow ? "modal--show" : ""}`}>
            <div className="modal__dialog modal__dialog--500">
                <div className="modal__content" style={{borderRadius:"2px"}}>
                    <div className="modal__header p-30">
                        <h2 className="modal__header-title ttu" style={{ paddingRight: '35px' }}>Connect with SHH</h2>
                        <button className="btn btn-close" onClick={() => handleClose()}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.3335 7.33325L14.6668 14.6666" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M14.6668 7.33325L7.3335 14.6666" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="modal__body">
                        <div className="input-custom mb-50">
                            <label className="input-custom__label">To connect:</label>
                            <div className="input-custom__wrap-input">
                                <input
                                    className="input-custom__input"
                                    type="text"
                                    value={connectSSHValue}
                                    onChange={(event) => setConnectSSHValue(event.target.value)}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary btn--lg nowrap fsz-14 px-25" onClick={() => handleSubmit()}>
                            <span className="text fw-500">Submit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
