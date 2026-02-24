// Componente principal do editor

import React, { useState } from 'react';
import DocxImport from './DocxImport';
import WysiwygEditor from './WysiwygEditor';

const Editor: React.FC = () => {
  const [html, setHtml] = useState<string>('');

  const handleDocxImport = (importedHtml: string) => {
    setHtml(importedHtml);
  };

  const handleContentChange = (newHtml: string) => {
    setHtml(newHtml);
  };

  return (
    <div>
      <DocxImport onImport={handleDocxImport} />
      <div className="editor-container" style={{ marginTop: 16 }}>
        <WysiwygEditor 
          onContentChange={handleContentChange}
          initialContent={html}
        />
      </div>
    </div>
  );
};

export default Editor;
