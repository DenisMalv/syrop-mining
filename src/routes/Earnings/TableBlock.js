import {useState,useEffect} from 'react'

import { Table } from '../../components/base/Table/Table';
import { TableRow } from '../../components/base/Table/TableRow';
import { TableColumn } from '../../components/base/Table/TableColumn';
import { Button } from '../../components/base/Button/Button'
import { Pill } from '../../components/base/Pill/Pill';

import { ucFirst } from '../../helpers/helpers';

const TableBlock = ({TABLE_HEADERS , transactionsHistorySelector})=>{
    return (
        <div className="widget-table--body">
            <div className="table-wrapper ova-x scroll--style">
                <Table tableClassName="table" tableHeader={TABLE_HEADERS} headClassName="table--head" bodyClassName="table--body">
                    {transactionsHistorySelector.map(({id,email,host,amount,date,status})=>
                        <TableRow key={id}>
                            <TableColumn className="fw-500">{id}</TableColumn>
                            <TableColumn>{email}</TableColumn>
                            <TableColumn className="fw-500" columnStyle={{width:"300px"}}> {host}</TableColumn>
                            <TableColumn className="fw-500">{`$${amount.toFixed(2)}`}</TableColumn>
                            <TableColumn className="fw-500">{date}</TableColumn>
                            <TableColumn>
                                <Pill label={ucFirst(status)} type={status}/>
                            </TableColumn>
                        </TableRow>
                    )}
                </Table>
                {/**            need add to table header : amonut date status
                                <span className="table--th-sort-icon"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.20759 1.02937C3.6079 0.509357 4.3921 0.509358 4.79241 1.02937L6.22473 2.89001C6.73092 3.54757 6.26216 4.5 5.43232 4.5H2.56768C1.73784 4.5 1.26908 3.54757 1.77527 2.89001L3.20759 1.02937Z" fill="currentColor"></path>
                                    <path d="M4.79241 10.9706C4.3921 11.4906 3.6079 11.4906 3.20759 10.9706L1.77527 9.10999C1.26907 8.45242 1.73784 7.5 2.56768 7.5L5.43232 7.5C6.26216 7.5 6.73092 8.45243 6.22473 9.10999L4.79241 10.9706Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                */}
            </div>
        </div>
    )
}

export default TableBlock
