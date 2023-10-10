import { useEffect,useState} from 'react'
import { useSelector, useDispatch  } from 'react-redux';

import { Tabs } from '../../components/base/Controls/Tabs';

import { CheckRequirementsTab } from './CheckRequiremenstTab';
import { InstallAplicationsTab } from './InstallAplicationsTab';
import { ConfigureNetworkingTab } from './ConfigureNetworkingTab';
import { ListYourHostTab } from './ListYourHostTab';
import { SetupHostTab } from './SetupHostTab';
import { ExtraMiningTab } from './ExtraMiningTab';




const HowSetupHost = () => {

    const dispatch = useDispatch()
    // SELECTORS
    // STATE 
    // EFFECTS
    // METHODS



    return (

        <div className="flex-content">
            <div className="content-body p-30 w-100">
                <h2 className="heading heading-h2 mb-10 text-center-sm ttu">How to setup your host</h2>
                <p className='subheading opacity-50 mb-30 text-center-sm'>Learn how to setup your host and list it on a marketplace</p>
                <Tabs
                    tabsHeadClassName="tab-nav how-setup-list"
                    tabsListClassName="list"
                    tabs={[
                    {
                        tabButton: <button className="btn">
                                        <span className="setup-number">1</span>
                                        <span className="tab-name">Check Requirements</span>
                                    </button>,
                        component: <CheckRequirementsTab/>
                    },
                    {
                        tabButton:<button className="btn">
                                    <span className="setup-number">2</span>
                                    <span className="tab-name">Instal Applications</span>
                                </button>,
                        component:<InstallAplicationsTab/>
                    },
                    {
                        tabButton:<button className="btn">
                                    <span className="setup-number">3</span>
                                    <span className="tab-name">Configure Networking</span>
                                </button>,
                        component: <ConfigureNetworkingTab/>                      
                    },
                    {
                        tabButton:<button className="btn">
                                    <span className="setup-number">4</span>
                                    <span className="tab-name">List Your Host</span>
                                </button>,
                        component: <ListYourHostTab/>                        
                    },
                    {
                        tabButton:<button className="btn">
                                    <span className="setup-number">5</span>
                                    <span className="tab-name">Setup Host</span>
                                </button>,
                        component:<SetupHostTab/>                        
                    },
                    {
                        tabButton:<button className="btn">
                                    <span className="setup-number" style={{padding:"2px 8px"}}>Extra</span>
                                    <span className="tab-name">Mining</span>
                                </button>,
                        component:<ExtraMiningTab/>                        
                    }

                ]}/>
            </div>
        </div>
    )
}

export default HowSetupHost
