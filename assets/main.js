/* =========================================================
   Noor Technolab — shared header, footer & interactions
   Edit SITE below to change contact details on every page.
   ========================================================= */
const SITE = {
  name: 'Noor Technolab',
  tagline: 'Innovation in Every Line',
  email: 'info@noortechnolab.online',
  phones: ['+91 91063 56449', '+91 79843 42874'],
  whatsapp: '919106356449',
  address: 'Anand, Gujarat, India',
  locations: ['India', 'Canada', 'London'],
  social: { linkedin: '#', instagram: '#', facebook: '#', x: '#', youtube: '#' }
};

const SERVICES = [
  ['ai', 'AI Development', 'Smart AI solutions that automate and scale.'],
  ['web', 'Web Development', 'Fast, secure websites and web apps.'],
  ['mobile', 'Mobile App Development', 'Android & iOS apps users love.'],
  ['uiux', 'UI/UX Design', 'Intuitive interfaces built around users.'],
  ['marketing', 'Digital Marketing', 'SEO, social media and ads that grow sales.'],
  ['custom', 'Custom Software', 'Software shaped around your workflow.']
];
const INDUSTRIES = [
  ['logistics', 'Logistics & Transportation', 'Fleet tracking, routing and supply chain apps.'],
  ['healthcare', 'Healthcare', 'Patient portals, telemedicine and health apps.'],
  ['education', 'Education', 'E-learning platforms and student portals.'],
  ['finance', 'Finance & Insurance', 'FinTech, banking and insurance solutions.'],
  ['retail', 'Retail & eCommerce', 'Online stores, POS and inventory systems.'],
  ['fitness', 'Fitness & Wellness', 'Workout, gym and wellness tracking apps.'],
  ['restaurant', 'Restaurant', 'Ordering, booking and delivery apps.'],
  ['media', 'Media & Entertainment', 'Streaming and content platforms.'],
  ['social', 'Social Networking', 'Community, chat and social feed apps.'],
  ['charity', 'Charity & Non-Profit', 'Donation and volunteer platforms.'],
  ['realestate', 'Real Estate', 'Property listings, CRM and virtual tours.'],
  ['travel', 'Travel & Hospitality', 'Booking engines and hotel systems.'],
  ['manufacturing', 'Manufacturing', 'ERP, production and IoT monitoring.'],
  ['oilgas', 'Oil, Gas & Mining', 'Asset tracking and remote monitoring.']
];

