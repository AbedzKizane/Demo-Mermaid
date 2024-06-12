import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Mermaid2 from './Mermaid2';

function Page2() {
    const [data, setData] = useState([{
        type: 'ER',
        text: `erDiagram
                CUSTOMER }|..|{ DELIVERY-ADDRESS : has
                CUSTOMER ||--o{ ORDER : places
                CUSTOMER ||--o{ INVOICE : "liable for"
                DELIVERY-ADDRESS ||--o{ ORDER : receives
                INVOICE ||--|{ ORDER : covers
                ORDER ||--|{ ORDER-ITEM : includes
                PRODUCT-CATEGORY ||--|{ PRODUCT : contains
                PRODUCT ||--o{ ORDER-ITEM : "ordered in"`
    }, {
        type: 'Sequence',
        text: `sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!`
    }, {
        type: 'State',
        text: `stateDiagram-v2
    [*] --> Still
    Still --> [*]
    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]`
    }])

    const [selectData, setSelectData] = useState('');

    const handleSelect = (data) => {
        setSelectData(data);
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                <div>
                    {
                        data.map(e => {
                            return (
                                <>
                                    <div style={{ border: '1px solid red', width: '500px', cursor: 'pointer', margin: '20px 0' }} onClick={() => handleSelect(e.text)}>
                                        <h2>{e.type}</h2>
                                        <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{e.text}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <Mermaid2 chart={selectData} />
                </div>
            </div>
        </>
    )
}

export default Page2