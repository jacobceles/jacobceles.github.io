## 2024-05-24 - Add lazy loading to images
**Learning:** Found several images in static HTML files without `loading="lazy"` attribute, which could delay page load.
**Action:** Always verify `loading="lazy"` is used on `<img>` tags, especially those below the fold or generated from Jekyll data files.
## 2024-03-18 - Improve font loading performance with preconnect
**Learning:** Adding `preconnect` resource hints for Google Fonts origins alongside `dns-prefetch` can significantly reduce layout shift and time-to-interactive by resolving DNS, TCP, and TLS early.
**Action:** When working on performance, consider preconnecting to critical external domains to optimize the critical rendering path.

## 2024-10-26 - Preloading LCP images and removing lazy loading from above-the-fold
**Learning:** Adding `loading="lazy"` to above-the-fold images is a performance anti-pattern that delays the Largest Contentful Paint (LCP) and render time because the browser has to wait for layout to know if the image is visible. Preloading critical LCP images (like sidebar backgrounds and profile icons) using `<link rel="preload" as="image">` improves LCP.
**Action:** Never lazy-load above-the-fold images. Always evaluate whether an image is above the fold, and preload it if it's a critical LCP element.

## 2026-05-15 - Consolidate Redundant DOMContentLoaded Listeners
**Learning:** Multiple `DOMContentLoaded` event listeners for small initialization tasks add unnecessary overhead to the browser's event queue and can be consolidated for cleaner code and minor performance gains. Furthermore, using a jQuery ready wrapper (`$(function() { ... })`) inside a `DOMContentLoaded` listener is redundant as the DOM is already guaranteed to be ready.
**Action:** Combined multiple listeners in `assets/js/wow-init.js` into a single listener and removed the redundant jQuery wrapper.
