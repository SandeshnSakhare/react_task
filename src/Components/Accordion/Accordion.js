import React, { useState, useEffect, useRef } from 'react';
import arrow from '../../Assets/arrow.png';
import './Accordian.css';
import DialogBox from '../DialogBox/DialogBox.js';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function Accordion({ number, tableData, accHead, ...props }) {
    const buttonEl = useRef(null);
    const panelEl = useRef(null);

    const [toggleTab, setToggleTab] = useState(false);
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    
    useEffect(()=>{
        
    },[])

    useEffect(() => {
        buttonEl.current.addEventListener("click", function () {
            if (panelEl.current.style.display === "block") {
                panelEl.current.style.display = "none"
            } else {
                panelEl.current.style.display = "block"
            }
        });
        setToggleTab(!toggleTab)
    }, [panelEl]);

    const handleClickOpen = (data) => {
        setOpen(true);
        setModalData(data);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <div className={`accordion accordion${number}`} ref={buttonEl} >
                    <div>
                        {accHead.batch_no}
                    </div>
                    <div>
                        {accHead.name}
                        <span></span>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="button-on-tab">
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Download as XLS" />
                </div>

                <div className={`panel panel${number}`} ref={panelEl}>
                    <table id="table-to-xls">
                        <col style={{ width: '7%' }} />
                        <col style={{ width: '30%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '40%' }} />
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '3%' }} />
                        <tr>
                            <th>Sr. no</th>
                            <th>Agri Input Category</th>
                            <th>Product Image</th>
                            <th>Product Description</th>
                            <th>Order Quantity</th>
                        </tr>
                        {tableData.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{item.input_category}</td>
                                    <td style={{ textAlign: 'center' }}><img src={item.product_image} style={{ width: '50px' }} /></td>
                                    <td>{item.product_description}</td>
                                    <td>{item.order_quantity}</td>
                                    <td
                                        style={{ background: 'white', border: 'none', cursor: 'pointer' }}
                                        onClick={() => handleClickOpen(item)}
                                    >
                                        <img src={arrow} style={{ width: '20px' }} />
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <DialogBox openModal={open} toggleModal={handleClose} headTitle={modalData.input_category}>
                <div className="modal-display-content">
                    <div>
                        <img src={modalData.product_image} style={{ width: '100px' }} />
                    </div>
                    <div>
                        <h3>Sr. No</h3>
                        <p>{modalData.id}</p>
                        <h3>Input Category</h3>
                        <p>{modalData.input_category}</p>
                        <h3>Product Description</h3>
                        <p>{modalData.product_description}</p>
                        <h3>Order Quantity</h3>
                        <p>{modalData.order_quantity}</p>
                    </div>
                </div>
            </DialogBox>
        </div>
    )
}

export default Accordion;

