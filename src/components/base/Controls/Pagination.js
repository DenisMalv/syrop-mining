import React from "react";
import { usePagination } from "../../../hooks/usePagination";
import {SelectBox} from "../Form/SelectBox";

export const Pagination = () => {
    const paginationRange = usePagination({totalCount: "", pageSize: "ddfgdg", siblingCount: "dffgdg", currentPage: "dfg"});
    console.log(paginationRange);
    return (
        <div className="content-body--footer pt-15 px-18 --bg --pos-1200 pagination__list">
            <div className="dbl-options">
                <div className="option d-flex align-items-center">
                    <div className="custom-select select--70 mr-15">
                        <SelectBox
                            options={[
                                { label: "10", value: '10' },
                                { label: '11', value: '11' },
                                { label: '12', value: '12' },
                                { label: '13', value: '13' },
                                { label: '14', value: '14' },
                            ]}
                            defaultValue="10"
                            onSelect={(value) => console.log(value)}
                            menuAutoPlacement={true}
                            widthControl="70px"
                            widthMenu="100%"
                            itemsCenter
                        />
                    </div>
                    <span className="hidden-576 mb-15">Entries</span>
                </div>
                <div className="option mb-15 d-flex">
                    <div className="pagination">
                        <a href="#" className="btn pagination--btn --prev --disabled">
                                    <span className="ico"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                               xmlns="http://www.w3.org/2000/svg">
                            <g>
                            <path d="M4.58342 10.9999L17.4167 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M9.16675 6.41667L4.58341 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M9.16675 15.5833L4.58342 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            </g>
                            </svg>
                            </span>
                        </a>
                        <ul className="pagination--list">
                            <li><a href="#" className="btn active pagination--page">1</a></li>
                            <li><a href="#" className="btn pagination--page">2</a></li>
                            <li><a href="#" className="btn pagination--page">3</a></li>
                            <li><a href="#" className="btn pagination--page hidden-768">...</a></li>
                            <li><a href="#" className="btn pagination--page hidden-768">6</a></li>
                            <li><a href="#" className="btn pagination--page hidden-768">7</a></li>
                            <li><a href="#" className="btn pagination--page hidden-768">8</a></li>
                        </ul>
                        <a href="#" className="btn pagination--btn --next">
                                    <span className="ico"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                               xmlns="http://www.w3.org/2000/svg">
                            <g>
                            <path d="M4.58342 10.9999L17.4167 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M9.16675 6.41667L4.58341 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M9.16675 15.5833L4.58342 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            </g>
                            </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