const ICONS = {
  ai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/><circle cx="12" cy="12" r="2"/></svg>',
  web:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/></svg>',
  mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg>',
  uiux:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l9 9-9 9-9-9z"/><circle cx="12" cy="12" r="2.5"/></svg>',
  marketing:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1z"/><path d="M7 15l1.5 5h2.5L9.8 15.8M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
  custom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
  about:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/></svg>',
  career:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></svg>',
  case:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M7 13l3-3 3 3 4-4"/></svg>',
  product:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
  ind:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21V9l6 4V9l6 4V5l6 4v12z"/></svg>',
  /* industry icons — one per industry */
  logistics:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M2 6h11v10H2zM13 9h4.5l3.5 3.5V16h-8z"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
  healthcare:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 20.5S3.5 15.5 3.5 9.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8.5 2.2c0 6.3-8.5 11.3-8.5 11.3z"/><path d="M7 12h2.5l1.5-2.5 2 5 1.5-2.5H17" stroke-linecap="round"/></svg>',
  education:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6" stroke-linecap="round"/></svg>',
  finance:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3l8 3v5.5c0 5-3.5 8.5-8 9.5-4.5-1-8-4.5-8-9.5V6z"/><path d="M14.5 9.5c-.5-1-1.5-1.4-2.5-1.4-1.4 0-2.4.8-2.4 1.9 0 2.6 5 1.4 5 4 0 1.1-1.1 1.9-2.6 1.9-1.1 0-2.1-.5-2.6-1.4M12 7v1M12 16v1" stroke-linecap="round"/></svg>',
  retail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 8h14l-1.2 12.5H6.2z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10" stroke-linecap="round"/></svg>',
  fitness:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/></svg>',
  restaurant:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v18M4.5 3v5a2.5 2.5 0 0 0 5 0V3M16.5 21V3c-2.2 1-3.5 3.5-3.5 7v3h3.5"/></svg>',
  media:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="13" rx="2"/><path d="M10 8.8v5.4l4.5-2.7z"/><path d="M8 21h8" stroke-linecap="round"/></svg>',
  social:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="5" r="2.3"/><circle cx="5" cy="18" r="2.3"/><circle cx="19" cy="18" r="2.3"/><path d="M10.8 7 6.2 16M13.2 7l4.6 9M7.3 18h9.4"/></svg>',
  charity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11.5S7.5 8.8 7.5 5.9A2.4 2.4 0 0 1 12 4.7a2.4 2.4 0 0 1 4.5 1.2c0 2.9-4.5 5.6-4.5 5.6z"/><path d="M2.5 14.5h3l3.5-1.2h4a1.5 1.5 0 0 1 0 3H10m3.5 0 5-2.3a1.6 1.6 0 0 1 1.5 2.7l-6 4-6 .8-2.5-1.5h-3"/></svg>',
  realestate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v12h14V9"/><path d="M10 21v-6h4v6"/></svg>',
  travel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M21 15.5v-2l-8-5V4a1.5 1.5 0 0 0-3 0v4.5l-8 5v2l8-2.5V18l-2.5 1.8V21l4-1 4 1v-1.2L13 18v-5z"/></svg>',
  manufacturing:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 21V10l5 3v-3l5 3v-3l5 3V4h3v17z"/><path d="M7 17h2M12 17h2" stroke-linecap="round"/></svg>',
  oilgas:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3s5.5 6.2 5.5 10.2a5.5 5.5 0 0 1-11 0C6.5 9.2 12 3 12 3z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" stroke-linecap="round"/></svg>'
};

