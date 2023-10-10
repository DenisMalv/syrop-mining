import React from "react";

import ServerImage1 from "../../../assets/imgLanding/servers1.png";
import ServerImage2 from "../../../assets/imgLanding/servers2.png";
import ServerImage3 from "../../../assets/imgLanding/servers3.png";
import ServerImage4 from "../../../assets/imgLanding/servers4.png";
import ServerImage5 from "../../../assets/imgLanding/servers5.png";
import ServerImage6 from "../../../assets/imgLanding/servers6.png";
import {Link} from "react-router-dom";

const servers = [
    {image: ServerImage1, title: "Tesla V100 NVLINK"},
    {image: ServerImage2, title: "NVIDIA GeForce RTX 3090"},
    {image: ServerImage3, title: "TITAN RTX"},
    {image: ServerImage4, title: "NVIDIA GeForce GTX 1080 Ti"},
    {image: ServerImage5, title: "NVIDIA GeForce RTX 3080 Ti"},
    {image: ServerImage6, title: "AMD Radeon RX 6800 XT"},
]

export const ServersGoods = () => {
    return (
        <section className="section-100">
            <div className="columns columns-15">
                <div className="col-12 text-center">
                    <h2 className="heading heading-h2">GPU Servers That You Can Rent</h2>
                    <div className="mt-12">
                        <p className="default--text fs-18 lh-30">Rent instances from Hashmarket</p>
                    </div>
                </div>
            </div>
            <div className="columns columns-15 mt-50 mb-50">
                {servers.map(server => (
                    <Link to="/gpu-instance" className="col-4 mb-40">
                        <div className="servers">
                            <div className="servers__img">
                                <img src={server.image} alt="img" />
                            </div>
                            <h3 className="servers__title">{server.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
