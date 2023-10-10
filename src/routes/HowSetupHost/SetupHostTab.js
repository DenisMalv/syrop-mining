import React from "react";
import { Link } from "react-router-dom";

export const SetupHostTab = ()=>{
    return (
        <div>
            <h4 className="heading heading-h4 heading--basic mb-15">Customize apt mirrors</h4>
            <p className="paragraph mb-15">The default ubuntu apt sources use US based mirror sources. If your
                Hashmarket servers don't have good network throughput to these mirrors it could cause
                containers to load very slowly and even timeout. You can override this behavior by writing a
                small file named <span className="color-white">"apt-select-out"</span> into your main daemon
                directory <span className="color-white">'var/lib/vastai_kaalia'</span> . This file should just
                contain a text string replacement for <span className="color-white">'archive.ubuntu.com'</span>.
                For example, if you want to change the apt source to use <span className="color-white">'mirror.yandex.ru'</span>, run the following command on each server:
            </p>
            <p className="paragraph green mb-15">echo 'mirror.yandex.ru' &gt; /var/lib/vastai_kaalia/apt-select-out
            </p>
            <p className="paragraph green mb-50">echo 'mirror.yandex.ru' &gt;
                /var/lib/vastai_kaalia/latest/apt-select-out</p>
            <h4 className="heading heading-h4 heading--basic mb-20">Set a Min Bid Price or Background Task</h4>
            <div className="setup-host-group-btn align-items-baseline">
                <p className="paragraph mb-15">Create a background job to run on the machine, along with a floor
                    price. This will create a low priority job that runs only where there is no higher
                    priced job to run. The floor price will determine the minimum clients will have to pay
                    to rent your gpus.</p>
                <Link to={"/background-tasks"} className="btn btn--bordered nowrap btn--lg ml-20 mb-150">
                    <span class="fs-13 lh-22 fw-500">Background Tasks</span>
                </Link>
            </div>
            <p className="paragraph mb-20">You can use this feature to mine in the background. You can also use
                this feature to prevent your machine from being rented at a price below your electricity
                cost by creating a background job that does nothing and setting the price to your
                electricity cost.</p>
            <div className="setup-host-group-btn align-items-baseline">
                <p className="paragraph mb-15">Alternatively you can use the CLI to set a min bid price if you don't
                    want to mess with mining images/containers.</p>
                <Link to={"/command-line"} href="#" className="btn btn--bordered nowrap btn--lg ml-20 mb-15">
                    <span class="fs-13 lh-22 fw-500">Comand Line</span>
                </Link>
            </div>
        </div>
    )
}