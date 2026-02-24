import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const WysiwygToolbar = ({ editor }) => {
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
    return (_jsxs("div", { className: "wysiwyg-toolbar", children: [_jsx("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: editor.isActive('bold') ? 'active' : '', title: "Negrito (Ctrl+B)", children: _jsx("strong", { children: "B" }) }), _jsx("button", { onClick: () => editor.chain().focus().toggleItalic().run(), className: editor.isActive('italic') ? 'active' : '', title: "It\u00E1lico (Ctrl+I)", children: _jsx("em", { children: "I" }) }), _jsx("button", { onClick: () => { var _a, _b, _c, _d; return (_d = (_b = (_a = editor.chain().focus()).toggleUnderline) === null || _b === void 0 ? void 0 : (_c = _b.call(_a)).run) === null || _d === void 0 ? void 0 : _d.call(_c); }, className: editor.isActive('underline') ? 'active' : '', title: "Sublinhado", children: _jsx("u", { children: "U" }) }), _jsx("div", { className: "toolbar-separator" }), _jsx("button", { onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), className: editor.isActive('heading', { level: 1 }) ? 'active' : '', title: "T\u00EDtulo 1", children: "H1" }), _jsx("button", { onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), className: editor.isActive('heading', { level: 2 }) ? 'active' : '', title: "T\u00EDtulo 2", children: "H2" }), _jsx("button", { onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), className: editor.isActive('heading', { level: 3 }) ? 'active' : '', title: "T\u00EDtulo 3", children: "H3" }), _jsx("div", { className: "toolbar-separator" }), _jsx("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: editor.isActive('bulletList') ? 'active' : '', title: "Lista com marcadores", children: "\u2022 Lista" }), _jsx("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: editor.isActive('orderedList') ? 'active' : '', title: "Lista numerada", children: "1. Lista" }), _jsx("div", { className: "toolbar-separator" }), _jsx("button", { onClick: handleInsertTable, title: "Inserir tabela", children: "\uD83D\uDCCA Tabela" }), _jsx("button", { onClick: handleInsertVariable, title: "Inserir vari\u00E1vel (Ctrl+Shift+V)", children: "{{ }} Vari\u00E1vel" }), _jsx("div", { className: "toolbar-separator" }), _jsx("button", { onClick: () => editor.chain().focus().undo().run(), disabled: !editor.can().undo(), title: "Desfazer", children: "\u21B6 Desfazer" }), _jsx("button", { onClick: () => editor.chain().focus().redo().run(), disabled: !editor.can().redo(), title: "Refazer", children: "\u21B7 Refazer" }), _jsx("button", { onClick: () => editor.chain().focus().clearContent().run(), title: "Limpar conte\u00FAdo", children: "\uD83D\uDDD1\uFE0F Limpar" })] }));
};
export default WysiwygToolbar;
