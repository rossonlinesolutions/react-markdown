# @rossonlinesolutions/react-markdown example

Example application, rendering an demo *GitHub Flavored Markdown* string on the page.

## Demo Markdown string

````md

## Hello2

- [X] check
- [ ] no check

**bolt** *italic* `inline code`

```js

function main() {
  console.log('Hello! This here is a very long string that is here to test the scrolling capabilities of the Markdown component. So just a test!!!')
}

```

<p>RAW</p>

````

## Run the demo

Go to the projects root directory and run the following commands to build and run the demo application:

```sh
# Install all dependencies
yarn install
cd example
yarn install
cd ..

# Run the example application
yarn run example:start # (from the projects root)

# OR
cd example
yarn run start # (from the demo application root)
```
