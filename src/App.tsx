import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
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
  CONTACT_IMAGE,
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt={`${COMPANY} logo`}
            className="h-14 w-auto object-contain sm:h-[84px]"
          />
          <span className="hidden border-l border-slate-200 pl-3 text-xs font-semibold leading-snug text-navy xl:block">
            Simple Cooling
            <span className="block font-normal text-brand-blue">Technical Services LLC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          <a href="#home" className="text-sm font-medium text-slate-700 hover:text-brand-orange">
            Home
          </a>
          <a href="#about" className="text-sm font-medium text-slate-700 hover:text-brand-orange">
            About Us
          </a>
          <div className="group relative">
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-orange"
              aria-haspopup="true"
            >
              Our Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full w-60 rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {SERVICES_MENU.map((s) => (
                <a
                  key={s}
                  href="#services"
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
              className="text-sm font-medium text-slate-700 hover:text-brand-orange"
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
            className="hidden items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-brand-orange-dark sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" /> Book Now
          </a>
          <button
            className="rounded-lg p-2 text-navy lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile">
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
      form.date && `Preferred date: ${form.date}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waLink(msg), '_blank', 'noopener')
  }

  const input =
    'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20'

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-900/5"
      aria-label="Booking enquiry form"
    >
      <h3 className="text-base font-bold text-navy">Request a Booking</h3>
      <p className="mb-4 text-xs text-slate-500">We reply on WhatsApp with pricing and availability.</p>
      <div className="space-y-3">
        <input required placeholder="Full Name" className={input} value={form.name} onChange={set('name')} />
        <input
          required
          type="tel"
          placeholder="Mobile Number"
          className={input}
          value={form.mobile}
          onChange={set('mobile')}
        />
        <select required className={input} value={form.service} onChange={set('service')}>
          <option value="">Select Cleaning Service</option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select required className={input} value={form.property} onChange={set('property')}>
          <option value="">Property Type</option>
          {['Studio', 'Apartment', 'Villa', 'Office / Commercial', 'Other'].map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        <select required className={input} value={form.location} onChange={set('location')}>
          <option value="">Location / Emirate</option>
          {EMIRATES.map((e2) => (
            <option key={e2}>{e2}</option>
          ))}
        </select>
        <input
          type="date"
          aria-label="Preferred date"
          className={input}
          value={form.date}
          onChange={set('date')}
        />
        <textarea
          placeholder="Additional Requirements"
          rows={2}
          className={input}
          value={form.notes}
          onChange={set('notes')}
        />
      </div>
      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-bold text-white shadow transition hover:bg-brand-orange-dark"
      >
        <WhatsAppIcon className="h-4 w-4" /> Send via WhatsApp
      </button>
    </form>
  )
}

function HeroVideo() {
  const [ready, setReady] = useState(false)
  const poster = (
    <img
      src={HERO_MEDIA.poster}
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      className="absolute inset-0 h-full w-full object-cover"
    />
  )

  if (!HERO_MEDIA.video && !HERO_MEDIA.videoWebm) return poster

  return (
    <>
      {poster}
      <video
        className={`absolute inset-0 hidden h-full w-full object-cover transition-opacity duration-700 md:block ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_MEDIA.poster}
        onCanPlay={() => setReady(true)}
        aria-hidden="true"
      >
        {HERO_MEDIA.videoWebm && <source src={HERO_MEDIA.videoWebm} type="video/webm" />}
        {HERO_MEDIA.video && <source src={HERO_MEDIA.video} type="video/mp4" />}
      </video>
    </>
  )
}

