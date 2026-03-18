## 2024-05-24 - Missing Subresource Integrity (SRI) for CDN Scripts
**Vulnerability:** External scripts loaded from CDNs without `integrity` and `crossorigin` attributes.
**Learning:** Common libraries like jQuery, Bootstrap, and Popper were loaded from CDNs in the layout templates, which introduces a critical vulnerability if the CDN gets compromised.
**Prevention:** Always verify that CDN-loaded scripts include SHA-384 integrity hashes and `crossorigin="anonymous"` when adding or reviewing external script tags.

## 2024-05-18 - [Enforcing HTTPS and Restricting Resources]
**Vulnerability:** Found previously-noted HTTP external links, however upon investigation, the repository's source files (layouts, markdown, yml) had already mitigated or upgraded them to HTTPS. Missing Content-Security-Policy allowed potential execution of unauthorized scripts.
**Learning:** Sometimes build artifacts (`_site/`) or binaries can retain older HTTP links, but the source truth is what matters. A permissive CSP with `unsafe-inline` might be necessary for Jekyll themes like Hydejack without extensive refactoring.
**Prevention:** Always verify links in the actual source code (`grep --exclude-dir=_site`) before attempting to upgrade, and use a strong CSP in base layout `<head>` tags.
