## 2024-05-24 - Missing Subresource Integrity (SRI) for CDN Scripts
**Vulnerability:** External scripts loaded from CDNs without `integrity` and `crossorigin` attributes.
**Learning:** Common libraries like jQuery, Bootstrap, and Popper were loaded from CDNs in the layout templates, which introduces a critical vulnerability if the CDN gets compromised.
**Prevention:** Always verify that CDN-loaded scripts include SHA-384 integrity hashes and `crossorigin="anonymous"` when adding or reviewing external script tags.
