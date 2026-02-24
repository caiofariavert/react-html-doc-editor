import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

const Variable = Node.create({
  name: 'variable',

  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      name: {
        default: '',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-type="variable"]',
      },
    ];
  },

  renderHTML({ node }) {
    return [
      'span',
      {
        'data-type': 'variable',
        class: 'variable-node',
      },
      `{{ ${node.attrs.name} }}`,
    ];
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Shift-v': ({ editor }) => {
        const name = prompt('Nome da variável:');
        if (name) {
          editor.commands.insertContent({
            type: this.name,
            attrs: { name },
          });
        }
        return true;
      },
    };
  },
});

export default Variable;
