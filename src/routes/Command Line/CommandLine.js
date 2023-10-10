import React from 'react'

const CommandLine = () => {
    return (
        <div className="flex-content">
            <div className="content-body p-30 w-100 max-w-800">
                <h2 className="heading heading-h2 mb-8">COMMAND LINE</h2>
                <p className="subheading opacity-50 mb-30 color-50" >Some information for quick start with Command Line</p>

                <div className="w-100 mb-12">
                    <h4 className="heading heading-h4 ff-main fw-400">Download</h4>
                </div>
                <div className="input-custom mb-30 ">
                    <div className="input-custom__wrap-input">
                        <input 
                            className="input-custom__input"
                            type="text" 
                            // placeholder="wget https://raw.githubusercontent.com/vast-ai/vast-python/master/vast.py -O vast; chmod +x vast;"
                            value="wget https://raw.githubusercontent.com/vast-ai/vast-python/master/vast.py -O vast; chmod +x vast;"
                            onChange={()=>null}
                        />
                            
                    </div>
                </div>

                <div className="w-100 mb-12">
                    <h4 className="heading heading-h4 ff-main fw-400">Help</h4>
                </div>
                <div className="input-custom mb-30 ">
                    <div className="input-custom__wrap-input">
                        <input 
                            className="input-custom__input" 
                            type="text" 
                            // placeholder="./vast --help"
                            value="./vast --help"
                            onChange={()=>null}
                        />
                    </div>
                </div>

                <div className="w-100 mb-12">
                    <h4 className="heading heading-h4 ff-main fw-400">Login / Set API Key</h4>
                </div>
                <div className="input-custom mb-30 ">
                    <div className="input-custom__wrap-input mb-12">
                        <input 
                            className="input-custom__input" 
                            type="text" 
                            // placeholder="./vast set api-key 88ddc7988bf9c9a1e0795d8dd507140e1aaf0176d648ad20dcf6600088d11e81"
                            value="./vast set api-key 88ddc7988bf9c9a1e0795d8dd507140e1aaf0176d648ad20dcf6600088d11e81"
                            onChange={()=>null}
                        />
                    </div>
                    <p className="description opacity-30">This will save your api key in a hidden file in your home directory. It authenticates your other vast commands to your account, so don't share it.</p>
                </div>

                <div className="w-100 mb-12">
                    <h4 className="heading heading-h4 ff-main fw-400">Search for Instance Types</h4>
                </div>
                <div className="input-custom mb-12 ">
                    <div className="input-custom__wrap-input mb-12">
                        <input 
                            className="input-custom__input" 
                            type="text" 
                            // placeholder="./vast search offers"
                            value="./vast search offers"
                            onChange={()=>null}
                        />                           
                    </div>
                    <p className="description opacity-30">The search command supports all of the filters and sort options that the website GUI uses. To find Turing GPU instances (compute capability 7.0 or higher):</p>
                </div>

                <div className="input-custom mb-20">
                    <div className="input-custom__wrap-input">
                        <input 
                            className="input-custom__input" 
                            type="text" 
                            // placeholder="./vast search offers 'compute_cap > 700 '"
                            value="./vast search offers 'compute_cap > 700 '"
                            onChange={()=>null}
                        />
                    </div>
                </div>

                <div className="input-custom mb-30">
                    <p className="description opacity-30 mb-12">To find instances with a reliability score &gt;= 0.99 and at least 4 gpus, ordering by num of gpus descending:</p>
                    <div className="input-custom__wrap-input">
                        <input 
                            className="input-custom__input"
                            type="text" 
                            // placeholder="./vast search offers 'reliability > 0.99  num_gpus>=4' -o 'num_gpus-'"
                            value="./vast search offers 'reliability > 0.99  num_gpus>=4' -o 'num_gpus-'"
                            onChange={()=>null}
                        />
                    </div>
                </div>

                <div className="w-100 mb-12">
                    <h4 className="heading heading-h4 ff-main fw-400" >Launching Instances</h4>
                </div>
                <div className="input-custom">
                    <p className="description opacity-30 mb-12">To create an instance of type 37744 (using an ID from the search) with the vastai/tensorflow image and 32 GB of disk storage:</p>
                    <div className="input-custom__wrap-input">
                        <input 
                            className="input-custom__input" 
                            type="text" 
                            // placeholder="./vast create instance 36842 --image vastai/tensorflow --disk 32"
                            value="./vast create instance 36842 --image vastai/tensorflow --disk 32"
                            onChange={()=>null}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommandLine

// color: "rgba(255, 255, 255, 0.5)",