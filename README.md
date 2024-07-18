# @rossonlinesolutions/react-markdown

> A markdown render component for react.

## Install

**WIP for github registry**, till now clone this repository and add the following line into your package.json:

```diff
"dependencies": {
+   "@rossonlinesolutions/react-markdown": "file:/path/to/this/repo/"
}
```

## Usage

```tsx
import React from 'react';

// import the Markdown view component
import MarkdownView from '@rossonlinesolutions/react-markdown';

// import the component stylesheet
import '@rossonlinesolutions/react-markdown/dist/index.css';

// An example Markdown string
const markdown_str = `# Hello
## Hello2

- [X] check
- [ ] no check

**bolt** *italic* \`inline code\`

\`\`\`js

function main() {
  console.log('Hello! This here is a very long string that is here to test the scrolling capabilities of the Markdown component. So just a test!!!')
}

\`\`\`


<p>RAW</p>`;

// The component function
function App() {
  // Set the markdown string into the src property
  return (<div><MarkdownView src={markdown_str}/></div>);
}

export default App;
```

## Run the demo application

To run the demo application, follow the instructions in the [example README](./example/README.md).

## License

MIT © [Ross Online Solutions](https://github.com/rossonlinesolutions)