const LOGO_SVG = `<svg class="logo-mark" viewBox="0 0 44 44" fill="none" aria-hidden="true">
  <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00b5ff"/><stop offset="1" stop-color="#3cff8a"/></linearGradient></defs>
  <path class="glow" d="M22 3l16.5 9.5v19L22 41 5.5 31.5v-19z" fill="url(#lg)" opacity=".0"/>
  <path class="hex" d="M22 3l16.5 9.5v19L22 41 5.5 31.5v-19z" stroke="url(#lg)" stroke-width="2.6" stroke-linejoin="round"/>
  <path class="inner" d="M15 29V15l14 14V15" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const logoHTML = () => `<a href="index.html" class="logo" aria-label="${SITE.name} home">${LOGO_SVG}<span class="logo-text"><b>${SITE.name}</b><small>${SITE.tagline}</small></span></a>`;

const ddItem = (href, icon, title, desc) =>
  `<a href="${href}"><span class="di">${ICONS[icon] || ICONS.ind}</span><span><span class="dt">${title}</span>${desc ? `<span class="dd">${desc}</span>` : ''}</span></a>`;

function renderHeader() {
  const page = document.body.dataset.page || '';
  const act = p => (p === page ? ' active' : '');
  const svcLinks = SERVICES.map(s => ddItem(`services.html#${s[0]}`, s[0], s[1], s[2])).join('');
  const indLinks = INDUSTRIES.map(i => ddItem(`industries.html#${i[0]}`, i[0], i[1], i[2])).join('');
  const header = `
  <header class="site-header" id="hdr">
    <div class="bar">
      ${logoHTML()}
      <nav class="main-nav" aria-label="Main">
        <div class="nav-item${act('about')}"><a href="about.html">About <i class="chev"></i></a>
          <div class="dropdown">${ddItem('about.html','about','About Us','Our story, mission and the team behind ' + SITE.name + '.')}${ddItem('careers.html','career','Careers','Explore open roles and grow your career with us.')}</div></div>
        <div class="nav-item${act('services')}"><a href="services.html">Services <i class="chev"></i></a>
          <div class="dropdown wide">${svcLinks}</div></div>
        <div class="nav-item${act('work')}"><a href="work.html">Work <i class="chev"></i></a>
          <div class="dropdown">${ddItem('work.html','case','What We Build','Websites, apps, AI and marketing solutions.')}${ddItem('work.html#products','product','Products','Our own ready-to-use tools — coming soon.')}</div></div>
        <div class="nav-item${act('industries')}"><a href="industries.html">Industries <i class="chev"></i></a>
          <div class="dropdown wide">${indLinks}</div></div>
      </nav>
      <div class="nav-actions">
        <a href="contact.html#book" class="btn-outline">Book a Call</a>
        <a href="contact.html" class="btn plain">Contact</a>
      </div>
      <button class="burger" id="openMenu" aria-label="Open menu"><span></span><span></span><span></span></button>
    </div>
  </header>
  <nav class="m-menu" id="mMenu" aria-label="Mobile">
    <button class="close" id="closeMenu" aria-label="Close menu">&times;</button>
    <a href="index.html">Home</a>
    <details><summary>About</summary><a href="about.html">About Us</a><a href="careers.html">Careers</a></details>
    <details><summary>Services</summary><a href="services.html">All Services</a>${SERVICES.map(s => `<a href="services.html#${s[0]}"><span class="mi">${ICONS[s[0]]}</span>${s[1]}</a>`).join('')}</details>
    <details><summary>Work</summary><a href="work.html">What We Build</a><a href="work.html#products">Products</a></details>
    <details><summary>Industries</summary>${INDUSTRIES.map(i => `<a href="industries.html#${i[0]}"><span class="mi">${ICONS[i[0]]}</span>${i[1]}</a>`).join('')}</details>
    <div class="m-cta"><a href="contact.html#book" class="btn-outline">Book a Call</a><a href="contact.html" class="btn plain">Contact</a></div>
  </nav>`;
  document.getElementById('site-header').outerHTML = header;
}

const SOCIAL_SVG = {
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/></svg>',
  facebook:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.7-4.5 4.5V11H7v4h2.5v7h4v-7H16l1-4h-3.5V8.8c0-.5.3-.8.5-.8z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.8 3h3.3l-7.2 8.2L22.4 21h-6.6l-5.2-6.8L4.6 21H1.3l7.7-8.8L.9 3h6.8l4.7 6.2zm-1.2 16h1.8L6.9 4.9H5z"/></svg>',
  youtube:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15V9l5.7 3z"/></svg>'
};

