# CSS Modules

- if we are going to use all our css in one file called App.css, then we might face issue of css class conflict with other devs trying to work on the same project with their own css classes. This will cause multiple conflicts at global css level.

- In order to fix this issue, the css modules files can be used.

  - These files are named in a specific way, like "component_name.module.css"

  - This way we can target the specific jsx component and import this module to render our specific css, restricted to be used only for that component.
