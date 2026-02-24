## Exemplo de uso

```tsx
import React from 'react';
import { Editor, Toolbar, TableButton } from 'react-html-doc-editor';

function App() {
	return (
		<div>
			<Toolbar />
			<Editor />
			<TableButton />
		</div>
	);
}

export default App;
```

Para exportar o conteúdo do editor para HTML customizado:

```ts
import { compileToCustomHTML } from 'react-html-doc-editor';

const html = compileToCustomHTML(/* conteúdo do editor */);
```
# React HTML Doc Editor

Uma biblioteca de editor de texto WYSIWYG para React 18+, focada em exportação de conteúdo como HTML customizado (estilo Django Template), com suporte a variáveis, tabelas e blocos de dataset.

## Estrutura do Projeto

```
src/
	components/
		Editor.tsx           # Componente principal do editor
		Toolbar.tsx          # Barra de ferramentas do editor
		TableButton.tsx      # Botão/atalho para inserir tabelas
	utils/
		htmlCompiler.ts      # Funções utilitárias para compilar/exportar HTML customizado
		datasetUtils.ts      # Funções para manipulação de datasets/tabelas customizadas
	styles/
		editor.css           # Estilos do editor
index.ts                 # Exportação dos componentes principais
package.json             # Configurações do projeto/biblioteca
README.md                # Documentação principal
```

## Funcionalidades

- Editor WYSIWYG customizável
- Exportação para HTML com variáveis no formato `{{ nome_completo }}`
- Atalho para inserir tabelas simples
- Bloco especial para datasets/tabelas com loop: `{{table datasource.json_data}} ... {{/table}}`
- Suporte a cabeçalho e footer em tabelas de dataset

## Tecnologias sugeridas

- React 18+
- TypeScript
- [Slate.js](https://docs.slatejs.org/) para base do editor (altamente customizável)

## Como contribuir

1. Instale as dependências
2. Implemente novas funcionalidades em `src/`
3. Rode os testes e build antes de enviar PR

---

> Esta biblioteca está em desenvolvimento inicial.
# react-html-doc-editor
Editor de documentos que compila em HTML 
