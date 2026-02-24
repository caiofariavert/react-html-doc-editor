import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Table } from '@tiptap/extension-table';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableRow } from '@tiptap/extension-table-row';
import Variable from '../extensions/Variable.js';
import WysiwygToolbar from './WysiwygToolbar.js';
import '../styles/editor.css';
const WysiwygEditor = ({ onContentChange, initialContent = '' }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            Variable,
        ],
        content: initialContent,
        onUpdate: ({ editor }) => {
            if (onContentChange) {
                onContentChange(editor.getHTML());
            }
        },
    });
    if (!editor) {
        return null;
    }
    return (_jsxs("div", { className: "wysiwyg-editor-container", children: [_jsx(WysiwygToolbar, { editor: editor }), _jsx(EditorContent, { editor: editor, className: "wysiwyg-editor-content" })] }));
};
export default WysiwygEditor;
