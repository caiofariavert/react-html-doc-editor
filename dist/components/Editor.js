import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Componente principal do editor
import { useState } from 'react';
import DocxImport from './DocxImport.js';
const Editor = () => {
    const [html, setHtml] = useState('');
    return (_jsxs("div", { children: [_jsx(DocxImport, { onImport: setHtml }), _jsx("div", { className: "editor-container", style: { marginTop: 16 }, children: html ? (_jsx("div", { dangerouslySetInnerHTML: { __html: html } })) : (_jsx("p", { children: "Editor de texto (em desenvolvimento)" })) })] }));
};
export default Editor;
