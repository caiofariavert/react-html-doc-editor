import React from 'react';
import '../styles/editor.css';
interface WysiwygEditorProps {
    onContentChange?: (html: string) => void;
    initialContent?: string;
}
declare const WysiwygEditor: React.FC<WysiwygEditorProps>;
export default WysiwygEditor;