function renderFooter() {
  const year = new Date().getFullYear();
  const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="f-grid">
        <div class="f-brand">${logoHTML()}<h3>Building the Digital Future of Growing Businesses</h3><a href="contact.html" class="btn">Let's Talk <span class="ic">&#8599;</span></a></div>
        <div class="links"><h5>Company</h5><a href="about.html">About</a><a href="services.html">Services</a><a href="work.html">What We Build</a><a href="work.html#products">Products</a><a href="industries.html">Industries</a><a href="careers.html">Careers</a><a href="contact.html#book">Book a Call</a></div>
        <div class="links"><h5>Services</h5>${SERVICES.map(s => `<a href="services.html#${s[0]}">${s[1]}</a>`).join('')}</div>
        <div class="links"><h5>Industries</h5><div class="f-ind">${INDUSTRIES.map(i => `<a href="industries.html#${i[0]}">${i[1]}</a>`).join('')}</div></div>
      </div>
      <div class="f-mid">
        <div class="f-badges">
          <div><b>Free <i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h16v11H9l-5 4z"/></svg></i></b><small>Consultation</small></div>
          <div><b>24h <i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v4.6l3.4 2-1 1.7L11 12.7V7z"/></svg></i></b><small>Response</small></div>
          <div><b>NDA <i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 3.4v6.2c0 5.4-3.8 9.4-9 10.4-5.2-1-9-5-9-10.4V5.4zm-1.2 13.6 6-6-1.4-1.4-4.6 4.6-2.2-2.2-1.4 1.4z"/></svg></i></b><small>Protected</small></div>
        </div>
        <div class="f-contact">
          <a class="f-mail" href="mailto:${SITE.email}">${SITE.email}</a>
          <div class="f-phones">${SITE.phones.map(p => `<a href="tel:${p.replace(/\s/g, '')}">${p}</a>`).join('<span>|</span>')}</div>
          <div class="social">${Object.entries(SITE.social).map(([k, v]) => `<a href="${v}" aria-label="${k}" target="_blank" rel="noopener">${SOCIAL_SVG[k]}</a>`).join('')}</div>
        </div>
      </div>
      <div class="f-bot">
        <span class="f-loc">${SITE.locations.join('<i>·</i>')}</span>
        <nav><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms &amp; Conditions</a></nav>
        <span>&copy; ${year} ${SITE.name}. All rights reserved.</span>
      </div>
    </div>
  </footer>
  <a class="wa" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.2-.7-2.7-1.1-4.4-3.8-4.5-4-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.4z"/></svg>
    <span>Let's Chat</span>
  </a>`;
  document.getElementById('site-footer').outerHTML = footer;
}

/* ---------- interactions ---------- */
function initInteractions() {
  // header: shrink to floating glass bar + logo collapses to icon
  const hdr = document.getElementById('hdr');
  const onScroll = () => hdr.classList.toggle('scrolled', scrollY > 60);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // mobile menu
  const mm = document.getElementById('mMenu');
  document.getElementById('openMenu').onclick = () => mm.classList.add('open');
  document.getElementById('closeMenu').onclick = () => mm.classList.remove('open');

  // fill [data-icon] placeholders
  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = ICONS[el.dataset.icon] || ''; });

  // hero headline: words blur in one by one
  const h1 = document.querySelector('.hero h1');
  if (h1) {
    let i = 0;
    h1.querySelectorAll('.split').forEach(node => {
      node.innerHTML = node.textContent.trim().split(/\s+/).map(w => `<span class="w" style="animation-delay:${(i++) * 0.08}s">${w}</span>`).join(' ');
    });
  }

  // rotating gradient word
  const rot = document.getElementById('rot');
  if (rot) {
    const words = rot.dataset.words.split('|'); let wi = 0;
    setInterval(() => {
      rot.classList.add('out');
      setTimeout(() => { wi = (wi + 1) % words.length; rot.textContent = words[wi]; rot.classList.remove('out'); }, 400);
    }, 2800);
  }

  // statement words light up while scrolling
  const stmt = document.getElementById('stmt');
  if (stmt) {
    stmt.innerHTML = stmt.textContent.trim().split(/\s+/).map(w => `<span>${w}</span>`).join(' ');
    const spans = stmt.querySelectorAll('span');
    const fill = () => {
      const r = stmt.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.8 - r.top) / (r.height + innerHeight * 0.3)));
      const n = Math.round(p * spans.length);
      spans.forEach((s, i) => s.classList.toggle('on', i < n));
    };
    addEventListener('scroll', fill, { passive: true }); fill();
  }

  // reveal on scroll + number counters
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll('[data-count]').forEach(el => {
      const t = +el.dataset.count, suf = el.dataset.suffix ?? '+';
      let c = 0; const step = Math.max(1, Math.ceil(t / 60));
      const id = setInterval(() => { c = Math.min(t, c + step); el.textContent = c + (c === t ? suf : ''); if (c === t) clearInterval(id); }, 25);
    });
    io.unobserve(e.target);
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // carousels: [data-carousel] wraps .track and buttons [data-dir]
  document.querySelectorAll('[data-carousel]').forEach(wrap => {
    const track = wrap.querySelector('.track');
    const dots = wrap.querySelector('.dots');
    const step = () => { const c = track.children[0]; return c ? c.getBoundingClientRect().width + 24 : 300; };
    wrap.querySelectorAll('[data-dir]').forEach(b => b.onclick = () => {
      const dir = +b.dataset.dir;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;
      if (dir > 0 && atEnd) track.scrollTo({ left: 0 }); else if (dir < 0 && track.scrollLeft <= 0) track.scrollTo({ left: track.scrollWidth }); else track.scrollBy({ left: dir * step() });
    });
    if (dots) {
      dots.innerHTML = [...track.children].map(() => '<span></span>').join('');
      const upd = () => { const i = Math.round(track.scrollLeft / step()); dots.querySelectorAll('span').forEach((d, j) => d.classList.toggle('on', j === i)); };
      track.addEventListener('scroll', upd, { passive: true }); upd();
    }
    if (wrap.dataset.carousel === 'auto') {
      let t = setInterval(() => wrap.querySelector('[data-dir="1"]').click(), 5000);
      wrap.addEventListener('mouseenter', () => clearInterval(t));
      wrap.addEventListener('mouseleave', () => { t = setInterval(() => wrap.querySelector('[data-dir="1"]').click(), 5000); });
    }
  });

  // FAQ show more
  document.querySelectorAll('[data-faq-more]').forEach(b => b.onclick = () => {
    const f = document.getElementById(b.dataset.faqMore);
    f.classList.toggle('show-all');
    b.textContent = f.classList.contains('show-all') ? 'Show Less FAQs' : 'Show More FAQs';
  });

  // portfolio filter
  document.querySelectorAll('.filters button').forEach(b => b.onclick = () => {
    document.querySelectorAll('.filters button').forEach(x => x.classList.toggle('on', x === b));
    const f = b.dataset.filter;
    document.querySelectorAll('.work-grid .pcard').forEach(c => c.classList.toggle('hide', f !== 'all' && !c.dataset.cat.includes(f)));
  });

  // contact form → opens the visitor's mail app with the details filled in
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const body = [...d.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('New project enquiry from ' + (d.get('Name') || 'website'))}&body=${encodeURIComponent(body)}`;
    form.classList.add('sent');
  });
}

