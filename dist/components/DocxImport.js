import { jsx as _jsx } from "react/jsx-runtime";
// Componente para importar e exibir arquivos .docx no editor
import { useRef } from 'react';
import mammoth from 'mammoth';
const DocxImport = ({ onImport }) => {
    const fileInputRef = useRef(null);
    const handleFileChange = async (event) => {
        var _a;
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        onImport(result.value); // HTML convertido
    };
    return (_jsx("div", { children: _jsx("input", { type: "file", accept: ".docx", ref: fileInputRef, onChange: handleFileChange }) }));
};
export default DocxImport;
