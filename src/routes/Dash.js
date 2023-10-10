import React from 'react'
import { Link } from 'react-router-dom'

const Dash = () => {
    return (
                 <div style={{padding: "50px 50px 50px 50px"}}>
                    <h1>Hash market</h1>
                    <ul>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/core-components">
                                Core Components
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/dash">
                                Dashboard
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/my-account">
                                My account
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/command-line">
                                Command Line
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/credit-limit">
                                Credit Limit
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/marketplace">
                                Marketplace
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/my-instances">
                                My Instances
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/earnings">
                                Earnings
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/my-hosts">
                                My Hosts
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/background-tasks">
                                Background Tasks
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/how-setup-host">
                                How Setup Host
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/docker-image">
                                Select Docker Image
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/docker-image-settings">
                                Docker Image Settings
                            </Link>
                        </li>

                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/">
                                Landing
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/ai-art">
                                AI Generative Art
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/ai-text">
                                AI Generative Text
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/customer-services">
                            Automated Customer Service
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/gpu-crypto-mining">
                            GPU Crypto mining
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/cloud-gpu-rendering">
                            Cloud GPU Rendering
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/gpu-for-deep-machine-learning">
                            GPU for Deep Machine Learning
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/gpu-servers">
                                GPU Servers
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/article">
                                Article
                            </Link>
                        </li>
                        <li style={{fontSize: "20px", marginTop: "6px"}}>
                            <Link className="default--link" to="/gpu-instance">
                                GPU Instance
                            </Link>
                        </li>
    
                    </ul>
                </div>
    )
}

export default Dash