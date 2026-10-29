// ---------- Contenido ----------
// Para añadir una captura: guarda la imagen en assets/shots/ con el nombre indicado en `shots`.
// Si el archivo no existe, la web muestra un marco vacío en su lugar.

const STATUS = {
  sold:       { es: 'Vendido',          en: 'Acquired' },
  production: { es: 'En producción',    en: 'In production' },
  launched:   { es: 'Lanzado',          en: 'Launched' },
  personal:   { es: 'Uso personal',     en: 'Personal use' },
  client:     { es: 'A medida',         en: 'Custom build' },
  internal:   { es: 'Uso interno',      en: 'Internal tool' },
  closed:     { es: 'Cerrado',          en: 'Shut down' },
  idea:       { es: 'No lanzado',       en: 'Never launched' }
};

const PROJECTS = [
  {
    id: 'watchlink', name: 'WatchLink.pro', url: 'https://watchlink.pro', status: 'launched', when: '2026',
    stack: ['Claude Code', 'Next.js', 'Supabase', 'Vercel', 'Cloudflare'],
    short: { es: 'Link en la bio para dealers de relojes', en: 'Link-in-bio for watch dealers' },
    tag:   { es: 'Construido al 100 % con Claude Code', en: 'Built 100% with Claude Code' },
    body: {
      es: 'Un proyecto personal para poner a prueba el flujo de trabajo con Claude a la hora de construir un producto entero. WatchLink da a cada dealer una página pública con su stock en vivo, consultas por WhatsApp con el reloj ya indicado, gestión interna del inventario con el beneficio de cada venta calculado solo, y una red privada para ver el stock de otros dealers a precio de dealer.',
      en: 'A personal project to put Claude’s workflow to the test on a whole product. WatchLink gives each dealer a public page with live stock, WhatsApp inquiries that already name the watch, internal inventory with profit per sale worked out automatically, and a private network to browse other dealers’ stock at trade price.'
    },
    points: {
      es: ['Definí todas las features al principio y las construí una a una, con una spec por feature, probando cada una antes de pasar a la siguiente.',
           'Unos 6 módulos principales y alrededor de 20 despliegues.',
           'Lo que aprendí: pedirle una app entera a la IA genera confusión; darle una feature cada vez, con solo el contexto que necesita, mejora mucho el resultado. Las incomodidades de uso no las detecta: el criterio de producto sigue siendo mío.'],
      en: ['I defined every feature up front and built them one at a time, with a spec per feature, testing each before moving on.',
           'Around 6 core modules and roughly 20 deployments.',
           'What I learned: asking AI for a whole app creates confusion; one feature at a time, with only the context it needs, works far better. It doesn’t notice when something is awkward to use, so product judgement is still my job.']
    },
    shots: [
      { src: 'assets/shots/watchlink-1.webp', es: 'Landing de WatchLink', en: 'WatchLink landing page' },
      { src: 'assets/shots/watchlink-2.webp', es: 'Cómo funciona y KPIs del dealer', en: 'How it works and dealer KPIs' }
    ]
  },
  {
    id: 'acarfleet', name: 'AcarFleet.io', url: 'https://acarfleet.io', status: 'production', when: '2024 –',
    stack: ['Bubble.io', 'API de ChatGPT'],
    short: { es: 'CRM de gestión de flotas', en: 'Fleet management CRM' },
    tag:   { es: '53 empresas · ~1.500 vehículos', en: '53 companies · ~1,500 vehicles' },
    body: {
      es: 'SaaS de gestión de flotas construido para Acar Gestión de Flota SL. Yo definí y construí el software y la empresa lo explota; a cambio me llevo un canon. Lo diseñé tras sesiones de discovery sobre su operativa diaria real, en lugar de copiar el CRM antiguo que usaban.',
      en: 'Fleet management SaaS built for Acar Gestión de Flota SL. I defined and built the software; the company runs it and pays me a licence fee. I designed it from discovery sessions on their real day-to-day operations instead of copying the outdated CRM they had.'
    },
    points: {
      es: ['Vehículos, conductores, gastos, vía-T, ITV, seguros, repostajes, incidencias, multas, asignaciones, impuestos, delegaciones y talleres, con alertas.',
           'Roles de admin, manager y solo lectura, y la opción de que cada empresa se autogestione.',
           'IA en producción: un chatbot conectado a ChatGPT para consultar datos sin entrar en la app, y normalización de datos que detecta discrepancias.',
           'Tras el lanzamiento rehice cómo se recoge la información de los conductores en las incidencias, al ver que no la usaban como esperaba.'],
      en: ['Vehicles, drivers, expenses, tolls, inspections, insurance, fuel, incidents, fines, assignments, taxes, branches and workshops, with alerts.',
           'Admin, manager and read-only roles, plus self-service for each company.',
           'AI in production: a chatbot connected to ChatGPT to query data without opening the app, and data normalisation that flags discrepancies.',
           'After launch I reworked how driver information is collected for incidents, once I saw they weren’t using it as expected.']
    },
    shots: [
      { src: 'assets/shots/acarfleet-1.webp', es: 'Panel de empresas (nombres y datos ficticios)', en: 'Companies dashboard (fictional names and data)' }
    ]
  },
  {
    id: 'clickbook', name: 'Clickbook.io', status: 'sold', when: '2023 – 2024',
    stack: ['Bubble.io'],
    short: { es: 'Reservas para barberías y peluquerías', en: 'Bookings for barbers and salons' },
    tag:   { es: 'Vendido tres meses después de lanzarlo', en: 'Sold three months after launch' },
    body: {
      es: 'Mi primer producto. Un SaaS de reservas para negocios que trabajan con cita: barberías, peluquerías, estudios. Lo hice todo yo solo, del producto y la base de datos al go-to-market, y tres meses después del lanzamiento lo compró Retail Cloud Inc. (EE.UU.) a través de Acquire.com. La interfaz no es lo más bonito que he hecho; es de cuando estaba aprendiendo.',
      en: 'My first product. A booking SaaS for appointment-based businesses: barbers, salons, studios. I did everything solo, from product and database to go-to-market, and three months after launch it was bought by Retail Cloud Inc. (US) through Acquire.com. The interface isn’t the prettiest thing I’ve made; it’s from when I was learning.'
    },
    points: {
      es: ['Creación de servicios y alta de trabajadores.',
           'Gestión del calendario de cada profesional.',
           'Cobro de fianza al reservar, para reducir las ausencias.',
           'Ficha de clientes y sistema de recompensas.',
           'Unos 20 negocios captados por WhatsApp, Instagram y TikTok.'],
      en: ['Services and staff set-up.',
           'Calendar management per professional.',
           'Deposit charged at booking to cut no-shows.',
           'Client records and a rewards system.',
           'Around 20 businesses signed up through WhatsApp, Instagram and TikTok.']
    },
    shots: [
      { src: 'assets/shots/clickbook-1.webp', es: 'Landing de Clickbook', en: 'Clickbook landing page' }
    ]
  },
  {
    id: 'patrimonio', name: { es: 'Mi patrimonio', en: 'Net worth tracker' }, status: 'personal', when: '2026',
    stack: ['Google Sheets', 'Apps Script', 'IA'],
    short: { es: 'Finanzas personales sobre Google Sheets', en: 'Personal finances on Google Sheets' },
    tag:   { es: 'Hecha con IA', en: 'Built with AI' },
    body: {
      es: 'Una mini app para controlar mis finanzas personales: ingresos, gastos e inversiones, todo en un mismo sitio. Es una web app que lee y escribe en una hoja de Google Sheets; la construí con IA, sin servidor ni base de datos aparte, porque la hoja hace de base de datos. Las cifras de las capturas son inventadas.',
      en: 'A mini app to keep track of my personal finances: income, spending and investments in one place. It’s a web app that reads and writes to a Google Sheet; I built it with AI, with no server or separate database, because the sheet is the database. The figures in the screenshots are made up.'
    },
    points: {
      es: ['La hoja de cálculo hace de backend y la web app de interfaz.',
           'Ejemplo de cómo resolver un problema propio en una tarde con IA, en lugar de pagar otra suscripción.'],
      en: ['The spreadsheet is the backend; the web app is the interface.',
           'An example of solving my own problem in an afternoon with AI instead of paying for another subscription.']
    },
    shots: [
      { src: 'assets/shots/patrimonio-1.webp', es: 'Vista general (datos ficticios)', en: 'Overview (fictional data)' }
    ]
  },
  {
    id: 'naragram', name: 'Naragram', status: 'internal', when: '',
    stack: ['IA'],
    short: { es: 'De la llamada a la lista de tareas', en: 'From meeting call to task list' },
    tag:   { es: 'Para project managers', en: 'For project managers' },
    body: {
      es: 'Una mini app para project managers: grabas tu voz, pegas un enlace de Loom o la transcripción de una llamada de Google Meet, y la IA la convierte en una lista de tareas en bullet points lista para mandar al gestor de proyectos del equipo. La usamos internamente; no llegamos a lanzarla al público.',
      en: 'A mini app for project managers: record your voice, paste a Loom link or a Google Meet transcript, and AI turns it into a bullet-point task list ready to send to the team’s project tool. We used it internally and never released it publicly.'
    },
    points: {
      es: ['Entrada: una nota de voz, un vídeo de Loom o la transcripción de una reunión.', 'Salida: tareas accionables, enviadas a Trello; Jira y ClickUp estaban en la hoja de ruta.', 'Espacios de trabajo compartidos para todo el equipo.'],
      en: ['Input: a voice note, a Loom video or a meeting transcript.', 'Output: actionable tasks sent to Trello, with Jira and ClickUp on the roadmap.', 'Shared workspaces for the whole team.']
    },
    shots: [
      { src: 'assets/shots/naragram-1.webp', es: 'Landing de Naragram', en: 'Naragram landing page' },
      { src: 'assets/shots/naragram-2.webp', es: 'Dentro de la app: grabar o pegar un Loom', en: 'Inside the app: record or paste a Loom link' }
    ]
  },
  {
    id: 'farmacia', name: { es: 'Turnos de farmacia', en: 'Pharmacy rota' }, status: 'client', when: '',
    stack: ['Lovable'],
    short: { es: 'Horarios y vacaciones de una farmacia', en: 'Shifts and holidays for a pharmacy' },
    tag:   { es: 'Proyecto freelance', en: 'Freelance project' },
    body: {
      es: 'Una herramienta a medida para el calendario de los empleados de una farmacia, porque ninguna del mercado cubría sus turnos alternos, semanas de descanso y cómputo de horas.',
      en: 'A custom tool for a pharmacy’s staff calendar, because nothing on the market handled their alternating shifts, rest weeks and hour tracking.'
    },
    points: {
      es: ['Automatiza las rotaciones semanales.', 'Seguimiento de vacaciones y horas de cada empleado.'],
      en: ['Automates the weekly rotations.', 'Tracks holidays and hours per employee.']
    },
    shots: [
      { src: 'assets/shots/farmacia-1.webp', es: 'Calendario de turnos', en: 'Shift calendar' }
    ]
  },
  {
    id: 'chronoesfera', name: 'ChronoEsfera', status: 'closed', when: '2024',
    stack: ['Bubble.io'],
    short: { es: 'Marketplace de relojes de lujo', en: 'Luxury watch marketplace' },
    tag:   { es: 'Cerrado por diferencias con un socio', en: 'Closed after a disagreement with a partner' },
    body: {
      es: 'Marketplace entre particulares para comprar y vender relojes de lujo, diseñado y desarrollado desde cero. Lo cerramos por discrepancias con un socio.',
      en: 'A peer-to-peer marketplace for buying and selling luxury watches, designed and built from scratch. We shut it down after a disagreement with a partner.'
    },
    points: {
      es: ['Autenticación, listados dinámicos y mensajería segura entre comprador y vendedor.', 'Pasarelas de pago integradas.'],
      en: ['Authentication, dynamic listings and secure buyer–seller messaging.', 'Integrated payment gateways.']
    },
    shots: [
      { src: 'assets/shots/chronoesfera-1.webp', es: 'ChronoEsfera', en: 'ChronoEsfera' }
    ]
  },
  {
    id: 'tutores', name: { es: 'Tutores con IA', en: 'AI tutors' }, status: 'idea', when: '2023',
    stack: [],
    short: { es: 'Un tutor online para cada niño', en: 'An online tutor for every child' },
    tag:   { es: 'Planificado con mi jefe en OneMint', en: 'Planned with my manager at OneMint' },
    body: {
      es: 'Con mi jefe en OneMint empezamos a planificar una app de tutores con IA para que los niños tuvieran en casa alguien que les explicara los conceptos de cada tema y les preparara ejercicios. La idea era que la IA solo usara como contexto el material de cada niño y su colegio, así que llegamos a hablar con alguna editorial sobre los derechos de uso de las versiones digitales de sus libros como base de conocimiento.',
      en: 'With my manager at OneMint I started planning an AI tutoring app so children could have someone at home to explain each topic and set exercises. The AI would only use each child’s own school material as context, so we talked to publishers about the rights to use digital editions of their textbooks as the knowledge base.'
    },
    points: {
      es: ['No llegó a formalizarse: los dos empezamos trabajos a tiempo completo que nos absorbían.',
           'Me quedo con el trabajo de discovery: el reto no era la IA, sino el contenido y sus derechos.'],
      en: ['It never got formalised: we both started demanding full-time jobs.',
           'What I keep is the discovery work: the hard part wasn’t the AI, it was the content and its rights.']
    },
    shots: []
  }
];

