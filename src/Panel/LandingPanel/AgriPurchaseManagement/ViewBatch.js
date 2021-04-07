import React from 'react';
import Accordion from '../../../Components/Accordion/Accordion';
import { accordianData } from '../../../Utils/Utils.js';

function ViewBatch() {
    return (
        <div style={{ marginTop: '20px' }}>
            {accordianSet.map((item, idx) => {
                return (
                    <Accordion number={idx} tableData={accordianData} accHead={item} />
                )
            })}
        </div>
    )
}

export default ViewBatch;


const accordianSet = [{
    batch_no: 'bb23k4',
    id: 1,
    name: 'John Doe',
}, {
    batch_no: 'cchh2ik',
    id: 2,
    name: 'Mathew Hayden',
}]