import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import "./assets/css/plagins/choices.css"
import "./assets/css/bootstrap-grid.css"
import "./assets/css/reset.css"
import "./assets/css/global.css"
import "./assets/fonts/fonts.css"
import "./assets/css/components/components.css"
import "./assets/css/components/buttons.css"

import "./assets/css/main-alpha.css"
import "./assets/css/main-bravo.css"
import "./assets/css/main-charlie.css"
import "./assets/css/main-delta.css"
import "./assets/css/media-alpha.css"
import "./assets/css/media-bravo.css"
import "./assets/css/media-charlie.css"
import "./assets/css/media-delta.css"
import './assets/css/react.css';

// import './assets/cssLanding/components/components.css'
// import './assets/cssLanding/components/header.css'
// import './assets/cssLanding/components/modal.css'
// import './assets/cssLanding/plagins/choices.css'
// import './assets/cssLanding/bootstrap-grid.css'
// import './assets/cssLanding/global.css'
// import './assets/cssLanding/main-alpha.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter basename='syrop-mining'>
			<App />
		</BrowserRouter>
	</Provider>
);


