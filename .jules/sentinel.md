## 2024-05-25 - Insecure Content Security Policy (unsafe-eval)
**Vulnerability:** The Content Security Policy (CSP) included `'unsafe-eval'` in the `script-src` directive, allowing the execution of code generated from strings.
**Learning:** Hardening CSP by removing `'unsafe-eval'` significantly mitigates XSS risks. Even if legacy libraries might traditionally suggest it, modern security standards prioritize its removal to prevent unauthorized code execution.
**Prevention:** Always strive for a CSP that avoids `'unsafe-eval'`. Verify if scripts or libraries truly require it and look for CSP-compliant alternatives.

## 2024-05-24 - Missing Subresource Integrity (SRI) for CDN Scripts
**Vulnerability:** External scripts loaded from CDNs without `integrity` and `crossorigin` attributes.
**Learning:** Common libraries like jQuery, Bootstrap, and Popper were loaded from CDNs in the layout templates, which introduces a critical vulnerability if the CDN gets compromised.
**Prevention:** Always verify that CDN-loaded scripts include SHA-384 integrity hashes and `crossorigin="anonymous"` when adding or reviewing external script tags.

## 2024-05-18 - [Enforcing HTTPS and Restricting Resources]
**Vulnerability:** Found previously-noted HTTP external links, however upon investigation, the repository's source files (layouts, markdown, yml) had already mitigated or upgraded them to HTTPS. Missing Content-Security-Policy allowed potential execution of unauthorized scripts.
**Learning:** Sometimes build artifacts (`_site/`) or binaries can retain older HTTP links, but the source truth is what matters. A permissive CSP with `unsafe-inline` might be necessary for Jekyll themes like Hydejack without extensive refactoring.
**Prevention:** Always verify links in the actual source code (`grep --exclude-dir=_site`) before attempting to upgrade, and use a strong CSP in base layout `<head>` tags.

## 2026-05-01 - Insecure Content Security Policy (unsafe-inline)
**Vulnerability:** The Content Security Policy (CSP) allowed 'unsafe-inline' for scripts and styles, rendering the site vulnerable to Cross-Site Scripting (XSS) attacks.
**Learning:** Refactoring inline scripts and styles that contain Jekyll Liquid variables (e.g. `{{ site.accent_image }}`) requires them to be extracted into `.scss` files with frontmatter (`--- \n ---`) to enable Jekyll processing, while pure JavaScript should be moved to separate `.js` files and included using the `defer` attribute.
**Prevention:** Avoid using `'unsafe-inline'` in `script-src` and `style-src` directives. Consistently utilize external CSS/JS assets, relying on build systems like Jekyll to dynamically process configuration variables.
