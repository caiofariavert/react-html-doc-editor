import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Table } from '@tiptap/extension-table';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableRow } from '@tiptap/extension-table-row';
import Variable from '../extensions/Variable';
import WysiwygToolbar from './WysiwygToolbar';

interface WysiwygEditorProps {
  onContentChange?: (html: string) => void;
  initialContent?: string;
}

const WysiwygEditor: React.FC<WysiwygEditorProps> = ({ 
  onContentChange, 
  initialContent = '' 
}) => {
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

  return (
    <div className="wysiwyg-editor-container">
      <WysiwygToolbar editor={editor} />
      <EditorContent editor={editor} className="wysiwyg-editor-content" />
    </div>
  );
};

export default WysiwygEditor;
