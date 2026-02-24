import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Componente principal do editor
import { useState } from 'react';
import DocxImport from './DocxImport.js';
import WysiwygEditor from './WysiwygEditor.js';
const Editor = () => {
    const [html, setHtml] = useState('');
    const handleDocxImport = (importedHtml) => {
        setHtml(importedHtml);
    };
    const handleContentChange = (newHtml) => {
        setHtml(newHtml);
    };
    return (_jsxs("div", { children: [_jsx(DocxImport, { onImport: handleDocxImport }), _jsx("div", { className: "editor-container", style: { marginTop: 16 }, children: _jsx(WysiwygEditor, { onContentChange: handleContentChange, initialContent: html }) })] }));
};
export default Editor;