function Hero() {
  const trust = [
    { icon: Home, label: 'Residential & Commercial Cleaning' },
    { icon: Sparkles, label: 'Professional Cleaning Solutions' },
    { icon: MapPin, label: 'Serving All UAE Emirates' },
  ]
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-brand-blue pb-16 pt-32 text-white sm:pt-36"
    >
      <HeroVideo />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/60" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-teal/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-200 ring-1 ring-white/20">
            <MapPin className="h-3.5 w-3.5" /> Professional Cleaning Services Across All Emirates of the UAE
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Experience the Difference of{' '}
            <span className="bg-gradient-to-r from-orange-300 to-sky-300 bg-clip-text text-transparent">
              Professional Cleaning
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-200">
            From apartments to villas and commercial spaces, Simple Cooling delivers professional
            cleaning solutions across the entire UAE.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WaButton className="!px-7 !py-3 !text-base">Book Your Cleaning</WaButton>
            <WaButton
              className="!bg-white/10 !text-white ring-1 ring-white/30 hover:!bg-white/20 !px-7 !py-3 !text-base"
              message={`Hello ${COMPANY}, I would like to chat about your cleaning services.`}
            >
              WhatsApp Us
            </WaButton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-sm text-slate-200">
                <t.icon className="h-4 w-4 text-orange-300" /> {t.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:justify-self-end">
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

const SERVICE_CARDS: { title: string; desc: string }[] = [
  { title: 'Residential Cleaning', desc: 'Regular and deep cleaning for homes of every size, keeping your space fresh and comfortable.' },
  { title: 'Apartment Deep Cleaning', desc: 'Thorough top-to-bottom deep cleaning packages for studios and apartments — from AED 250.' },
  { title: 'Villa Deep Cleaning', desc: 'Complete villa deep cleaning including outdoor areas, for a spotless home inside and out.' },
  { title: 'Commercial Cleaning', desc: 'Professional cleaning for offices and commercial spaces, tailored to your business needs.' },
  { title: 'General Cleaning', desc: 'Flexible cleaning support for day-to-day upkeep of your home or workplace.' },
  { title: 'Carpet Cleaning', desc: 'Wet and dry carpet shampooing with vacuum equipment — deep, fabric-conscious cleaning.' },
  { title: 'Sofa Cleaning', desc: 'Wet and dry cleaning, shampooing and disinfectant treatment — AED 35 per seater.' },
  { title: 'Curtain Cleaning', desc: 'Curtain cleaning and steaming, suitable for thick and thin curtains — AED 145 per panel.' },
  { title: 'Furniture Cleaning', desc: 'Careful cleaning for your furniture to refresh and extend the life of every piece.' },
  { title: 'Marble Polishing & Stain Removal', desc: 'Marble polishing and stain removal — quoted after inspection of the surface.' },
]

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Cleaning Services for Every Space"
          subtitle="Residential and commercial cleaning solutions delivered across all emirates of the UAE."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((s, i) => (
            <div
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-lg"
            >
              <MediaImage
                src={SERVICE_IMAGES[s.title].src}
                alt={SERVICE_IMAGES[s.title].alt}
                label={s.title}
                tone={i % 3 === 0 ? 'orange' : i % 3 === 1 ? 'blue' : 'teal'}
                className="h-40 w-full object-cover transition group-hover:scale-[1.03]"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={waLink(`Hello ${COMPANY}, I would like to know more about: ${s.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-orange"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={waLink(`Hello ${COMPANY}, I would like to enquire about: ${s.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${s.title} on WhatsApp`}
                    className="rounded-full bg-[#25D366] p-2 text-white transition hover:bg-[#1eb855]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
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
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Residential Deep Cleaning Packages"
          subtitle="Clear, transparent pricing — no hidden fees. Book the package that fits your home."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-slate-600">{p.name}</h3>
              <p className="mt-3 text-3xl font-extrabold text-navy">{p.price}</p>
              <p className="mt-1 text-xs text-slate-400">Deep cleaning</p>
              <WaButton
                className="mt-5 w-full"
                message={`Hello ${COMPANY}, I would like to book: ${p.name} Deep Cleaning (${p.price})`}
              >
                Book Now
              </WaButton>
            </div>
          ))}
          <div className="relative flex flex-col rounded-2xl bg-gradient-to-br from-brand-orange to-brand-blue p-6 text-center text-white shadow-lg transition hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-wide">
              Featured
            </span>
            <h3 className="text-sm font-semibold text-orange-100">{VILLA_PACKAGE.name}</h3>
            <p className="mt-3 text-3xl font-extrabold">{VILLA_PACKAGE.price}</p>
            <p className="mt-1 text-xs text-orange-100">{VILLA_PACKAGE.note}</p>
            <WaButton
              className="mt-5 w-full !bg-white !text-navy hover:!bg-slate-100"
              message={`Hello ${COMPANY}, I would like to book: ${VILLA_PACKAGE.name} (${VILLA_PACKAGE.price})`}
            >
              Book Now
            </WaButton>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Specialized Cleaning"
            title="Carpet, Sofa & Curtain Cleaning"
            subtitle="Deep, fabric-conscious cleaning with wet and dry methods, shampooing and professional equipment."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-navy">Carpet Cleaning</h3>
              <ul className="mt-4 divide-y divide-slate-100">
                {CARPET_PRICES.map((c) => (
                  <li key={c.size} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="text-slate-600">{c.size}</span>
                    <span className="font-bold text-navy">{c.price}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-500">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Wet and dry cleaning included</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Carpet shampooing</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Deep, fabric-conscious cleaning</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Vacuum cleaning equipment</li>
              </ul>
              <WaButton
                className="mt-5 w-full"
                message={`Hello ${COMPANY}, I would like to enquire about Carpet Cleaning`}
              >
                Book Carpet Cleaning
              </WaButton>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-navy">Sofa Cleaning</h3>
              <p className="mt-3 text-3xl font-extrabold text-navy">{SOFA_PRICE}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Wet and dry cleaning</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Shampooing</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Disinfectant treatment</li>
              </ul>
              <WaButton
                className="mt-5 w-full"
                message={`Hello ${COMPANY}, I would like to enquire about Sofa Cleaning (${SOFA_PRICE})`}
              >
                Book Sofa Cleaning
              </WaButton>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-navy">Curtain Cleaning</h3>
              <p className="mt-3 text-3xl font-extrabold text-navy">{CURTAIN_PRICE}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Curtain cleaning</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Steaming</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand-teal" /> Suitable for thick and thin curtains</li>
              </ul>
              <WaButton
                className="mt-5 w-full"
                message={`Hello ${COMPANY}, I would like to enquire about Curtain Cleaning (${CURTAIN_PRICE})`}
              >
                Book Curtain Cleaning
              </WaButton>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-amber-50 px-4 py-3 text-center text-sm text-amber-800 ring-1 ring-amber-200">
            Note: Stain removal and restoration are quoted separately after inspection.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: 'Reliable Service', text: 'Dependable cleaning you can count on, every visit.' },
    { icon: Sparkles, title: 'Professional Cleaning Solutions', text: 'Professional methods suited to each surface and space.' },
    { icon: CheckCircle2, title: 'Quality Cleaning Equipment', text: 'Vacuum machines, low-foam solutions and carpet shampoo — we bring everything you need.' },
    { icon: Star, title: 'Customer Satisfaction', text: 'A strong focus on detail and on your satisfaction.' },
    { icon: Clock, title: 'Clear & Transparent Pricing', text: 'Published AED prices — no surprises, no hidden fees.' },
    { icon: MapPin, title: 'Serving All UAE Emirates', text: 'From Dubai to Fujairah — coverage across the entire UAE.' },
  ]
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-6 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-300">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Why Choose Simple Cooling?</h2>
            <p className="mt-4 text-lg font-semibold text-sky-300">"We Bring Everything You Need."</p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10">
              <i.icon className="h-8 w-8 text-orange-300" />
              <h3 className="mt-3 font-bold">{i.title}</h3>
              <p className="mt-1.5 text-sm text-slate-300">{i.text}</p>
            </div>
          ))}
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

function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-orange to-brand-blue py-14 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6 md:flex-row md:text-left">
        <div className="relative shrink-0">
          <MediaImage
            src={CONTACT_IMAGE.src}
            alt={CONTACT_IMAGE.alt}
            tone="navy"
            className="h-40 w-56 rounded-2xl object-cover shadow-lg sm:h-48 sm:w-64"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready for a Cleaner Space?</h2>
          <p className="mt-3 max-w-lg text-orange-50">
            Message us on WhatsApp or call {PHONE_DISPLAY} — our team covers every emirate and will
            confirm your booking fast.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <WaButton className="!bg-white !text-navy hover:!bg-slate-100">Book Your Cleaning</WaButton>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-navy/40 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-navy/60"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-navy pb-24 pt-16 text-slate-300 lg:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt={`${COMPANY} logo`}
              className="h-16 w-auto rounded-xl bg-white object-contain p-1.5"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Professional cleaning solutions for residential and commercial properties across the
            entire UAE.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-orange-300">
                <Phone className="h-4 w-4 text-brand-orange" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-300"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-orange-300">
                <Mail className="h-4 w-4 text-sky-400" /> {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <MapPin className="h-4 w-4 text-brand-teal" /> Serving all UAE Emirates
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['Home', '#home'],
              ['About Us', '#about'],
              ['Pricing', '#pricing'],
              ['Gallery', '#gallery'],
              ['Contact Us', '#contact'],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-orange-300">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white">Our Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES_MENU.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-orange-300">{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-slate-500 sm:px-6">
        © {CURRENT_YEAR} {COMPANY}. All rights reserved. Professional cleaning services
        across all Emirates of the UAE.
        <span className="mt-2 block">Service photography is illustrative stock imagery, not company projects.</span>
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
        <About />
        <Services />
        <Pricing />
        <WhyUs />
        <Gallery />
        <Coverage />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
