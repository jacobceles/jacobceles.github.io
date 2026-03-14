## 2024-03-14 - Redundant ARIA labels vs Title tooltips
**Learning:** In the Hydejack theme layouts (e.g., `_layouts/projects.html`, `_layouts/education_skills.html`), icon-only buttons generally already contain `<span class="sr-only">` text for screen readers. Adding `aria-label` to these elements is redundant and may override intended text. Sighted mouse users, however, lack context.
**Action:** Use `title` attributes on icon-only navigation elements (like `#_menu`, `#_forward`) that already have `.sr-only` inner text to provide native tooltips for sighted users without harming accessibility.
## 2024-03-14 - Dynamic ARIA attributes in templates
**Learning:** Hardcoded ARIA attributes (like `aria-valuenow="60"`) in loop templates override dynamic visual representations, causing screen readers to announce incorrect information for every iterated item (e.g. 60% instead of 95%).
**Action:** Always ensure ARIA attributes in dynamic components or loops reflect the actual data value using the templating engine syntax (e.g. `aria-valuenow="{{ skill.level | remove: '%' }}"`).
