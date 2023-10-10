import React from "react";

export const ExtraMiningTab = () => {
    return (
        <div className="tab active" id="mining">
            <h4 className="heading heading-h4 heading--basic mb-15 ">Mining Jobs</h4>
            <p className="subheading opacity-50 mb-30 ">Your job must be packaged with a docker container. Use
                the "Run custom command on start" option. We have tested the following mining apps (these
                are all probably now out of date - search the host discord for newer images):</p>

            <div className="setup-host-group-btn">
                <h4 className="heading heading-h4 heading--basic mb-15">Z-enemy</h4>
                <a href="#" className="btn btn--bordered nowrap btn--lg ml-20 mb-15">
                    <span className="fs-13 lh-22 fw-500">Source</span>
                    <span className="d-flex ml-5"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5152 8.01252L13.669 6.85871C14.4066 6.14309 14.7014 5.08556 14.4405 4.09153C14.1795 3.09751 13.4032 2.3212 12.4092 2.06022C11.4151 1.79924 10.3576 2.09408 9.64198 2.8317L7.17428 5.29939C6.64002 5.83328 6.33984 6.5576 6.33984 7.3129C6.33984 8.06819 6.64002 8.79252 7.17428 9.3264L7.16695 9.33374C7.3968 9.55921 7.66368 9.74353 7.95594 9.87863" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M9.0379 6.12793C9.33019 6.26327 9.59706 6.44781 9.82689 6.67349C10.3612 7.20737 10.6613 7.9317 10.6613 8.687C10.6613 9.44229 10.3612 10.1666 9.82689 10.7005L7.3592 13.1682C6.2424 14.2517 4.46271 14.2382 3.36244 13.1379C2.26217 12.0377 2.2487 10.258 3.33219 9.14118L4.486 7.98737" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    </span>
                </a>
            </div>
            <div className="input-custom mb-15">
                <p className="paragraph mb-5">Image:</p>
                <div className="input-custom__wrap-input">
                    <input className="input-custom__input" type="text" disabled="" value="nvidia/cuda:8.0-runtime-ubuntu16.04" />
                </div>
            </div>
            <div className="input-custom mb-15">
                <p className="paragraph mb-5">Run custom command on start:</p>
                <textarea className="input-custom__input" rows="3" disabled="">bash -c 'apt update; apt install wget; apt install libcurl3; apt install libjansson4; wget -c https://github.com/RCS1/res2/raw/master/z-enemy; chmod +x z-enemy; ./z-enemy -a x16r -o stratum+tcp://us.ravenminer.com:4567 -u RQcdYaLCw37aLbeAw14qEU75BZmGCGcyMC -p d=16 -i 20'</textarea>
            </div>
            <p className="paragraph text-ellipsis mb-30">
                Replace <span className="color-white">RQcdYaLCw37aLbeAw14qEU75BZmGCGcyMC</span> with your output address
                and adjust any other z-enemy params as needed.
            </p>

            <div className="setup-host-group-btn">
                <h4 className="heading heading-h4 heading--basic mb-15">ethminer</h4>
                <a href="#" className="btn btn--bordered nowrap btn--lg ml-20 mb-15">
                    <span className="fs-13 lh-22 fw-500">Source</span>
                    <span className="d-flex ml-5">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5152 8.01252L13.669 6.85871C14.4066 6.14309 14.7014 5.08556 14.4405 4.09153C14.1795 3.09751 13.4032 2.3212 12.4092 2.06022C11.4151 1.79924 10.3576 2.09408 9.64198 2.8317L7.17428 5.29939C6.64002 5.83328 6.33984 6.5576 6.33984 7.3129C6.33984 8.06819 6.64002 8.79252 7.17428 9.3264L7.16695 9.33374C7.3968 9.55921 7.66368 9.74353 7.95594 9.87863" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9.0379 6.12793C9.33019 6.26327 9.59706 6.44781 9.82689 6.67349C10.3612 7.20737 10.6613 7.9317 10.6613 8.687C10.6613 9.44229 10.3612 10.1666 9.82689 10.7005L7.3592 13.1682C6.2424 14.2517 4.46271 14.2382 3.36244 13.1379C2.26217 12.0377 2.2487 10.258 3.33219 9.14118L4.486 7.98737" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </a>
            </div>
            <div className="input-custom mb-15">
                <p className="paragraph mb-5">Image:</p>
                <div className="input-custom__wrap-input">
                    <input className="input-custom__input" type="text" disabled="" value="anthonytatowicz/eth-cuda-miner" />
                </div>
            </div>

            <div className="input-custom mb-15">
                <p className="paragraph mb-5">Run custom command on start:</p>
                <div className="input-custom__wrap-input">
                    <input className="input-custom__input" type="text" disabled="" value="-U -S us-west1.nanopool.org:9999 -O 0x5C9314b28Fbf25D1d054a9184C0b6abF27E20d95 --farm-recheck 200" />
                </div>
            </div>

            <p className="paragraph text-ellipsis mb-30">
                Replace <span className="color-white">us-west1.nanopool.org:9999</span> with your pool, <span className="color-white">0x5C9314b28Fbf25D1d054a9184C0b6abF27E20d95</span> with your output address and adjust any other z-enemy params as needed.
            </p>

            <div className="setup-host-group-btn">
                <h4 className="heading heading-h4 heading--basic mb-15">ccminer (x16r)</h4>
                <a href="#" className="btn btn--bordered nowrap btn--lg ml-20 mb-15">
                    <span className="fs-13 lh-22 fw-500">Source</span>
                    <span className="d-flex ml-5"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5152 8.01252L13.669 6.85871C14.4066 6.14309 14.7014 5.08556 14.4405 4.09153C14.1795 3.09751 13.4032 2.3212 12.4092 2.06022C11.4151 1.79924 10.3576 2.09408 9.64198 2.8317L7.17428 5.29939C6.64002 5.83328 6.33984 6.5576 6.33984 7.3129C6.33984 8.06819 6.64002 8.79252 7.17428 9.3264L7.16695 9.33374C7.3968 9.55921 7.66368 9.74353 7.95594 9.87863" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M9.0379 6.12793C9.33019 6.26327 9.59706 6.44781 9.82689 6.67349C10.3612 7.20737 10.6613 7.9317 10.6613 8.687C10.6613 9.44229 10.3612 10.1666 9.82689 10.7005L7.3592 13.1682C6.2424 14.2517 4.46271 14.2382 3.36244 13.1379C2.26217 12.0377 2.2487 10.258 3.33219 9.14118L4.486 7.98737" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    </span>
                </a>
            </div>

            <div className="input-custom mb-15">
                <p className="paragraph mb-5">Image:</p>
                <div className="input-custom__wrap-input">
                    <input className="input-custom__input" type="text" disabled="" value="cgarnier/x16r-ccminer-docker" />
                </div>
            </div>

            <div className="input-custom mb-15">
                <p className="paragraph mb-5">Run custom command on start:</p>
                <div className="input-custom__wrap-input">
                    <input className="input-custom__input" type="text" disabled="" value="-a x16r --url=&quot;stratum+tcp://rvn.suprnova.cc:6666&quot; --userpass=&quot;USER:PWD&quot;" />
                </div>
            </div>

            <p className="paragraph mb-30">
                Replace <span className="color-white">USER</span> and <span className="color-white">PWD</span> with your suprnova worker username and password.
            </p>
        </div>
    )
}