const UI = {
  es: {
    'nav.work': 'Productos', 'nav.path': 'Trayectoria', 'nav.contact': 'Contacto',
    'hero.role': 'Martín Souto Parga · Product Manager',
    'hero.title': 'Defino productos y luego los construyo.',
    'hero.lede': 'Trabajo en producto desde 2022. Esta es la lista de lo que he lanzado por mi cuenta: uno vendido a una empresa de EE.UU., otro en producción para una flota de 1.500 vehículos, otro construido entero con Claude Code, y alguno que se quedó por el camino.',
    'idx.title': 'Ocho productos, de la idea a la venta.', 'hero.cta1': 'Ver productos', 'hero.cta2': 'Contactar',
    'p.visit': 'Visitar', 'p.built': 'Herramientas', 'p.noshot': 'Captura pendiente', 'p.enlarge': 'Ampliar captura',
    'path.title': 'Dónde he trabajado',
    'path.chakor.role': 'Product Manager',
    'path.chakor.when': 'Ago 2024 – Oct 2026 · Ann Arbor, MI (remoto)',
    'path.chakor.body': 'Discovery de principio a fin con startups y empresas grandes: de la idea del cliente a especificaciones, flujos UX y blueprints de integración. Lideré el programa de plugins para Bubble.io, que pasó de 21 a más de 350 plugins en seis meses, y diseñé para Casting Source un sistema de puntuación de audiciones con IA.',
    'path.onemint.role': 'Product Manager y Account Management',
    'path.onemint.when': 'Ene 2022 – Sep 2023 · Seattle, WA (remoto)',
    'path.onemint.body': 'Plataforma Web3. Set-up y control de calidad de las colecciones NFT del programa Odyssey de Starbucks y de OKX, propuestas de producto para otras industrias y punto de contacto entre clientes y equipo interno.',
    'path.talk': 'En 2025 di una charla al profesorado del Colegio Compañía de María sobre cómo usar la IA en el aula y cómo gestionar su uso por parte del alumnado.',
    'contact.title': '¿Hablamos?',
    'contact.body': 'Busco equipos donde el Product Manager también se mancha las manos.',
    'foot': 'Hecho con Claude Code y publicado en Vercel.'
  },
  en: {
    'nav.work': 'Products', 'nav.path': 'Experience', 'nav.contact': 'Contact',
    'hero.role': 'Martín Souto Parga · Product Manager',
    'hero.title': 'I define products, then I build them.',
    'hero.lede': 'I’ve worked in product since 2022. This is what I’ve shipped on my own: one sold to a US company, one in production for a 1,500-vehicle fleet, one built entirely with Claude Code, and a few that didn’t make it.',
    'idx.title': 'Eight products, from idea to exit.', 'hero.cta1': 'See products', 'hero.cta2': 'Get in touch',
    'p.visit': 'Visit', 'p.built': 'Tools', 'p.noshot': 'Screenshot coming', 'p.enlarge': 'Enlarge screenshot',
    'path.title': 'Where I’ve worked',
    'path.chakor.role': 'Product Manager',
    'path.chakor.when': 'Aug 2024 – Oct 2026 · Ann Arbor, MI (remote)',
    'path.chakor.body': 'End-to-end discovery with startups and large companies: from the client’s idea to specs, UX flows and integration blueprints. I led the Bubble.io plugin programme, which grew from 21 to over 350 plugins in six months, and designed an AI audition-scoring system for Casting Source.',
    'path.onemint.role': 'Product Manager & Account Management',
    'path.onemint.when': 'Jan 2022 – Sep 2023 · Seattle, WA (remote)',
    'path.onemint.body': 'Web3 platform. Set-up and quality control of the NFT collections for Starbucks’ Odyssey programme and OKX, product proposals for other industries, and the main link between clients and the internal team.',
    'path.talk': 'In 2025 I gave a talk to teachers at Colegio Compañía de María on using AI in the classroom and handling students’ use of it.',
    'contact.title': 'Let’s talk',
    'contact.body': 'I’m looking for teams where the Product Manager also gets their hands dirty.',
    'foot': 'Built with Claude Code and deployed on Vercel.'
  }
};

