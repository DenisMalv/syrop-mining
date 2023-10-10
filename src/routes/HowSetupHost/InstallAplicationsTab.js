import React from "react";
import installAplicationsOne from  "../../assets/img/instal-applications-img-1.png"
import installAplicationsTwo from  "../../assets/img/instal-applications-img-2.png"

export const InstallAplicationsTab = ()=>{
    return (
        <div>
            <div className="d-flex align-items-center mb-15">
                <span className="instal-setup">1</span>
                <h4 className="heading heading-h4 heading--basic">Install Ubuntu 18.04:</h4>
            </div>
            <div className="setup-host-group-btn">
                <p className="paragraph mb-20">Download the 18.04.5 LTS (Bionic Beaver) 64-bit PC (AMD64) desktop or server</p>
                <a href="#" class="btn btn--bordered btn--lg min-w-114 mb-20">
                    <span class="d-flex mr-5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9653 9.25885L10.0007 12.2234L7.03613 9.25885" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9.99985 3.33057V12.2234" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16.6699 13.7048C16.6699 15.3421 15.3427 16.6693 13.7054 16.6693H6.29562C4.65834 16.6693 3.33105 15.3421 3.33105 13.7048" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                    <span class="fs-13 lh-22 fw-500">Download</span>
                </a>
            </div>
            <div className="setup-host-group-btn">
                <p className="paragraph mb-20">Download the 18.04.5 LTS (Bionic Beaver) 64-bit PC (AMD64) desktop or server</p>
                <a href="#" class="btn btn--bordered btn--lg min-w-114 mb-20">
                    <span class="fs-13 lh-22 fw-500">Tutorial</span>
                </a>
            </div>
            <p className="paragraph mb-30">Reboot the machine from the new bootable drive to begin OS
                installation.</p>
            <p className="paragraph mb-10">Our software requires an XFS disk partition which is not installed by
                default. If an XFS disk partition is not found, the installer will create a loopback
                (emulated) XFS partition as a fallback, but we recommend using an actual XFS partition. Our
                setup script will automatically create the XFS partition from free space on the drive,
                however the default Ubuntu install will not leave any free space.</p>
            <p className="paragraph mb-30">If you have an SSD and a hard drive (recommended), install ubuntu on
                your hard drive, and leave unpartitioned space on the SSD for the XFS partition. You can
                then install ubuntu using the defaults.</p>
            <p className="paragraph mb-15">However, if you only have a single drive, we recommend using the
                <span className="color-white"> Something else</span> option on the <span className="color-white">Installation Type</span> step to create custom partitions:</p>

            <div className="instal-applications-img mb-20">
                <img src={installAplicationsOne} alt="img"/>
            </div>

            <h4 className="heading heading-h5-green heading--basic">To set up your single drive:</h4>
            <ul className="instal-applications-list mb-30">
                <li>
                    <span>
                        If necessary, create a new partition table using the button on the right. This is
                        not necessary if the + button on the left already works.
                    </span>
                </li>
                <li>
                    <span>
                        Create an "efi" type partition of size ~512MB. If you can't select the "efi" type
                        for a partition, skip this step.
                    </span>
                </li>
                <li>
                    <span>
                        Create an "ext4" type partition with mount point "/", of size 16GB, for the OS.
                    </span>
                </li>
                <li>
                    <span>
                        Create a "swap" type partition of size ~8GB.
                    </span>
                </li>
                <li>
                    <span>
                        Leave the rest unpartitioned.
                    </span>
                </li>
            </ul>

            <p className="paragraph mb-20">Your partitions should look something like this:</p>

            <div className="instal-applications-img mb-20">
                <img src={installAplicationsTwo} alt="img"/>
            </div>

            <p className="paragraph mb-50">Now wait for ubuntu to finish installing, and proceed once it has
                successfully booted. The rest of the installation will be automated by our installer script.
            </p>

            <div className="d-flex align-items-center mb-20">
                <span className="instal-setup">2</span>
                <h4 className="heading heading-h4 heading--basic">Install the Nvidia Driver</h4>
            </div>

            <div className="setup-host-group-btn mb-20">
                <p className="paragraph">Install a recent stable Nvidia Driver for your ubuntu version. There
                    are several different install options. Test your driver installation with <span className="color-white">nvidia-smi -q</span> and other similar tests before proceeding.
                </p>
                <a href="#" class="btn btn--bordered btn--lg ml-20 min-w-114 mb-20">
                    <span class="fs-13 lh-22 fw-500">Nvidia Drivers</span>
                </a>
            </div>

            <div className="d-flex align-items-center mb-20">
                <span className="instal-setup">3</span>
                <h4 className="heading heading-h4 heading--basic">Install the Hashmarket Manager Software</h4>
            </div>
            <div className="setup-host-group-btn mb-20">
                <p className="paragraph">Copy and paste this command into a terminal. It will download the
                    installer and then run it with your unique authorization key. Note: if you encounter
                    driver problems (such as the login loop), it's best to reinstall the nvidia driver
                    first, before running the vast.ai installer.</p>
                <a href="#" class="btn btn--bordered btn--lg ml-20 min-w-114 mb-20">
                    <span class="fs-13 lh-22 fw-500">Rental Setup</span>
                </a>
            </div>

            <div className="input-custom mb-10">
                <div className="input-custom__wrap-input">
                    <input 
                        className="input-custom__input max-w-500" 
                        type="text" 
                        // placeholder="wget https://vast.ai/install -O install; sudo python2.7 install 88ddc7988bf9c9a1e0795d8dd507140e1aaf0176d648ad20dcf6600088d11e81; history -d $((HISTCMD-1));"
                        value="wget https://vast.ai/install -O install; sudo python2.7 install 88ddc7988bf9c9a1e0795d8dd507140e1aaf0176d648ad20dcf6600088d11e81; history -d $((HISTCMD-1));"
                        readOnly={true}
                        />
                </div>
            </div>
        </div>
    )
}