/* technology pills (two scrolling rows) — icons from the free Devicon set */
const DEV = n => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${n}.svg`;
const TECH1 = [['React','react/react-original'],['Next.js','nextjs/nextjs-original'],['Angular','angularjs/angularjs-original'],['Vue.js','vuejs/vuejs-original'],['Node.js','nodejs/nodejs-original'],['TypeScript','typescript/typescript-original'],['Python','python/python-original'],['Django','django/django-plain'],['Laravel','laravel/laravel-original'],['PHP','php/php-original'],['.NET','dot-net/dot-net-original'],['Java','java/java-original'],['TensorFlow','tensorflow/tensorflow-original'],['PyTorch','pytorch/pytorch-original']];
const TECH2 = [['Android','android/android-original'],['iOS','apple/apple-original'],['Flutter','flutter/flutter-original'],['React Native','react/react-original'],['Swift','swift/swift-original'],['Kotlin','kotlin/kotlin-original'],['Dart','dart/dart-original'],['Firebase','firebase/firebase-original'],['AWS','amazonwebservices/amazonwebservices-original-wordmark'],['Azure','azure/azure-original'],['Google Cloud','googlecloud/googlecloud-original'],['MongoDB','mongodb/mongodb-original'],['PostgreSQL','postgresql/postgresql-original'],['MySQL','mysql/mysql-original'],['Docker','docker/docker-original'],['Figma','figma/figma-original']];
function renderTech() {
  const pill = ([name, icon]) => `<span class="tech"><img src="${DEV(icon)}" alt="" loading="lazy" onerror="this.remove()">${name}</span>`;
  const fill = (id, list) => { const el = document.getElementById(id); if (el) el.innerHTML = list.map(pill).join('').repeat(2); };
  fill('techRow1', TECH1); fill('techRow2', TECH2);
}

renderHeader();
renderFooter();
renderTech();
initInteractions();
