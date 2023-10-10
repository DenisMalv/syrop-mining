import React from "react";
import { Link } from "react-router-dom";

export const ListYourHostTab = ()=>{
    return (
        <div>
            <h4 className="heading heading-h4 heading--basic mb-20">List Your Host</h4>
            <div className="setup-host-group-btn align-items-baseline">
                <p className="paragraph mb-20">Go to the My Hosts page and find your new machine. It can take a few
                    minutes to an hour for the main performance stats to appear. Prepare your machine
                    properly to be online and ready for long periods of continuous work.</p>
                <Link to={"/my-hosts"} className="btn btn--bordered btn--lg ml-20 mb-20 min-w-114"><span class="fs-13 lh-22 fw-500">My Hosts</span></Link>
            </div>
            <div className="setup-host-group-btn align-items-baseline">
                <p className="paragraph mb-15">If your machine doesn't appear, please go to our (discord server) and check pinned messages and announcements about updates.</p>
                <a href="#" class="btn btn--bordered btn--lg ml-20 min-w-114 mb-15">
                    <span class="fs-13 lh-22 fw-500">Discord</span>
                </a>
            </div>
            <p className="paragraph mb-10">List your machine for rental using the List button, and then adjust
                max rental duration using the Availability date field. On the end date the listing will
                expire and your machine will unlist. However any existing client jobs will still remain
                until ended by their owners.</p>
            <p className="paragraph mb-50">Once you list your machine and it is rented, it is extremely
                important that you don't interfere with the machine in any way. If your machine has an
                active client job and then goes offline, crashes, or has performance problems, this could
                permanently lower your reliability rating. We strongly recommend you test the machine first
                and only list when ready.</p>
            <h4 className="heading heading-h4 heading--basic mb-15">Verification</h4>
            <p className="paragraph mb-50">Your machine will start out with unverified status, which means it
                will not show up on the default client search. We verify machines irregularly based on
                demand - typically about once per week, and only currently listed and available machines
                will be verified. If your machine is not listed for rental, it cannot be verified.</p>
        </div>
    )
}