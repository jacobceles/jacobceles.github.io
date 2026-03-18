## 2024-05-24 - Add lazy loading to images
**Learning:** Found several images in static HTML files without `loading="lazy"` attribute, which could delay page load.
**Action:** Always verify `loading="lazy"` is used on `<img>` tags, especially those below the fold or generated from Jekyll data files.
## 2024-03-18 - Improve font loading performance with preconnect
**Learning:** Adding `preconnect` resource hints for Google Fonts origins alongside `dns-prefetch` can significantly reduce layout shift and time-to-interactive by resolving DNS, TCP, and TLS early.
**Action:** When working on performance, consider preconnecting to critical external domains to optimize the critical rendering path.
