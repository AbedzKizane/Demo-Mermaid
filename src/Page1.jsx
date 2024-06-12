import { useState, useEffect } from 'react';
import './App.css';
import mermaid from 'mermaid';
import { Link } from 'react-router-dom';
import Mermaid2 from './Mermaid2';

function Page1() {
    const [input, setInput] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            // theme: "dark",
        });
    }, []);

    const changeInput = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <div>
                <h1>Mermaid Diagram Renderer</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <textarea
                            value={input}
                            onChange={changeInput}
                            rows="30"
                            cols="60"
                        ></textarea>
                        {/* <div>
                            <button onClick={sendTOmermaid} style={{ width: '200px', height: '50px' }}>GENERATE DIAGRAM</button>
                        </div> */}
                    </div>
                    <div>
                        {/* <div
                        id="graphDiv"
                        style={{ width:'100%' }}
                        dangerouslySetInnerHTML={{ __html: svg }}
                        /> */}
                        {/* {svg && <img src={svg} alt="Mermaid Diagram" style={{ width: '100%' }} />} */}
                        
                        <Mermaid2 chart={input}/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Page1;
