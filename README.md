# @rossonlinesolutions/react-markdown

> A markdown render component for react.

## Build and Run

To build this package, just run:

```sh
# Installs all dependencies
yarn install

# Builds the library
yarn build
```

### Run the demo application

To run the demo application, follow the instructions in the [example README](./example/README.md).

## Install

### npm

To install this package via npm, create a `.npmrc` file at the root of your npm project
and add the following line to it:

```
@rossonlinesolutions:registry=https://npm.pkg.github.com/
```

Then install this package by running:

```sh
npm install --save @rossonlinesolutions/react-markdown
```

### yarn

To install this package via yarn, create a `.yarnrc` file at the root of your yarn project
and add the following line to it:

```
"@rossonlinesolutions:registry" "https://npm.pkg.github.com/"
```

Then install this package by running:

```sh
yarn add @rossonlinesolutions/react-markdown
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

## License

MIT © [Ross Online Solutions](https://github.com/rossonlinesolutions)
