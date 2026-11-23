# Site photography and video

The site currently uses **licensed Pexels stock photographs** to illustrate
cleaning services. They are not photos of Simple Cooling staff, clients, or
completed projects. The original company logo is in `src/assets/logo.png`;
the lightweight, transparent WebP used on the site is `src/assets/logo.webp`.

Media is file-based rather than a pretend upload form. Replace any existing
file in `public/media/` with a new photo of the same filename, then run
`npm run build` and `npx wrangler deploy`. For newly named files, edit their
paths and accurate alt text in `src/lib/media.ts`.

## Media slots

- Hero: `public/media/hero/cleaner-branded.webp` is cropped from the
  reference image you supplied, with your original logo overlaid cleanly
  on the shirt. `poster.webp` supplies the soft room-photo backdrop.
  The input reference is a website mockup, so its crop is necessarily
  softer than an original photograph. Replace it with your real staff photo
  at the same path for the best quality.
- Services: `public/media/services/*.webp`; the 10 filenames and alt text
  are listed in `SERVICE_IMAGES` in `src/lib/media.ts`.
- Gallery: `public/media/gallery/*.webp` currently shows illustrative
  spaces. Genuine before/after project pairs can be placed at
  `<project>-before.webp` and `<project>-after.webp` and added to
  `GALLERY_ITEMS` in `src/lib/media.ts`; once entries are added, the
  gallery switches to those real projects. Do not present stock imagery
  as actual before/after results.
- About / contact imagery is selected in `src/App.tsx` and `CONTACT_IMAGE`
  in `src/lib/media.ts` respectively. Replace it with real company photos
  when available.

To optimize a new photograph: `npm run media:optimize -- public/media/<folder>/new-photo.jpg`.
This writes a WebP alongside the original; verify it, then remove the JPG
yourself if it should not ship. Aim for <300 KB per photograph and video
under 8 MB. Keep the subject centered for mobile cropping. Images below the
fold are lazy-loaded and use reserved aspect ratios.

## Stock photograph sources

All photographs below are from [Pexels](https://www.pexels.com/license/),
and are used as illustrative stock imagery. No affiliation with the
photographers or the depicted people is claimed.

| Slot | Pexels photo ID |
|---|---|
| Hero soft-focus background | 6197121 |
| Apartment deep cleaning | 6195198 |
| Residential cleaning | 6195275 |
| Villa deep cleaning | 6196692 |
| Commercial cleaning | 5882572 |
| General cleaning | 4099091 |
| Carpet cleaning | 9462133 |
| Sofa cleaning | 30238384 |
| Curtain cleaning | 7546721 |
| Furniture cleaning | 4097999 |
| Marble / floor cleaning | 37443412 |
| Gallery — residential | 7534561 |
| Gallery — glass / mirrors | 7513035 |
| Gallery — office | 5882568 |
| About illustration | 6195131 |
