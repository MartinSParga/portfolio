// ---------- Contenido ----------
// Para añadir una captura: guarda la imagen en assets/shots/ con el nombre indicado en `shots`.
// Si el archivo no existe, la captura no se muestra.

const STATUS = {
  sold:       { es: 'Vendido',          en: 'Acquired' },
  production: { es: 'En producción',    en: 'In production' },
  launched:   { es: 'Lanzado',          en: 'Launched' },
  personal:   { es: 'Uso personal',     en: 'Personal use' },
  client:     { es: 'A medida',         en: 'Custom build' },
  internal:   { es: 'Uso interno',      en: 'Internal tool' },
  closed:     { es: 'Cerrado',          en: 'Discontinued' },
  idea:       { es: 'No lanzado',       en: 'Not launched' }
};

const PROJECTS = [
  {
    id: 'watchlink', name: 'WatchLink.pro', url: 'https://watchlink.pro', status: 'launched', when: '2026',
    stack: ['Claude Code', 'Next.js', 'Supabase', 'Vercel', 'Cloudflare'],
    short: { es: 'Plataforma para comerciantes de relojes', en: 'Platform for watch dealers' },
    tag:   { es: 'Desarrollado íntegramente con Claude Code', en: 'Developed entirely with Claude Code' },
    body: {
      es: 'Proyecto propio concebido para validar un flujo de trabajo completo de desarrollo de producto con Claude. WatchLink ofrece a cada comerciante una página pública con su stock actualizado, consultas por WhatsApp con la referencia del reloj incluida, gestión interna del inventario con cálculo automático del margen de cada venta y una red privada para consultar el stock de otros comerciantes a precio profesional.',
      en: 'A personal project designed to validate an end-to-end product development workflow with Claude. WatchLink gives each dealer a public page with up-to-date stock, WhatsApp inquiries that include the watch reference, internal inventory management with automatic margin calculation for every sale, and a private network to browse other dealers’ stock at trade prices.'
    },
    points: {
      es: ['Definición inicial del alcance completo y desarrollo por funcionalidades, cada una con su propia especificación y validada antes de pasar a la siguiente.',
           'Seis módulos principales y alrededor de veinte despliegues.',
           'Conclusión principal: trabajar la IA por funcionalidades, aportando solo el contexto necesario, ofrece resultados mucho más fiables que solicitar la aplicación completa. La evaluación de la experiencia de uso sigue requiriendo criterio de producto.'],
      en: ['Full scope defined up front and built feature by feature, each with its own specification and validated before moving on.',
           'Six core modules and around twenty deployments.',
           'Key takeaway: working with AI one feature at a time, providing only the relevant context, produces far more reliable results than requesting the whole application. Assessing the user experience still requires product judgement.']
    },
    shots: [
      { src: 'assets/shots/watchlink-1.webp', es: 'Página principal de WatchLink', en: 'WatchLink home page' },
      { src: 'assets/shots/watchlink-2.webp', es: 'Funcionamiento e indicadores del comerciante', en: 'How it works and dealer metrics' }
    ]
  },
  {
    id: 'acarfleet', name: 'AcarFleet.io', url: 'https://acarfleet.io', status: 'production', when: '2024 –',
    stack: ['Bubble.io', 'API de ChatGPT'],
    short: { es: 'CRM de gestión de flotas', en: 'Fleet management CRM' },
    tag:   { es: '53 empresas · ~1.500 vehículos', en: '53 companies · ~1,500 vehicles' },
    body: {
      es: 'SaaS de gestión de flotas desarrollado para Acar Gestión de Flota SL, que explota el software bajo un acuerdo de licencia. Asumí la definición del producto y su desarrollo completo a partir de sesiones de discovery centradas en la operativa diaria de la empresa, en lugar de replicar el CRM que utilizaba anteriormente.',
      en: 'Fleet management SaaS developed for Acar Gestión de Flota SL, which operates the software under a licensing agreement. I was responsible for product definition and the full build, based on discovery sessions focused on the company’s day-to-day operations rather than replicating its previous CRM.'
    },
    points: {
      es: ['Módulos de vehículos, conductores, gastos, peajes, ITV, seguros, repostajes, incidencias, multas, asignaciones, impuestos, delegaciones y talleres, con sistema de alertas.',
           'Roles de administrador, gestor y solo lectura, con opción de autogestión para cada empresa cliente.',
           'IA en producción: asistente conectado a ChatGPT para consultar información sin acceder a la aplicación y normalización de datos con detección de discrepancias.',
           'Iteración posterior al lanzamiento: rediseño de la recogida de información de conductores en incidencias a partir del uso real.'],
      en: ['Modules for vehicles, drivers, expenses, tolls, inspections, insurance, fuel, incidents, fines, assignments, taxes, branches and workshops, with an alert system.',
           'Administrator, manager and read-only roles, with self-service for each client company.',
           'AI in production: an assistant connected to ChatGPT to query information without opening the application, and data normalisation that flags discrepancies.',
           'Post-launch iteration: redesigned how driver information is collected for incidents based on actual usage.']
    },
    shots: [
      { src: 'assets/shots/acarfleet-1.webp', es: 'Flota de una empresa cliente (datos ficticios)', en: 'A client company’s fleet (fictional data)' }
    ]
  },
  {
    id: 'clickbook', name: 'Clickbook.io', status: 'sold', when: '2023 – 2024',
    stack: ['Bubble.io'],
    short: { es: 'Reservas para barberías y peluquerías', en: 'Bookings for barbers and salons' },
    tag:   { es: 'Adquirido tres meses después de su lanzamiento', en: 'Acquired three months after launch' },
    body: {
      es: 'Mi primer producto: un SaaS de reservas para negocios que trabajan con cita previa, como barberías, peluquerías y estudios. Me encargué de todas las fases, desde la definición del producto y la base de datos hasta la estrategia de lanzamiento. Tres meses después del lanzamiento, Retail Cloud Inc. (EE.UU.) lo adquirió a través de Acquire.com. El diseño de la interfaz corresponde a una etapa temprana de mi trayectoria.',
      en: 'My first product: a booking SaaS for appointment-based businesses such as barbers, salons and studios. I handled every stage, from product definition and database design to the go-to-market strategy. Three months after launch, Retail Cloud Inc. (US) acquired it through Acquire.com. The interface design reflects an early stage of my career.'
    },
    points: {
      es: ['Configuración de servicios y gestión del equipo de profesionales.',
           'Calendario individual para cada profesional.',
           'Cobro de señal en la reserva para reducir las ausencias.',
           'Ficha de clientes y programa de fidelización.',
           'Captación de unos 20 negocios a través de WhatsApp, Instagram y TikTok.'],
      en: ['Service configuration and staff management.',
           'Individual calendar for each professional.',
           'Deposit charged at booking to reduce no-shows.',
           'Client records and a loyalty programme.',
           'Around 20 businesses acquired through WhatsApp, Instagram and TikTok.']
    },
    shots: [
      { src: 'assets/shots/clickbook-1.webp', es: 'Página principal de Clickbook', en: 'Clickbook home page' }
    ]
  },
  {
    id: 'patrimonio', name: { es: 'Mi patrimonio', en: 'Net worth tracker' }, status: 'personal', when: '2026',
    stack: ['Google Sheets', 'Apps Script', 'IA'],
    short: { es: 'Finanzas personales sobre Google Sheets', en: 'Personal finances on Google Sheets' },
    tag:   { es: 'Desarrollada con IA', en: 'Developed with AI' },
    body: {
      es: 'Aplicación de uso personal para el control de ingresos, gastos e inversiones. Se trata de una aplicación web que lee y escribe sobre una hoja de Google Sheets, desarrollada con IA y sin servidor ni base de datos adicionales. Las cifras mostradas en la captura son ficticias.',
      en: 'A personal application to track income, expenses and investments. It is a web app that reads from and writes to a Google Sheet, developed with AI and with no additional server or database. The figures shown in the screenshot are fictional.'
    },
    points: {
      es: ['Resumen del patrimonio por cuenta y su evolución mensual.',
           'Registro de movimientos, inversiones con plusvalías latentes, dividendos y estimación fiscal por tramos.',
           'Objetivos de ahorro con importe pendiente y aportación mensual recomendada.',
           'Registro de gastos desde Atajos de iPhone.'],
      en: ['Net worth by account and its monthly evolution.',
           'Transactions, investments with unrealised gains, dividends and bracket-based tax estimates.',
           'Savings goals with the remaining amount and recommended monthly contribution.',
           'Expense logging from iPhone Shortcuts.']
    },
    shots: [
      { src: 'assets/shots/patrimonio-1.webp', es: 'Resumen del patrimonio (datos ficticios)', en: 'Net worth overview (fictional data)' }
    ]
  },
  {
    id: 'naragram', name: 'Naragram', status: 'internal', when: '',
    stack: ['IA'],
    short: { es: 'De la reunión a la lista de tareas', en: 'From meetings to task lists' },
    tag:   { es: 'Herramienta para project managers', en: 'A tool for project managers' },
    body: {
      es: 'Aplicación para project managers que convierte una nota de voz, un vídeo de Loom o la transcripción de una reunión de Google Meet en una lista de tareas generada con IA, lista para enviarse a la herramienta de gestión del equipo. Se utilizó de forma interna y no llegó a comercializarse.',
      en: 'An application for project managers that turns a voice note, a Loom video or a Google Meet transcript into an AI-generated task list, ready to send to the team’s project management tool. It was used internally and was not commercialised.'
    },
    points: {
      es: ['Entrada: nota de voz, vídeo de Loom o transcripción de una reunión.',
           'Salida: tareas accionables exportadas a Trello, con integraciones con Jira y ClickUp planificadas.',
           'Espacios de trabajo compartidos por equipo.'],
      en: ['Input: a voice note, a Loom video or a meeting transcript.',
           'Output: actionable tasks exported to Trello, with Jira and ClickUp integrations planned.',
           'Shared team workspaces.']
    },
    shots: [
      { src: 'assets/shots/naragram-1.webp', es: 'Página principal de Naragram', en: 'Naragram home page' },
      { src: 'assets/shots/naragram-2.webp', es: 'Interior de la aplicación', en: 'Inside the application' }
    ]
  },
  {
    id: 'farmacia', name: { es: 'Turnos de farmacia', en: 'Pharmacy rota' }, status: 'client', when: '',
    stack: ['Lovable'],
    short: { es: 'Horarios y vacaciones de una farmacia', en: 'Shifts and leave for a pharmacy' },
    tag:   { es: 'Proyecto freelance', en: 'Freelance project' },
    body: {
      es: 'Herramienta a medida para planificar el calendario del personal de una farmacia. Se desarrolló porque ninguna solución del mercado contemplaba sus turnos alternos, semanas de descanso y cómputo de horas.',
      en: 'A custom tool to plan a pharmacy’s staff calendar, developed because no solution on the market supported its alternating shifts, rest weeks and hour tracking.'
    },
    points: {
      es: ['Automatización de las rotaciones semanales.', 'Seguimiento de vacaciones y horas por empleado.'],
      en: ['Automated weekly rotations.', 'Holiday and hour tracking per employee.']
    },
    shots: [
      { src: 'assets/shots/farmacia-1.webp', es: 'Calendario de turnos (datos ficticios)', en: 'Shift calendar (fictional data)' }
    ]
  },
  {
    id: 'chronoesfera', name: 'ChronoEsfera', status: 'closed', when: '2024',
    stack: ['Bubble.io'],
    short: { es: 'Marketplace de relojes de lujo', en: 'Luxury watch marketplace' },
    tag:   { es: 'Proyecto cerrado', en: 'Discontinued project' },
    body: {
      es: 'Marketplace entre particulares para la compraventa de relojes de lujo, diseñado y desarrollado desde cero. El proyecto se cerró por discrepancias entre los socios.',
      en: 'A peer-to-peer marketplace for buying and selling luxury watches, designed and built from scratch. The project was discontinued due to disagreements between the partners.'
    },
    points: {
      es: ['Autenticación, anuncios dinámicos y mensajería segura entre comprador y vendedor.', 'Pasarelas de pago integradas.'],
      en: ['Authentication, dynamic listings and secure buyer–seller messaging.', 'Integrated payment gateways.']
    },
    shots: [
      { src: 'assets/shots/chronoesfera-1.webp', es: 'Página principal de ChronoEsfera', en: 'ChronoEsfera home page' }
    ]
  },
  {
    id: 'tutores', name: { es: 'Tutores con IA', en: 'AI tutors' }, status: 'idea', when: '2023',
    stack: [],
    short: { es: 'Tutor personalizado para cada alumno', en: 'A personal tutor for every student' },
    tag:   { es: 'Proyecto planificado durante mi etapa en OneMint', en: 'Planned during my time at OneMint' },
    body: {
      es: 'Junto a mi responsable en OneMint planificamos una aplicación de tutores con IA que explicara a cada alumno los contenidos de su temario y generara ejercicios adaptados. Para que la IA trabajara únicamente con el material de cada alumno y centro educativo, mantuvimos conversaciones con editoriales sobre los derechos de uso de sus libros digitales como base de conocimiento.',
      en: 'Together with my manager at OneMint, I planned an AI tutoring application that would explain each student’s syllabus and generate tailored exercises. So that the AI would work only with each student’s and school’s own material, we held conversations with publishers about the rights to use their digital textbooks as the knowledge base.'
    },
    points: {
      es: ['El proyecto no llegó a formalizarse al incorporarnos ambos a puestos a tiempo completo.',
           'El principal aprendizaje del discovery: el reto no residía en la tecnología, sino en el acceso al contenido y sus derechos.'],
      en: ['The project was not formalised once we both took on full-time roles.',
           'The main discovery insight: the challenge lay not in the technology but in access to the content and its rights.']
    },
    shots: []
  }
];

