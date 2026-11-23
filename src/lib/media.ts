/**
 * Media registry.
 *
 * Drop real photography / video into `public/media/` at the paths below and the
 * website picks them up automatically — no code changes needed. If a file is
 * missing, a branded gradient fallback is rendered instead, so the site never
 * shows a broken image.
 *
 * Preferred formats: WebP or AVIF for photos (≈1600px wide), MP4/WebM for video.
 * Keep photos under ~300 KB. See public/media/README.md.
 */

export const HERO_MEDIA = {
  cleaner: '/media/company/living-room-cleaning.webp',
  cleanerWorking: '/media/company/team-apartment.webp',
  carpetBackdrop: '/media/company/carpet-cleaning-city.webp',
}

export interface MediaSlot {
  src: string
  alt: string
}

export const SERVICE_IMAGES: Record<string, MediaSlot> = {
  'Residential Cleaning': {
    src: '/media/services/residential-cleaning.webp',
    alt: 'Cleaner vacuuming the floor of a contemporary living room',
  },
  'Apartment Deep Cleaning': {
    src: '/media/services/apartment-deep-cleaning.webp',
    alt: 'Cleaner wiping a tabletop in a modern apartment',
  },
  'Villa Deep Cleaning': {
    src: '/media/services/villa-deep-cleaning.webp',
    alt: 'Cleaning team vacuuming and wiping a spacious kitchen',
  },
  'Commercial Cleaning': {
    src: '/media/services/commercial-cleaning.webp',
    alt: 'Office desk being wiped during workplace cleaning',
  },
  'General Cleaning': {
    src: '/media/services/general-cleaning.webp',
    alt: 'Cleaner wiping a dining area in a modern home',
  },
  'Carpet Cleaning': {
    src: '/media/services/carpet-cleaning.webp',
    alt: 'Vacuum cleaner working over a carpet',
  },
  'Sofa Cleaning': {
    src: '/media/services/sofa-cleaning.webp',
    alt: 'Fabric sofa being cleaned with a handheld vacuum',
  },
  'Curtain Cleaning': {
    src: '/media/services/curtain-cleaning.webp',
    alt: 'Sheer curtains framing a bright living room window',
  },
  'Furniture Cleaning': {
    src: '/media/services/furniture-cleaning.webp',
    alt: 'Cleaner wiping an upholstered chair',
  },
  'Marble Polishing & Stain Removal': {
    src: '/media/services/marble-polishing.webp',
    alt: 'Workers cleaning a large floor surface with equipment',
  },
}

export const GALLERY_SHOWCASE: (MediaSlot & { label: string })[] = [
  {
    src: '/media/gallery/residential.webp',
    alt: 'Bright contemporary living room',
    label: 'Homes',
  },
  {
    src: '/media/gallery/glass.webp',
    alt: 'A mirror being wiped clean',
    label: 'Careful attention to detail',
  },
  {
    src: '/media/gallery/office.webp',
    alt: 'A workspace desk being cleaned',
    label: 'Workplaces',
  },
]

/**
 * Gallery entries: upload a `before` and `after` image per project to
 * public/media/gallery/ and add/replace entries here.
 */
export interface GalleryItem {
  before: string
  after: string
  label: string
}

export const GALLERY_ITEMS: GalleryItem[] = []
