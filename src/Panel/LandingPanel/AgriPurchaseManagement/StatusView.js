import React, { useState } from 'react';
import ButtonTab from '../../../Components/ButtonTab';
import { CheckActive } from '../../../Utils/Utils.js';
import ViewBatch from './ViewBatch.js'
function StatusView() {
    const [activeButtonId, setActiveButtonId] = useState(0);
    const toggleActiveButton = (id) => {
        setActiveButtonId(id);
    }

    return (
        <div>
            <div className="button-tab-c-i">
                {buttonFilters.map((item, idx) => {
                    const activeStatus = CheckActive(idx, activeButtonId);
                    return (
                        <ButtonTab key={idx} title={item.title} itemId={idx} toggleId={toggleActiveButton} active={activeStatus} />
                    )
                })}
            </div>
            <div className="status-content-view">
                {activeButtonId === 0 && <ViewBatch />}
                {activeButtonId === 1 && <p>Assign Suppliers</p>}
                {activeButtonId === 2 && <p>Generate PO</p>}

            </div>
        </div>
    )
}

export default StatusView;

const buttonFilters = [{
    title: 'Undo Batch',
    id: 1
}, {
    title: 'Assign Suppliers',
    id: 2
}, {
    title: 'Generate PO',
    id: 3
},]