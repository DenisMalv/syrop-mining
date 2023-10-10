import "./App.scss";

import { Routes, Route } from 'react-router-dom';

import Layout from "../layout/Layout";
// import Hero from "./components/Hero/Hero";
// import Expectations from "./components/Expections/Expectations";
// import Skills from "./components/Skills/Skills";
// import Expirience from "./components/Expirience/Expirience";
// import Projects from "./components/Projects/Projects";
// import Contacts from "./components/Contacts/Contacts";
import Page404 from "./Page404.jsx/Page404";

// import img from './utils/img_imports'


function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout/>}>
			</Route>
			<Route path="*" element={<Page404 />} />
		</Routes>
		
	);
}

export default App;