// ---------- Render ----------
const $ = (s, el = document) => el.querySelector(s);
const t = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v)) ? v[lang] : v;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function render(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = UI[lang][el.dataset.i18n];
    if (v) el.textContent = v;
  });
  $('#lang').textContent = lang === 'es' ? 'EN' : 'ES';

  $('#index-list').innerHTML = PROJECTS.map(p => `
    <li><a href="#${p.id}">
      <span class="i-status s-${p.status}">${STATUS[p.status][lang]}</span>
      <span class="i-name">${esc(t(p.name, lang))}</span>
      <span class="i-what">${esc(t(p.short, lang))}</span>
    </a></li>`).join('');

  $('#projects').innerHTML = PROJECTS.map((p, n) => {
    const shot = s => `
      <figure class="shot">
        <button type="button" class="shot-btn" aria-label="${UI[lang]['p.enlarge']}: ${esc(s[lang])}">
          <img src="${s.src}" alt="${esc(s[lang])}" loading="lazy" onerror="this.closest('.shot').remove()">
        </button>
        <figcaption>${esc(s[lang])}</figcaption>
      </figure>`;
    const [main, ...rest] = p.shots;
    return `
    <article class="project ${n % 2 ? 'alt' : ''}" id="${p.id}">
      <div class="wrap">
        <header class="p-head">
          <p class="p-status s-${p.status}">${STATUS[p.status][lang]}${p.when ? ` · ${esc(p.when)}` : ''}</p>
          <h2>${esc(t(p.name, lang))}</h2>
          <p class="p-tag">${esc(p.tag[lang])}</p>
          ${p.url ? `<a class="link" href="${p.url}" target="_blank" rel="noopener">${UI[lang]['p.visit']} ${esc(p.url.replace('https://', ''))} ›</a>` : ''}
        </header>
        ${main ? `<div class="hero-shot">${shot(main)}</div>` : ''}
        ${rest.length ? `<div class="more-shots">${rest.map(shot).join('')}</div>` : ''}
        <div class="p-body">
          <p class="p-desc">${esc(p.body[lang])}</p>
          <div>
            <ul class="p-points">${p.points[lang].map(x => `<li>${esc(x)}</li>`).join('')}</ul>
            ${p.stack.length ? `<p class="stack">${UI[lang]['p.built']}: ${p.stack.map(esc).join(', ')}</p>` : ''}
          </div>
        </div>
      </div>
    </article>`;
  }).join('');
}

function initialLang() {
  try { const saved = localStorage.getItem('lang'); if (saved === 'es' || saved === 'en') return saved; } catch (e) {}
  return (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
}

let lang = initialLang();
render(lang);

$('#lang').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  try { localStorage.setItem('lang', lang); } catch (e) {}
  render(lang);
});

// Lightbox
const lb = $('#lightbox');
document.addEventListener('click', e => {
  const btn = e.target.closest('.shot-btn');
  if (!btn) return;
  const img = btn.querySelector('img');
  $('#lb-img').src = img.src; $('#lb-img').alt = img.alt;
  lb.showModal();
});
$('#lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
