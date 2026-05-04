<div class="tab-content active" data-tab="concepts">

  ##### What is the core concept of FROG UI?

  FROG UI was created with the goal of <mark>\"expressing styles through language, not code\"</mark>. It is designed to allow developers to express UI like drawing a picture by combining words close to natural language, instead of abbreviations or shortened codes.

  ##### Why use a CSS framework or semantic CSS approach instead of CSS‑in‑JS?

  We adopted the semantic CSS pattern to separate design tokens and style layers from the JavaScript runtime for better performance, while simultaneously creating <mark>a reusable design language that is independent of frameworks/platforms.</mark>

</div>

<div class="tab-content" data-tab="semantic">

  ##### What does 'Semantic CSS' mean in this system?

  It refers to a method of expressing <mark>the visual and intentional characteristics of components using meaningful words</mark>. For example, a button's role, size, shape, icon position, etc. are directly expressed as words and used as classes.

  ##### What specifically does it mean to apply styles like natural language?

  It means directly translating a sentence like \"a small primary button that is round and includes a left icon\" into a class combination such as button primary round icon left small. In other words, it provides an experience of translating sentences in your mind almost directly into code.

  ##### Why not use abbreviated utility classes like Tailwind?

  Abbreviation-based utilities are fast, but as teams grow, the cost of memorizing and interpreting rules increases. This system uses words with immediately readable meanings like primary, round, and small, prioritizing readability and onboarding experience.

</div>

<div class="tab-content" data-tab="experience">

  ##### How does this help collaboration with designers?

  <mark>The language designers use and the words used in code become almost identical</mark>. A sentence like \"please add a left icon to a primary round small button\" effectively becomes the class combination itself, which reduces interpretation loss when translating design specs into code.

  ##### What is the learning curve like when new team members join?

  Instead of memorizing framework-specific abbreviations, they just need to understand words they already know. By simply scanning the class names, they can infer the role and style of a component, which speeds up understanding of existing code and adaptation.

  ##### Can consistency be maintained even in large-scale projects?

  Because core vocabulary (e.g., button, primary, danger, round, small, etc.) is proactively defined and enforced in the design system, everyone shares the same word set even as the team grows. As a result, <mark>style combinations remain flexible while tokens and meanings stay consistent.</mark>

</div>

<div class="tab-content" data-tab="architecture">

  ##### How are component variants expressed?

  Each variant is expressed with a single meaningful word. For example, a button uses role variants like primary and secondary, combined with size variants like tiny, small, large, and huge.

  ##### What principles are followed when adding new style tokens?

  As much as possible, we choose tokens based on whether they are <mark>\"frequently used, simple, and familiar words.\"</mark> We prioritize expressions that designers and developers will actually use in conversations, and prefer full names and meaning-centered naming over abbreviations. (Commonly used abbreviations like xs and sm are allowed as exceptions.)

  ##### How are responsive styles handled?

  Responsive behavior is also expressed using meaning-based prefixes or dedicated rules. Even when using device-based breakpoints like md or lg, our principle is to keep the internal tokens and combinations human-readable.

</div>

<div class="tab-content" data-tab="performance">

  ##### Is FROG tied to a specific frontend framework?

  No. Since styles exist as <mark>a CSS layer independent of any framework</mark>, it is designed so that the same design language can be used across various environments such as React, Vue, and Web Components.

  ##### What performance benefits does it offer?"

  By default, it <mark>uses pre-prepared static CSS</mark> instead of generating or injecting styles at runtime. This reduces unnecessary JavaScript overhead during initial load and re-rendering.

</div>