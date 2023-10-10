import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/base/Button/Button";

export const DockerImageHeader = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="mb-10">
                <Button onClick={() => navigate(-1)}
                        icon={ <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"></path>
                                    <path d="M10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"></path>
                                    <path d="M10 17L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"></path>
                                </svg>
                        }
                        iconPosition="left"
                        text="Back"
                />
            </div>

            <div className="d-flex justify-content-between align-items-center w-100 border-bottom-30 mb-0">
                <h2 className="heading heading-h2 ttu mb-8">Select a Docker Image</h2>
                <a href="#" className="btn btn-primary btn--sm">Save Changes</a>
            </div>
        </div>
    )
}
