import { configureStore } from '@reduxjs/toolkit';
// import { contactsSliceReducer } from './contactsSlice/contactsSlice';
import {myAccountReducer} from './my account/my-account-slice'
import {commandLineReducer} from './comand line/comadd-line-slice'
import {creditLimitReducer} from './credit limit/credit-limit-slice'
import {marketplaceReducer} from './marketplace/marketplace-slice'
import {myInstancesReducer} from './my instances/my-instances-slice'
import {earningsReducer} from './earnings/earnings-slice'
import {myHostsReducer} from './my hosts/my-host-slice'
import {backgroundTasksReducer} from './background tasks/background-tasks-slice'
import {howSetupHostReducer} from './how setup host/how-setup-host-slice'
import {themeReducer} from './theme/theme-slice'


// store
export const store = configureStore({
  reducer: {
    // placeholder: placeholderReducer,
    myAccount: myAccountReducer,
    commandLine: commandLineReducer,
    creditLimit: creditLimitReducer,
    marketplase: marketplaceReducer,
    myInstances: myInstancesReducer,
    earnings: earningsReducer,
    myHosts: myHostsReducer,
    backgroundTasks: backgroundTasksReducer,
    howSetupHost: howSetupHostReducer,
    theme: themeReducer,
  },
});
