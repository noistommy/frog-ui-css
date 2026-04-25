Frog UI was created based on the wealth of experiences—both successes and failures—we’ve accumulated while designing and managing design systems and UI libraries across various organizations and projects.

Through this process, three principles naturally emerged: “Make it usable across various frameworks,” “Enable the easy creation of systems optimized for each project,” and “Ensure it is easy to use for the developers who actually use it.” Frog UI is both an experiment and the result of implementing these principles.

### No framework constraints

The core of Frog UI**is its framework-independent CSS layer**. By separating styles from component behavior, it is designed to integrate with Vue, React, or any other UI layer.

- The component structure, tokens, and utility classes are built on pure CSS and semantic naming conventions.
- The Vue/React-specific libraries (BE-UI) are merely headless wrappers designed to allow Frog UI to be used as-is; they are not tied to any specific framework.
- We minimize dependencies so that the style system can be reused even if new frameworks or rendering models emerge.

With this principle, users can focus more on creating screens and UX using core styling techniques rather than framework-specific technologies.  

### Ability to create a system optimized for your project

Commonly used external libraries offer a high level of completeness, but they must be customized to fit the project. Due to the many limitations involved in such customization, it is not easy to fully apply brand identity.  

Rather than a finished library, Frog UI can be described as a tool that enables the application of a design system optimized for each project.

- Simply by modifying core design tokens such as color and typography, you can create themes that align with your brand and product characteristics.
- While maintaining a common component structure, elements such as state, labels, and composite patterns are designed to be extended to suit each organization’s specific domain.
- To ensure it isn’t tied to a specific UI kit and can be easily integrated into an internal component library by incorporating only the necessary parts, we keep the structure and class naming simple and predictable.

The goal is to create “projects that have their own systems through the application of Frog UI.”

### Make it easy for system users to use

Frog UI prioritizes the following experiences to ensure developers using the system can work quickly and comfortably:

- Semantic naming and a consistent token structure that allow the role of a class to be understood just by looking at its name.
- Documentation centered on clear examples, patterns, and combinations frequently used in production.
- API design that allows for handling state, events, and accessibility without excessive boilerplate when combined with Vue/React headless components.
- A package structure that minimizes dependencies and configuration, allowing teams to easily integrate it with their own coding conventions and build tools.

What does Frog UI consider good DX? “It is the ability to create screens quickly and reliably by reducing the user’s overwhelming choices at the moment of system adoption and enabling intuitive element composition through clear semantic definitions of tokens and elements.”