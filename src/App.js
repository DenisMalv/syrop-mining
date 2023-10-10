import {
    Routes,
    Route,
    Link,
    //Outlet
} from "react-router-dom";

import { useState } from "react";

// import Layout from "./layouts/Layout";
// import Landing from "./routes/Landing";
import Dashboard from './layouts/Dashboard';
import Dash from './routes/Dash';
import MyAccount from "./routes/MyAccount";
import CommandLine from "./routes/Command Line/CommandLine";
import MyHosts from "./routes/My Hosts/MyHosts";
import CreditLimit from "./routes/Credit Limit/CreditLimit";
import Earnings from "./routes/Earnings/Earnings";
import BackgroundTasks from "./routes/Background Tasks/BackgroundTasks";
import HowSetupHost from "./routes/HowSetupHost/HowSetupHost";

//AUTH
// import { SignUp } from "./routes/Landing/Auth/SignUp";
// import { Login } from "./routes/Landing/Auth/Login";
// import { ForgotPassword } from "./routes/Landing/Auth/ForgotPassword";

//DASHBOARD
import { Marketplace } from "./routes/Marketplace/Marketplace";
import { DockerImage } from "./routes/DockerImage/DockerImage";
import { DockerImageSettings } from "./routes/DockerImageSettings/DockerImageSettings";
import { MyInstances } from "./routes/MyInstances/MyInstances";
import { CoreComponents } from "./routes/CoreComponents/CoreComponents";

// LANDING
// import { AIGenerativeArt } from "./routes/Landing/AIGenerativeArt/AIGenerativeArt";
// import { AIGenerativeText } from "./routes/Landing/AIGenerativeText/AIGenerativeText";
// import { AutomatedCustomerService } from "./routes/Landing/AutomatedCustomerService/AutomatedCustomerService";
// import { GPUServers } from "./routes/Landing/GPUServers/GPUServers";
// import { Pricing } from "./routes/Landing/Pricing/Pricing";
// import { GPUCryptoMining } from "./routes/Landing/GPUCryptoMining/GPUCryptoMining";
// import { CloudGpuRendering } from "./routes/Landing/CloudGpuRendering/CloudGpuRendering";
// import { GPUForDeepMachineLearning } from "./routes/Landing/GPUForDeepMachineLearning/GPUForDeepMachineLearning";
// import { Blog } from "./routes/Landing/Blog/Blog";

// import { Article } from "./routes/Landing/Blog/Article/Article";
// import { GPUInstance } from "./routes/Landing/GPUServers/GPUInstance/GPUInstance";

	function App() {
		const [isLogin,setIsLogin] = useState(false)


	return (
		<>
			<Routes>
				{/* DEV LINKS */}
				{/* <Route path="sign-up" element={<SignUp setIsLogin={setIsLogin} isLogin={isLogin}/>} />
				<Route path="login" element={<Login setIsLogin={setIsLogin} isLogin={isLogin}/>} />
				<Route path="forgot-password" element={<ForgotPassword />} /> */}

				{/* ========= Global routes ======= */}
				{/* <Route path="/" element={<Layout isLogin={isLogin} setIsLogin={setIsLogin}/>}>
					<Route index element={<Landing/>}/>
					<Route path="ai-art" element={<AIGenerativeArt />} />
					<Route path="ai-text" element={<AIGenerativeText />} />
					<Route path="customer-services" element={<AutomatedCustomerService/>} />
					<Route path="gpu-crypto-mining" element={<GPUCryptoMining/>} />
					<Route path="cloud-gpu-rendering" element={<CloudGpuRendering/>} />
					<Route path="gpu-for-deep-machine-learning" element={<GPUForDeepMachineLearning/>} />
					<Route path="gpu-servers" element={<GPUServers />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/article" element={<Article />} />
					<Route path="/gpu-instance" element={<GPUInstance />} />
				</Route> */}
				{/* ========= Global routes ======= */}


				{/* ========= Private routes ======= */}
				<Route path="/" element={<Dashboard/>}>
					<Route path="/my-account" element={<MyAccount/>}/>
					<Route path="/command-line" element={<CommandLine/>}/>
                    <Route path="/credit-limit" element={<CreditLimit/>}/>
					<Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/my-instances" element={<MyInstances />}/>
                    <Route path="/earnings" element={<Earnings/>}/>
                    <Route path="/my-hosts" element={<MyHosts/>}/>
                    <Route path="/background-tasks" element={<BackgroundTasks/>}/>
                    <Route path="/how-setup-host" element={<HowSetupHost/>}/>
					<Route path="/docker-image" element={<DockerImage />} />
					<Route path="/docker-image-settings" element={<DockerImageSettings />} />

					<Route path="dash" element={<Dash/>}/>
					<Route
						path="core-components"
						element={<CoreComponents />}
					/>
				</Route>
				{/* ========= Private routes ======= */}
			</Routes>
		</>
	);
	}

	export default App;
