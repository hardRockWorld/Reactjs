# Create React Components

Here, we try to create the react components.

There are 2 kinds of react components:

- Class components
- Functional components

* (in this tutorial, we are going to use functional components, because its mostly used and is simple)

## Importing/Exporting react components

We need to export any react component before we could use them in our app.

- Exporting component:
  "export default component_name"
  or
  "export component_name"
  (if you want to export non-default component, then while importing the component, you need to derive it like this within {component_name})

  ex: for non-default components

  import {MyComponent} from './components/MyComponent'

  and

  for default component:

  import MyComponent from './components/MyComponent'
