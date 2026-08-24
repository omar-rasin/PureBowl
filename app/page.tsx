'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, HeartHandshake, Menu, PawPrint, ShieldCheck, Utensils, X } from 'lucide-react'

const nav = [['About','about'],['Impact','impact'],['Initiatives','initiatives'],['Rescues','rescues'],['Volunteers','volunteers'],['Contact','contact']]
const initiatives = [
  { icon: Utensils, title: 'Feeding Programs', copy: 'Recurring food distribution provides stray animals with consistent access to food and water.' },
  { icon: PawPrint, title: 'Rescue Coordination', copy: 'Urgent cases are coordinated with appropriate local resources and animal welfare partners.' },
  { icon: ArrowUpRight, title: 'Digital Fundraising', copy: 'Digital campaigns mobilize support for feeding initiatives and rescue efforts.' },
  { icon: HeartHandshake, title: 'Shelter Partnerships', copy: 'Local shelters help coordinate care, referrals, and ongoing rescue support.' },
]

function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="section-label">{children}</p> }

export default function Page() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true) }
  return (
    <main>
      <header className="site-nav" data-open={open}>
        <a href="#top" className="wordmark">PureBowl</a>
        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav aria-label="Main navigation" className="nav-links">{nav.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>
      </header>
      <section id="top" className="hero"><div><h1>PureBowl</h1><p>Feeding. Rescuing. Protecting.</p><nav className="hero-nav" aria-label="Explore sections">{nav.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><a className="explore" href="#about" aria-label="Explore PureBowl"><ArrowDown /></a></div></section>

      <section id="about" className="section about reveal"><SectionLabel>01 / About</SectionLabel><div className="split"><h2>Small actions.<br />Real lives changed.</h2><div><p className="lead">PureBowl is a grassroots animal welfare initiative built around a simple idea: consistent action can create meaningful change.</p><p>Through volunteer-led feeding programs, rescue coordination, digital fundraising, and partnerships with local shelters, PureBowl works to improve the lives of stray animals in local communities.</p><div className="founder"><span>Founder &amp; President</span><p>The person who established and leads PureBowl, coordinating volunteers, fundraising, feeding operations, rescues, and partnerships.</p></div></div></div></section>

      <section id="impact" className="section impact reveal"><SectionLabel>02 / Impact</SectionLabel><h2>Impact, measured.</h2><div className="stats">{[['18','Volunteers'],['$6.5K+','Raised through digital fundraisers'],['2,400+','Stray animals fed'],['38','Rescues coordinated']].map(([number,label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div><p className="statement">Every number represents a volunteer who showed up, a donor who contributed, or an animal that received help.</p></section>

      <section id="initiatives" className="section reveal"><SectionLabel>03 / Initiatives</SectionLabel><h2>What we do</h2><div className="initiative-grid">{initiatives.map(({icon: Icon,title,copy}) => <article className="initiative" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section id="rescues" className="section rescue-section reveal"><SectionLabel>04 / Rescues</SectionLabel><div className="split heading-split"><h2>38 rescues.<br />38 stories.</h2><p className="lead">A growing archive of rescue documentation, ready to be filled with the real stories of animals and people PureBowl has supported.</p></div><div className="rescue-grid">{[1,2,3,4,5,6].map((n) => <article className="rescue-card" key={n}><div className="placeholder"><PawPrint aria-hidden="true" /></div><div className="rescue-meta"><span>Rescue #{String(n).padStart(2,'0')}</span><small>Documentation coming soon</small></div></article>)}</div></section>

      <section id="volunteers" className="section reveal"><SectionLabel>05 / Volunteers</SectionLabel><div className="split heading-split"><h2>18 people.<br />One purpose.</h2><p className="lead">PureBowl&apos;s work is powered by a team of 18 volunteers who contribute across feeding operations, rescue coordination, fundraising, communications, and community support.</p></div><div className="people-grid">{Array.from({length:18},(_,i) => <div className="person" key={i}>{String(i+1).padStart(2,'0')}</div>)}</div></section>

      <section className="fundraising reveal"><div><SectionLabel>06 / Fundraising</SectionLabel><h2>$6,500+ raised.<br />Every contribution had a purpose.</h2><p>Through digital fundraising campaigns, PureBowl has raised more than $6,500 to support feeding initiatives and animal rescue efforts.</p></div><div className="fund-number"><strong>$6,500+</strong><span>Raised through digital fundraising</span><a href="#contact">Support the mission <ArrowUpRight /></a></div></section>

      <section className="section partnerships reveal"><SectionLabel>07 / Partnerships</SectionLabel><div className="split"><h2>Stronger together.</h2><div><p className="lead">Rescue work does not end when an animal is found.</p><p>PureBowl works alongside local shelters and animal welfare organizations to help connect rescued animals with appropriate care and support.</p><div className="partner-placeholder"><ShieldCheck aria-hidden="true" /><span>Partner organizations<br /><small>Verified partners coming soon</small></span></div></div></div></section>

      <section className="trust reveal"><SectionLabel>08 / Transparency</SectionLabel><h2>Built on trust.</h2><div className="trust-grid">{[['Volunteer-led','Operations are organized through a volunteer network.'],['Community-powered','Fundraising and support come from digital campaigns and community participation.'],['Impact-focused','Resources are directed toward feeding and rescue efforts.']].map(([title,copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

      <section id="contact" className="section contact reveal"><SectionLabel>09 / Contact</SectionLabel><div className="split"><div><h2>Get involved.</h2><p className="lead">Whether you want to volunteer, support a fundraiser, collaborate on a rescue, or learn more about PureBowl, we&apos;d love to hear from you.</p><div className="contact-links"><a href="#contact">Volunteer <ArrowUpRight /></a><a href="#contact">Partner <ArrowUpRight /></a><a href="#contact">Support <ArrowUpRight /></a></div></div><form onSubmit={submit}><label>Name<input required name="name" /></label><label>Email<input required type="email" name="email" /></label><label>Reason for contacting<select required name="reason" defaultValue=""><option value="" disabled>Select one</option><option>Volunteer</option><option>Partner</option><option>Support</option><option>Learn more</option></select></label><label>Message<textarea required name="message" rows={4} /></label><button type="submit">{sent ? 'Message ready to send' : 'Send message'} <ArrowUpRight /></button>{sent && <p className="form-note" role="status">Thanks — your message has been prepared. Connect a contact destination to enable delivery.</p>}</form></div></section>

      <footer><span className="wordmark">PureBowl</span><nav>{nav.slice(0,4).map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><span>© 2026 PureBowl. All rights reserved.</span><span>Feeding. Rescuing. Protecting.</span></footer>
    </main>
  )
}
