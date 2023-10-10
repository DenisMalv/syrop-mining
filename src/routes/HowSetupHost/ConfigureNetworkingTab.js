import React from "react";

export const ConfigureNetworkingTab = ()=>{
    return (
        <div>
            <h4 className="heading heading-h4 heading--basic mb-15">Troubleshooting</h4>
            <p className="paragraph mb-50">If your install succeeded, you should see your new machine show up on
                the machines page. If the install failed before starting the daemon, you'll want to look at
                the install log to see what went wrong. If the main install succeeded but the daemon isn't
                running or is restarting, this suggests an issue with nvidia-drivers, docker, nvidia-docker,
                or the XFS partition. The main daemon logs are in the daemon directory at: <span className="color-white">/var/lib/vastai_kaalia.</span></p>
            <h4 className="heading heading-h4 heading--basic mb-15">Configure Networking</h4>
            <p className="paragraph mb-20">We strongly recommend opening and mapping a port range from your
                NAT/firewall to each machine. This is important for compatibility with most server software
                and tools which assume open ports. You can still list a machine without open ports, but we
                prioritize verification of machines with a healthy sized properly configured open port
                range.</p>
            <ul className="configure-networking-list">
                <li>
                    <p className="paragraph">First open a port range (TCP and UDP) on your NAT/firewalls and map
                        it to the same destination port range on each target machine. Currently requires at
                        least 1 open port per GPU on the machine, but we recommend at least 4 per gpu (to
                        allow ssh and a few web based tools, a p2p connection, etc), and some docker images
                        use many dozens.</p>
                </li>
                <li>
                    <p className="paragraph">Test your open ports. You can use netcat: "nc -l -p PORT" on the
                        target machine, then use a website like
                        <a href="#" className="color-blue"> https://portchecker.co/</a> or similar. Make sure
                        they work before going to step 3, because if you go to step 3 with broken port
                        mappings your machine could be deverified.
                    </p>
                </li>
                <li>
                    <p className="paragraph">Inform the daemon by writing a small file with contents
                        "FIRST-LAST" to /var/lib/vastai_kaalia/host_port_range. ie to map 40000-40019:<br/>
                        <span className="color-white">echo "40000-40019" &gt;
                            /var/lib/vastai_kaalia/host_port_range</span><br/><br/>
                        If you get permissions issues, may need to wrap it with sudo:<br/>
                        <span className="color-white">sudo bash -c 'echo "40000-40019" &gt;
                            /var/lib/vastai_kaalia/host_port_range'</span>
                    </p>
                </li>
                <li>The daemon will update and inform our servers, no restart required. You should see the
                    #ports update on the machine card in a few minutes.</li>
            </ul>
        </div>
    )
}
