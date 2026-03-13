## 2024-05-24 - Add lazy loading to images
**Learning:** Found several images in static HTML files without `loading="lazy"` attribute, which could delay page load.
**Action:** Always verify `loading="lazy"` is used on `<img>` tags, especially those below the fold or generated from Jekyll data files.
