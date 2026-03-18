## 2024-03-14 - Redundant ARIA labels vs Title tooltips
**Learning:** In the Hydejack theme layouts (e.g., `_layouts/projects.html`, `_layouts/education_skills.html`), icon-only buttons generally already contain `<span class="sr-only">` text for screen readers. Adding `aria-label` to these elements is redundant and may override intended text. Sighted mouse users, however, lack context.
**Action:** Use `title` attributes on icon-only navigation elements (like `#_menu`, `#_forward`) that already have `.sr-only` inner text to provide native tooltips for sighted users without harming accessibility.
## 2024-03-14 - Dynamic ARIA attributes in templates
**Learning:** Hardcoded ARIA attributes (like `aria-valuenow="60"`) in loop templates override dynamic visual representations, causing screen readers to announce incorrect information for every iterated item (e.g. 60% instead of 95%).
**Action:** Always ensure ARIA attributes in dynamic components or loops reflect the actual data value using the templating engine syntax (e.g. `aria-valuenow="{{ skill.level | remove: '%' }}"`).

## 2024-03-14 - Missing ARIA labels on progress bars
**Learning:** Progress bars with `role="progressbar"` need an explicit `aria-label` or `aria-labelledby` to associate the progress with its subject (e.g., the skill name). Without it, screen readers only announce the value, lacking context.
**Action:** Always add an `aria-label` referencing the relevant context (like `aria-label="{{ skill.name }} skill level"`) to `role="progressbar"` elements to ensure screen readers provide full context.

## 2026-03-18 - Add aria-current for active links in custom Jekyll layouts
**Learning:** Hardcoded sidebar navigation menus in custom standalone Jekyll layouts do not automatically receive `aria-current="page"` attributes to indicate the active state to screen readers.
**Action:** Always add `{% if page.url == '/your_path/' %}aria-current="page"{% endif %}` to navigation links in custom Jekyll layouts to ensure screen readers can identify the current active page.