const UI = {
  es: {
    'nav.work': 'Productos', 'nav.path': 'Trayectoria', 'nav.contact': 'Contacto',
    'hero.role': 'Martín Souto Parga · Product Manager',
    'hero.title': 'Defino productos y luego los construyo.',
    'hero.lede': 'Trabajo en producto desde 2022. Estos son los ocho productos que he desarrollado de forma independiente, entre ellos uno adquirido por una empresa estadounidense y otro en producción para una flota de 1.500 vehículos.',
    'idx.title': 'Ocho productos, de la idea a la venta.', 'hero.cta1': 'Ver cada producto', 'hero.cta2': 'Contacto',
    'p.visit': 'Visitar', 'p.built': 'Herramientas', 'p.noshot': 'Captura pendiente', 'p.enlarge': 'Ampliar captura',
    'path.title': 'Experiencia profesional',
    'path.chakor.role': 'Product Manager',
    'path.chakor.when': 'Ago 2024 – Oct 2026 · Ann Arbor, MI (remoto)',
    'path.chakor.body': 'Responsable del discovery con startups y grandes empresas, desde la idea del cliente hasta especificaciones, flujos UX y blueprints de integración. Lideré el programa de plugins para Bubble.io, que pasó de 21 a más de 350 plugins en seis meses, y diseñé para Casting Source un sistema de evaluación de audiciones con IA.',
    'path.onemint.role': 'Product Manager y Account Management',
    'path.onemint.when': 'Ene 2022 – Sep 2023 · Seattle, WA (remoto)',
    'path.onemint.body': 'Plataforma Web3. Configuración y control de calidad de las colecciones NFT del programa Odyssey de Starbucks y de OKX, propuestas de producto para distintos sectores y principal punto de contacto entre clientes y equipo interno.',
    'path.talk': 'En 2025 impartí una charla al profesorado del Colegio Compañía de María sobre el uso de la IA en el aula y su gestión por parte del alumnado.',
    'contact.title': 'Contacto',
    'contact.body': 'Busco equipos en los que el Product Manager participe también en la construcción del producto.',
    'foot': 'Desarrollado con Claude Code y publicado en Vercel.'
  },
  en: {
    'nav.work': 'Products', 'nav.path': 'Experience', 'nav.contact': 'Contact',
    'hero.role': 'Martín Souto Parga · Product Manager',
    'hero.title': 'I define products, then I build them.',
    'hero.lede': 'I have worked in product since 2022. These are the eight products I have developed independently, including one acquired by a US company and one in production for a 1,500-vehicle fleet.',
    'idx.title': 'Eight products, from idea to exit.', 'hero.cta1': 'See each product', 'hero.cta2': 'Contact',
    'p.visit': 'Visit', 'p.built': 'Tools', 'p.noshot': 'Screenshot pending', 'p.enlarge': 'Enlarge screenshot',
    'path.title': 'Professional experience',
    'path.chakor.role': 'Product Manager',
    'path.chakor.when': 'Aug 2024 – Oct 2026 · Ann Arbor, MI (remote)',
    'path.chakor.body': 'Led discovery with startups and large companies, from the client’s idea to specifications, UX flows and integration blueprints. Led the Bubble.io plugin programme, which grew from 21 to over 350 plugins in six months, and designed an AI audition-scoring system for Casting Source.',
    'path.onemint.role': 'Product Manager & Account Management',
    'path.onemint.when': 'Jan 2022 – Sep 2023 · Seattle, WA (remote)',
    'path.onemint.body': 'Web3 platform. Set-up and quality control of the NFT collections for Starbucks’ Odyssey programme and OKX, product proposals for several industries, and the main point of contact between clients and the internal team.',
    'path.talk': 'In 2025 I gave a talk to teachers at Colegio Compañía de María on the use of AI in the classroom and how to manage students’ use of it.',
    'contact.title': 'Contact',
    'contact.body': 'I am looking for teams where the Product Manager is also involved in building the product.',
    'foot': 'Developed with Claude Code and deployed on Vercel.'
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
