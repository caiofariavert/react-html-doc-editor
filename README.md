# React HTML Doc Editor

Uma biblioteca de editor de texto WYSIWYG para React 18+, focada em exportação de conteúdo como HTML customizado (estilo Django Template), com suporte a variáveis, tabelas e blocos de dataset.

## Funcionalidades

- Editor WYSIWYG customizável
- Importar arquivos .docx (MS Word) automaticamente
- Exportação para HTML com variáveis no formato `{{ nome_completo }}`
- Atalho para inserir tabelas simples
- Bloco especial para datasets/tabelas com loop: `{{table datasource.json_data}} ... {{/table}}`
- Suporte a cabeçalho e footer em tabelas de dataset
- Testes automatizados com 19+ testes

## Estrutura do Projeto

```
src/
  components/
    Editor.tsx           # Componente principal do editor
    Toolbar.tsx          # Barra de ferramentas do editor
    TableButton.tsx      # Botão/atalho para inserir tabelas
    DocxImport.tsx       # Componente para importar .docx
  utils/
    htmlCompiler.ts      # Funções utilitárias para compilar/exportar HTML customizado
    datasetUtils.ts      # Funções para manipulação de datasets/tabelas customizadas
  styles/
    editor.css           # Estilos do editor
index.ts                 # Exportação dos componentes principais
package.json             # Configurações do projeto/biblioteca
README.md                # Documentação principal
```

## Tecnologias

- React 18+
- TypeScript
- Jest + React Testing Library (testes)
- Mammoth.js (suporte a .docx)

## Exemplo de uso básico

```tsx
import React from 'react';
import { Editor } from 'react-html-doc-editor';

function App() {
  return (
    <div>
      <Editor />
    </div>
  );
}

export default App;
```

## Importando arquivos .docx

O componente Editor já inclui suporte para importar arquivos do Word (.docx):

```tsx
import React from 'react';
import { Editor } from 'react-html-doc-editor';

function App() {
  return <Editor />;
}
```

## Exportando para HTML customizado

Para exportar o conteúdo do editor para HTML com template syntax:

```ts
import { compileToCustomHTML } from 'react-html-doc-editor';

const html = compileToCustomHTML(/* conteúdo do editor */);
```

## Testes Automatizados

Esta biblioteca inclui uma suíte completa de testes automatizados.

### Rodando os testes

```bash
# Executar testes uma vez
npm test

# Executar testes em modo watch (re-executa ao salvar)
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

### Cobertura de testes

- **Componentes**: Editor, DocxImport, Toolbar, TableButton
- **Utilitários**: htmlCompiler, datasetUtils
- **Total**: 19 testes passando ✓

## Desenvolvimento

### Instalando dependências

```bash
npm install
```

### Build

```bash
npm run build
```

### Testes

```bash
npm test
```

## Como contribuir

1. Instale as dependências
2. Implemente novas funcionalidades em `src/`
3. Adicione testes em `src/__tests__/` ou próximo ao componente
4. Rode `npm test` e `npm run build` para validar
5. Envie um PR com sua mudança

## License

MIT

---

> Esta biblioteca está em desenvolvimento inicial.
