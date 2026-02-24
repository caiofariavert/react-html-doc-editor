import React from 'react';
import { Editor } from '@tiptap/react';

interface WysiwygToolbarProps {
  editor: Editor;
}

const WysiwygToolbar: React.FC<WysiwygToolbarProps> = ({ editor }) => {
  const handleInsertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const handleInsertVariable = () => {
    const name = prompt('Nome da variável:');
    if (name) {
      editor.chain().focus().insertContent({
        type: 'variable',
        attrs: { name },
      }).run();
    }
  };

  return (
    <div className="wysiwyg-toolbar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'active' : ''}
        title="Negrito (Ctrl+B)"
      >
        <strong>B</strong>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'active' : ''}
        title="Itálico (Ctrl+I)"
      >
        <em>I</em>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline?.().run?.()}
        className={editor.isActive('underline') ? 'active' : ''}
        title="Sublinhado"
      >
        <u>U</u>
      </button>

      <div className="toolbar-separator" />

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'active' : ''}
        title="Título 1"
      >
        H1
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'active' : ''}
        title="Título 2"
      >
        H2
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'active' : ''}
        title="Título 3"
      >
        H3
      </button>

      <div className="toolbar-separator" />

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'active' : ''}
        title="Lista com marcadores"
      >
        • Lista
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'active' : ''}
        title="Lista numerada"
      >
        1. Lista
      </button>

      <div className="toolbar-separator" />

      <button onClick={handleInsertTable} title="Inserir tabela">
        📊 Tabela
      </button>

      <button onClick={handleInsertVariable} title="Inserir variável (Ctrl+Shift+V)">
        &#123;&#123; &#125;&#125; Variável
      </button>

      <div className="toolbar-separator" />

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        title="Desfazer"
      >
        ↶ Desfazer
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        title="Refazer"
      >
        ↷ Refazer
      </button>

      <button
        onClick={() => editor.chain().focus().clearContent().run()}
        title="Limpar conteúdo"
      >
        🗑️ Limpar
      </button>
    </div>
  );
};

export default WysiwygToolbar;
