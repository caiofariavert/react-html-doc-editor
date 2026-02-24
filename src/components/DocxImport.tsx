// Componente para importar e exibir arquivos .docx no editor
import React, { useRef } from 'react';
import mammoth from 'mammoth';

interface DocxImportProps {
  onImport: (html: string) => void;
}

const DocxImport: React.FC<DocxImportProps> = ({ onImport }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    onImport(result.value); // HTML convertido
  };

  return (
    <div>
      <input
        type="file"
        accept=".docx"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default DocxImport;
