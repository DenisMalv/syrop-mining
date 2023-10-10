import React,{useState,useEffect} from "react";

import { MyHostsHeader } from "./MyHostsHeader";
import { MyHostsMain } from "./MyHostsMain";
import Settings from "./Settings"

const  MyHosts = () => {
    const [isSettings,setIsSettings] = useState(false)
    return (


        <div className="content-body p-30 w-100">
            {isSettings && <Settings setIsSettings={setIsSettings}/>}
            {!isSettings &&  <>
                <MyHostsHeader />
                <MyHostsMain setIsSettings={setIsSettings}/>
                </>
            }
        </div>


    )
}

export default MyHosts
