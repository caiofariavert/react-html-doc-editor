// Componente principal do editor

import React, { useState } from 'react';
import DocxImport from './DocxImport.js';


const Editor: React.FC = () => {
  const [html, setHtml] = useState<string>('');

  return (
    <div>
      <DocxImport onImport={setHtml} />
      <div className="editor-container" style={{ marginTop: 16 }}>
        {/* Aqui será exibido o conteúdo importado do .docx */}
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <p>Editor de texto (em desenvolvimento)</p>
        )}
      </div>
    </div>
  );
};

export default Editor;
