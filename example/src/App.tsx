import React from 'react';
import MarkdownView from '@rossonlinesolutions/react-markdown';
import '@rossonlinesolutions/react-markdown/dist/index.css';

function App() {

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


<p>RAW</p>
`;

  return (
    <div className="paddings"><MarkdownView src={markdown_str} /></div>
  );
}

export default App;
