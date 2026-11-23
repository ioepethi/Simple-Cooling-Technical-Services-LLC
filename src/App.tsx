import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import logo from './assets/logo.webp'
import {
  CARPET_PRICES,
  COMPANY,
  CURTAIN_PRICE,
  EMAIL,
  EMIRATES,
  PACKAGES,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
  SOFA_PRICE,
  VILLA_PACKAGE,
  waLink,
} from './lib/site'
import {
  GALLERY_ITEMS,
  GALLERY_SHOWCASE,
  HERO_MEDIA,
  SERVICE_IMAGES,
} from './lib/media'
import MediaImage from './components/MediaImage'

const SERVICES_MENU = [
  'Apartment Deep Cleaning',
  'Villa Deep Cleaning',
  'Residential Cleaning',
  'Commercial Cleaning',
  'Carpet Cleaning',
  'Sofa Cleaning',
  'Curtain Cleaning',
]

const CURRENT_YEAR = new Date().getFullYear()

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  )
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600">{subtitle}</p>}
    </div>
  )
}

function WaButton({
  message,
  children,
  className = '',
}: {
  message?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1eb855] ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-3 sm:h-20 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <img
            src={logo}
            alt={`${COMPANY} logo`}
            className="h-12 w-auto object-contain sm:h-[68px]"
          />
          <span className="hidden border-l border-slate-200 pl-2 text-[11px] font-semibold leading-snug text-navy md:block">
            Technical Services LLC
          </span>
        </a>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Main">
          <a href="#home" className="text-xs font-semibold text-slate-700 hover:text-brand-orange">
            Home
          </a>
          <a href="#about" className="text-xs font-semibold text-slate-700 hover:text-brand-orange">
            About Us
          </a>
          <div className="group relative">
            <button
              className="flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-brand-orange"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Our Services <ChevronDown className="h-4 w-4" />
            </button>
            <div
              id="desktop-services-menu"
              className={`invisible absolute left-0 top-full w-60 rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
                servicesOpen ? '!visible !opacity-100' : ''
              }`}
            >
              {SERVICES_MENU.map((s) => (
                <a
                  key={s}
                  href="#services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-orange"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {nav.slice(2).map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs font-semibold text-slate-700 hover:text-brand-orange"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-navy sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" /> Book Now
          </a>
          <button
            className="rounded-lg p-2 text-navy md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden" aria-label="Mobile">
          {nav.slice(0, 2).map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {n.label}
            </a>
          ))}
          <button
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            Our Services
            <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesOpen && (
            <div className="ml-3 border-l border-slate-200 pl-3">
              {SERVICES_MENU.map((s) => (
                <a
                  key={s}
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {s}
                </a>
              ))}
            </div>
          )}
          {nav.slice(2).map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {n.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" /> Book Now
          </a>
        </nav>
      )}
    </header>
  )
}

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    service: '',
    property: '',
    location: '',
    address: '',
    date: '',
    notes: '',
  })

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [k]: e.target.value })

  function submit(e: FormEvent) {
    e.preventDefault()
    const msg = [
      `Hello ${COMPANY}, I would like to book a cleaning service.`,
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      `Service: ${form.service}`,
      `Property type: ${form.property}`,
      `Location / Emirate: ${form.location}`,
      `Full address: ${form.address}`,
      form.date && `Preferred date: ${form.date}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waLink(msg), '_blank', 'noopener')
  }

  const input =
    'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder-slate-500 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20'

  return (
    <form
      onSubmit={submit}
      className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-navy/10"
      aria-label="Booking enquiry form"
    >
      <h3 className="bg-brand-blue px-5 py-3 text-lg font-bold text-white">Get a Free Quote</h3>
      <div className="space-y-2.5 p-4">
        <input required aria-label="Full Name" placeholder="Full Name" className={input} value={form.name} onChange={set('name')} />
        <input required type="tel" aria-label="Mobile Number" placeholder="Mobile Number" className={input} value={form.mobile} onChange={set('mobile')} />
        <select required aria-label="Select Cleaning Service" className={input} value={form.service} onChange={set('service')}>
          <option value="">Select Cleaning Service</option>
          {SERVICES.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select required aria-label="Property Type" className={input} value={form.property} onChange={set('property')}>
          <option value="">Property Type</option>
          {['Studio', 'Apartment', 'Villa', 'Office / Commercial', 'Other'].map((p) => <option key={p}>{p}</option>)}
        </select>
        <select required aria-label="Location / Emirate" className={input} value={form.location} onChange={set('location')}>
          <option value="">Location / Emirate</option>
          {EMIRATES.map((e2) => <option key={e2}>{e2}</option>)}
        </select>
        <input
          required
          name="address"
          type="text"
          autoComplete="street-address"
          aria-label="Full Address"
          placeholder="Full Address (Building, Street, Area)"
          className={input}
          value={form.address}
          onChange={set('address')}
        />
        <input type="date" aria-label="Preferred Date" className={input} value={form.date} onChange={set('date')} />
        <textarea aria-label="Additional Requirements" placeholder="Additional Requirements" rows={2} className={input} value={form.notes} onChange={set('notes')} />
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-orange-dark"
        >
          <WhatsAppIcon className="h-4 w-4" /> Send via WhatsApp
        </button>
      </div>
    </form>
  )
}

function Hero() {
  const trust = [
    { icon: ShieldCheck, label: <>Reliable<br />Service</> },
    { icon: Sparkles, label: <>Professional<br />Cleaners</> },
    { icon: MapPin, label: <>Serving All<br />UAE Emirates</> },
  ]
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f4f7f9] pt-24 text-navy sm:pt-28"
    >
      <div className="hero-backdrop absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-4 px-4 pb-8 sm:px-6 lg:grid-cols-[minmax(300px,1fr)_minmax(350px,1.1fr)_minmax(280px,.85fr)] lg:gap-3 lg:px-8 lg:pb-3">
        <div className="relative z-10 py-5 sm:py-8 lg:py-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.12em] text-brand-blue">
            Professional cleaning • Across the UAE
          </p>
          <h1 className="max-w-[560px] text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-navy sm:text-5xl xl:text-[3.7rem]">
            Professional<br className="hidden xl:block" /> Cleaning Services
            <span className="block text-brand-orange">Across the UAE</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-700 sm:text-lg">
            Experience a cleaner, fresher, and healthier environment with Simple Cooling Technical Services LLC.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <WaButton className="!rounded-lg !bg-brand-orange !px-5 !py-3 !text-sm hover:!bg-brand-orange-dark">
              Book Your Cleaning
            </WaButton>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-blue"
            >
              <Phone className="h-4 w-4" /> Call Us Now
            </a>
          </div>
          <ul className="mt-6 grid max-w-[480px] grid-cols-3 divide-x divide-brand-blue/40">
            {trust.map((t, i) => (
              <li key={i} className="flex flex-col items-center gap-1 px-2 text-center text-xs font-semibold leading-tight text-navy sm:text-sm">
                <t.icon className="h-6 w-6 text-brand-blue" />
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-xl shadow-[0_8px_28px_rgba(15,36,64,.16)] lg:max-w-none">
          <img
            src={HERO_MEDIA.cleaner}
            alt="Simple Cooling technician cleaning a luxury living room sofa"
            className="block aspect-[4/3] w-full object-cover object-[58%_center]"
            fetchPriority="high"
          />
        </figure>

        <div className="relative z-10 mx-auto w-full max-w-[390px] lg:max-w-none">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}

function About() {
  const cards = [
    {
      title: 'Our Vision',
      text: 'To become a trusted cleaning services provider across the UAE, recognized for quality, reliability, and customer satisfaction.',
    },
    {
      title: 'Our Mission',
      text: "To provide professional, efficient, and affordable cleaning solutions that enhance the cleanliness, comfort, and value of our customers' properties.",
    },
    {
      title: 'Our Commitment',
      text: 'We are committed to delivering dependable cleaning services through attention to detail, professional cleaning methods, and a strong focus on customer satisfaction.',
    },
  ]
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Us"
          title="Your Trusted Cleaning Partner"
          subtitle={`${COMPANY} is committed to providing reliable and professional cleaning solutions for residential and commercial properties. We understand that cleanliness contributes to comfort, productivity, and a healthier environment. Our focus is on delivering quality cleaning services through professional methods, suitable equipment, and customer-focused service.`}
        />
        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 lg:grid-cols-2">
          <figure>
            <MediaImage
              src="/media/team/about.webp"
              alt="Cleaning professionals with a vacuum and mop in a home"
              tone="navy"
              className="aspect-[4/3] w-full overflow-hidden rounded-2xl object-cover shadow-md"
            />
            <figcaption className="mt-2 text-xs text-slate-500">Illustrative stock photograph</figcaption>
          </figure>
          <div className="rounded-2xl bg-slate-50 p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              A cleaner space, made simple
            </p>
            <h3 className="mt-3 text-2xl font-bold text-navy">
              Professional care for the places that matter.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              From everyday home cleaning to deep cleaning for apartments, villas and commercial
              spaces, our team works around your needs. Tell us what you need and where you are;
              we’ll help you choose the right service.
            </p>
            <a
              href="#services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange"
            >
              Explore our services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-blue/10 p-3">
                <ShieldCheck className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-bold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SERVICE_CARDS: { title: string; desc: string; price?: string }[] = [
  { title: 'Residential Cleaning', desc: 'Regular and deep cleaning for homes of every size, keeping your space fresh and comfortable.' },
  { title: 'Apartment Deep Cleaning', desc: 'Thorough top-to-bottom deep cleaning packages for studios and apartments.', price: 'From AED 250' },
  { title: 'Villa Deep Cleaning', desc: 'Complete villa deep cleaning including outdoor areas.', price: 'AED 2,000' },
  { title: 'Commercial Cleaning', desc: 'Professional cleaning for offices and commercial spaces, tailored to your business needs.' },
  { title: 'General Cleaning', desc: 'Flexible cleaning support for day-to-day upkeep of your home or workplace.' },
  { title: 'Carpet Cleaning', desc: 'Wet and dry carpet shampooing with vacuum equipment.', price: 'From AED 80' },
  { title: 'Sofa Cleaning', desc: 'Wet and dry cleaning, shampooing and disinfectant treatment.', price: 'AED 35 / seater' },
  { title: 'Curtain Cleaning', desc: 'Curtain cleaning and steaming, suitable for thick and thin curtains.', price: 'AED 145 / panel' },
  { title: 'Furniture Cleaning', desc: 'Careful cleaning for your furniture to refresh each piece.' },
  { title: 'Marble Polishing & Stain Removal', desc: 'Marble polishing and stain removal — quoted after inspection.' },
]

function Services() {
  return (
    <section id="services" className="bg-white py-8 sm:py-11">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-brand-orange" />
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Our Cleaning Services</h2>
            <span className="h-0.5 w-10 bg-brand-orange" />
          </div>
          <p className="mt-1 text-sm text-slate-600">Comprehensive cleaning solutions for your home and business.</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SERVICE_CARDS.map((s, i) => (
            <div
              key={s.title}
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-[0_3px_12px_rgba(15,36,64,.12)] ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <MediaImage
                src={SERVICE_IMAGES[s.title].src}
                alt={SERVICE_IMAGES[s.title].alt}
                tone={i % 3 === 0 ? 'orange' : i % 3 === 1 ? 'blue' : 'teal'}
                className="aspect-[1.75] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="flex flex-1 items-center justify-between gap-2 p-2.5 sm:p-3">
                <div className="min-w-0">
                  <h3 className="text-xs font-extrabold leading-tight text-navy sm:text-sm">{s.title}</h3>
                  {s.price && <p className="mt-1 text-[10px] font-semibold text-brand-blue sm:text-xs">{s.price}</p>}
                  <p className="sr-only">{s.desc}</p>
                </div>
                  <a
                    href={waLink(`Hello ${COMPANY}, I would like to book ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${s.title} on WhatsApp`}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white transition hover:bg-brand-blue"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-r from-[#064b83] via-[#07578e] to-[#073c6a] py-7 text-white sm:py-9">
      <div className="mx-auto grid max-w-[1440px] gap-5 px-4 sm:px-6 lg:grid-cols-[220px_1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xl font-extrabold leading-tight text-orange-300 sm:text-2xl">
            Transparent Pricing.
          </p>
          <h2 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">No Hidden Charges.</h2>
          <p className="mt-2 text-sm text-sky-100">Affordable rates for all your cleaning needs.</p>
          <a href="#specialty-pricing" className="mt-4 inline-flex rounded-full bg-brand-orange px-4 py-2 text-xs font-bold text-white hover:bg-brand-orange-dark">
            More Services <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {PACKAGES.map((p) => (
            <article key={p.name} className="flex min-h-[142px] flex-col items-center justify-between rounded-xl bg-white p-3 text-center text-navy shadow-md sm:p-4">
              <h3 className="text-xs font-bold leading-tight sm:text-sm">{p.name}</h3>
              <p className="text-[11px] font-semibold text-slate-500">AED <strong className="text-2xl font-extrabold text-navy sm:text-3xl">{p.price.replace('AED ', '')}</strong></p>
              <a
                href={waLink(`Hello ${COMPANY}, I would like to book: ${p.name} Deep Cleaning (${p.price})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-brand-orange px-2 py-2 text-xs font-bold text-white transition hover:bg-brand-orange-dark"
              >
                Book Now
              </a>
            </article>
          ))}
          <article className="relative flex min-h-[142px] flex-col items-center justify-between rounded-xl border-2 border-brand-orange bg-white p-3 text-center text-navy shadow-lg sm:p-4">
            <span className="absolute -top-3 rounded-full bg-brand-orange px-3 py-1 text-[10px] font-extrabold text-white">BEST VALUE</span>
            <h3 className="mt-2 text-xs font-bold leading-tight sm:text-sm">Full Villa<br />Deep Cleaning</h3>
            <p className="text-[11px] font-semibold text-slate-500">AED <strong className="text-2xl font-extrabold text-navy sm:text-3xl">2,000</strong></p>
            <a
              href={waLink(`Hello ${COMPANY}, I would like to book: ${VILLA_PACKAGE.name} (${VILLA_PACKAGE.price})`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-brand-orange px-2 py-2 text-xs font-bold text-white transition hover:bg-brand-orange-dark"
            >
              Book Now
            </a>
            <p className="text-[10px] font-medium text-slate-500">Including outdoor areas</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function SpecialtyPricing() {
  return (
    <section id="specialty-pricing" className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Specialized Cleaning"
          title="Carpet, Sofa & Curtain Cleaning"
          subtitle="Clear rates for the specialist cleaning your home needs."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-bold text-navy">Carpet Cleaning</h3>
            <ul className="mt-3 divide-y divide-slate-100">
              {CARPET_PRICES.map((c) => (
                <li key={c.size} className="flex justify-between py-2 text-sm">
                  <span className="text-slate-600">{c.size}</span><strong className="text-navy">{c.price}</strong>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-slate-600">Wet and dry cleaning, carpet shampooing, and vacuum cleaning equipment.</p>
            <WaButton className="mt-auto w-full" message={`Hello ${COMPANY}, I would like to enquire about Carpet Cleaning`}>Book Carpet Cleaning</WaButton>
          </article>
          <article className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-bold text-navy">Sofa Cleaning</h3>
            <p className="mt-2 text-2xl font-extrabold text-brand-blue">{SOFA_PRICE}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Wet and dry cleaning, shampooing and disinfectant treatment.</p>
            <WaButton className="mt-auto w-full" message={`Hello ${COMPANY}, I would like to enquire about Sofa Cleaning (${SOFA_PRICE})`}>Book Sofa Cleaning</WaButton>
          </article>
          <article className="flex h-full flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-bold text-navy">Curtain Cleaning</h3>
            <p className="mt-2 text-2xl font-extrabold text-brand-blue">{CURTAIN_PRICE}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Curtain cleaning and steaming, suitable for thick and thin curtains.</p>
            <WaButton className="mt-auto w-full" message={`Hello ${COMPANY}, I would like to enquire about Curtain Cleaning (${CURTAIN_PRICE})`}>Book Curtain Cleaning</WaButton>
          </article>
        </div>
        <p className="mx-auto mt-5 max-w-2xl rounded-lg bg-amber-50 px-4 py-3 text-center text-sm text-amber-900">
          Stain removal and restoration are quoted separately after inspection.
        </p>
      </div>
    </section>
  )
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: 'Trusted & Reliable' },
    { icon: Sparkles, title: 'Professional Solutions' },
    { icon: CheckCircle2, title: 'Modern Equipment' },
    { icon: Star, title: 'Customer Focused' },
    { icon: MapPin, title: 'All UAE Emirates' },
  ]
  return (
    <section className="bg-white py-9 sm:py-12">
      <div className="mx-auto grid max-w-[1440px] items-center gap-6 px-4 sm:px-6 lg:grid-cols-[.72fr_1.5fr] lg:px-8">
        <figure className="relative mx-auto w-full max-w-[250px] overflow-hidden rounded-xl sm:max-w-[320px] lg:max-w-none">
          <img
            src={HERO_MEDIA.cleanerWorking}
            alt="Simple Cooling cleaning team working together in a luxury apartment"
            className="aspect-[.78] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-[10px] font-medium text-slate-600">
            Illustrative stock image
          </figcaption>
        </figure>
        <div>
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Why Choose Simple Cooling?</h2>
            <p className="mt-1 text-sm text-slate-600">We bring professionalism, quality and care to every cleaning job.</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {items.map((i) => (
              <article key={i.title} className="flex min-h-[110px] flex-col items-center justify-center rounded-xl bg-white p-3 text-center shadow-[0_3px_12px_rgba(15,36,64,.12)] ring-1 ring-slate-100">
                <i.icon className="h-7 w-7 text-brand-blue" />
                <h3 className="mt-2 text-xs font-bold leading-tight text-navy">{i.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={GALLERY_ITEMS.length ? 'Before & After' : 'Spaces Worth Caring For'}
          subtitle={
            GALLERY_ITEMS.length
              ? 'Real results from completed cleaning projects.'
              : 'A look at the homes and workplaces that inspire the care we bring to every cleaning.'
          }
        />
        {GALLERY_ITEMS.length ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {GALLERY_ITEMS.map((g) => (
              <figure key={g.label} className="overflow-hidden rounded-xl shadow-sm">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <MediaImage
                      src={g.before}
                      alt={`${g.label} before cleaning`}
                      className="aspect-square w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded bg-navy px-2 py-1 text-xs font-bold text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <MediaImage
                      src={g.after}
                      alt={`${g.label} after cleaning`}
                      className="aspect-square w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded bg-brand-teal px-2 py-1 text-xs font-bold text-white">
                      After
                    </span>
                  </div>
                </div>
                <figcaption className="bg-white px-3 py-2 text-center text-sm font-semibold text-navy">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {GALLERY_SHOWCASE.map((g) => (
                <figure key={g.label} className="overflow-hidden rounded-xl bg-white shadow-sm">
                  <MediaImage src={g.src} alt={g.alt} className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="bg-white px-3 py-2 text-center text-sm font-semibold text-navy">
                    {g.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-slate-500">
              Illustrative stock photography. Genuine before-and-after project photos will be shared
              here when available.
            </p>
          </>
        )}
      </div>
    </section>
  )
}

function Coverage() {
  return (
    <section className="bg-gradient-to-br from-brand-blue/5 via-white to-brand-orange/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Coverage"
          title="Professional Cleaning Services Across the UAE"
          subtitle="Wherever you are in the UAE, Simple Cooling Technical Services LLC is ready to assist with your cleaning requirements. Contact our team to discuss your location and service requirements."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {EMIRATES.map((e) => (
            <span
              key={e}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm ring-1 ring-slate-200"
            >
              <MapPin className="h-4 w-4 text-brand-orange" /> {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Choose Your Service', text: 'Select the cleaning service and property package you need.' },
    { n: '02', title: 'Contact Our Team', text: 'Send your requirements through WhatsApp or our enquiry form.' },
    { n: '03', title: 'Confirm Your Booking', text: 'Discuss your location, preferred schedule, and service requirements.' },
    { n: '04', title: 'Enjoy a Cleaner Space', text: 'Receive the agreed cleaning service.' },
  ]
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-center gap-8">
          <SectionHeading eyebrow="How It Works" title="Booking in 4 Simple Steps" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="bg-gradient-to-r from-brand-orange to-brand-blue bg-clip-text text-4xl font-extrabold text-transparent">
                {s.n}
              </span>
              <h3 className="mt-3 font-bold text-navy">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="Genuine reviews from our customers will be published here soon."
        />
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <Star className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-4 text-sm text-slate-500">
            Customer reviews coming soon. Be our next happy customer — book your cleaning today.
          </p>
          <WaButton className="mt-6">Book Your Cleaning</WaButton>
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'Which areas do you serve?',
    a: 'We serve the entire UAE: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah. Contact us to discuss your location and requirements.',
  },
  {
    q: 'Do you provide villa deep cleaning?',
    a: `Yes — our Full Villa Deep Cleaning package is ${VILLA_PACKAGE.price} and includes outdoor areas.`,
  },
  {
    q: 'How much does apartment deep cleaning cost?',
    a: 'Studio Apartment: AED 250 · 1 Bedroom + Hall: AED 350 · 2 Bedroom + Hall: AED 450 · 3 Bedroom + Hall: AED 600.',
  },
  {
    q: 'Is outdoor cleaning included in the villa package?',
    a: 'Yes — the Complete Villa Deep Cleaning package includes outdoor areas.',
  },
  {
    q: 'Do you provide carpet and sofa cleaning?',
    a: `Yes. Carpet cleaning is priced by size (AED 80–205) with wet and dry cleaning and shampooing. Sofa cleaning is ${SOFA_PRICE}. Curtain cleaning is ${CURTAIN_PRICE}.`,
  },
  {
    q: 'How can I request a quotation?',
    a: 'Send us a message on WhatsApp or use the booking form — tell us the service, property type and emirate, and we will reply with pricing.',
  },
  {
    q: 'How can I book your cleaning services?',
    a: 'Tap any "Book Now" button to message us on WhatsApp, call us directly, or fill in the enquiry form at the top of the page.',
  },
  {
    q: 'Is stain removal included in the carpet cleaning price?',
    a: 'No — stain removal and restoration are quoted separately after inspection.',
  },
]

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-white">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-navy"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <ChevronDown className={`h-4 w-4 shrink-0 transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="border-t-4 border-brand-orange bg-navy pb-24 pt-8 text-slate-300 lg:pb-8">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1.6fr_1fr] lg:px-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt={`${COMPANY} logo`} className="h-[68px] w-auto rounded-lg bg-white p-1" />
          <p className="max-w-[210px] text-xs leading-relaxed text-slate-300">
            Professional cleaning services across all Emirates of the UAE.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <a href={PHONE_TEL} className="flex items-center gap-2 text-sm hover:text-white">
            <span className="rounded-full bg-white/10 p-2"><Phone className="h-4 w-4 text-orange-300" /></span>
            <span><span className="block text-[10px] text-slate-400">Call Us Anytime</span>{PHONE_DISPLAY}</span>
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white">
            <span className="rounded-full bg-white/10 p-2"><WhatsAppIcon className="h-4 w-4 text-[#25D366]" /></span>
            <span><span className="block text-[10px] text-slate-400">WhatsApp</span>Chat with us</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-white">
            <span className="rounded-full bg-white/10 p-2"><Mail className="h-4 w-4 text-sky-300" /></span>
            <span><span className="block text-[10px] text-slate-400">Email Us</span>{EMAIL}</span>
          </a>
          <span className="flex items-center gap-2 text-sm">
            <span className="rounded-full bg-white/10 p-2"><MapPin className="h-4 w-4 text-brand-teal" /></span>
            <span><span className="block text-[10px] text-slate-400">Coverage</span>All UAE Emirates</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs lg:justify-end">
          {[
            ['Home', '#home'],
            ['About Us', '#about'],
            ['Services', '#services'],
            ['Pricing', '#pricing'],
            ['Gallery', '#gallery'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="hover:text-orange-300">{label}</a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-7 flex max-w-[1440px] flex-col gap-2 border-t border-white/10 px-4 pt-4 text-center text-[10px] text-slate-400 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <span>© {CURRENT_YEAR} {COMPANY}. All rights reserved.</span>
        <span>Service photographs are illustrative stock imagery.</span>
      </div>
    </footer>
  )
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
      <a
        href={PHONE_TEL}
        aria-label={`Call ${COMPANY}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${COMPANY} on WhatsApp`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <WhyUs />
        <SpecialtyPricing />
        <About />
        <Gallery />
        <Coverage />
        <HowItWorks />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
