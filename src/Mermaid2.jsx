import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

const Mermaid2 = ({ chart }) => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      // theme: "dark",
    });
    if (chart != '') {
      mermaidRender(chart);
    }
  }, [chart]);

  const [svg, setSvg] = useState('');

  const mermaidRender = async (graphDefinition) => {
    try {
      const { svg } = await mermaid.render('d', graphDefinition);
      // console.log('Rendered SVG:', svg);
      const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);
      setSvg(url);
    } catch (error) {
      console.error('Error rendering Mermaid diagram:', error);
    }
  };

  return (
    <>
      <div style={{ width: '660px', height: '564px' }}>
        {svg && <img src={svg} alt="Mermaid Diagram" style={{ objectFit: 'contain', height: '100%', width: '100%' }} />}

      </div>
    </>);
}

export default Mermaid2;