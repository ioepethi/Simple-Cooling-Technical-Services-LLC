export const PHONE_DISPLAY = '0552846874'
export const PHONE_TEL = 'tel:+971552846874'
export const WHATSAPP_NUMBER = '971552846874'
export const EMAIL = 'admin@simplecooling.ae'
export const COMPANY = 'Simple Cooling Technical Services LLC'

export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  const text =
    message ??
    `Hello ${COMPANY}, I would like to enquire about your cleaning services. Please assist me with pricing and booking.`
  return `${base}?text=${encodeURIComponent(text)}`
}

export const SERVICES = [
  'Residential Cleaning',
  'Apartment Deep Cleaning',
  'Villa Deep Cleaning',
  'Commercial Cleaning',
  'General Cleaning',
  'Carpet Cleaning',
  'Sofa Cleaning',
  'Curtain Cleaning',
  'Furniture Cleaning',
  'Marble Polishing & Stain Removal',
]

export const EMIRATES = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ajman',
  'Umm Al Quwain',
  'Ras Al Khaimah',
  'Fujairah',
]

export const PACKAGES = [
  { name: 'Studio Apartment', price: 'AED 250' },
  { name: '1 Bedroom + Hall', price: 'AED 350' },
  { name: '2 Bedroom + Hall', price: 'AED 450' },
  { name: '3 Bedroom + Hall', price: 'AED 600' },
]

export const VILLA_PACKAGE = {
  name: 'Full Villa Deep Cleaning',
  price: 'AED 2,000',
  note: 'Complete Villa Deep Cleaning – Including Outdoor Areas.',
}

export const CARPET_PRICES = [
  { size: 'Small', price: 'AED 80' },
  { size: 'Medium', price: 'AED 95' },
  { size: 'Large', price: 'AED 145' },
  { size: 'Extra Large', price: 'AED 205' },
]

export const SOFA_PRICE = 'AED 35 per seater'
export const CURTAIN_PRICE = 'AED 145 per panel'
