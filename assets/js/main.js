/* =========================================================================
   Portfolio runtime — renders everything in assets/js/data.js into the page.
   ========================================================================= */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Escape text that comes from data and is injected as HTML.
   Experience/project highlights intentionally allow <strong>, so they are
   passed through untouched — everything else is escaped. */
function esc(str) {
  return String(str ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

function toast(message) {
  const el = $('#toast');
  if (!el) return;
  el.querySelector('div').textContent = message;
  el.classList.remove('hidden');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add('hidden'), 2800);
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (!parts[0]) return 'KS';
  return ((parts[0][0] || '') + (parts[parts.length - 1][0] || '')).toUpperCase();
}

const pills = (items = []) =>
  items.map(t => `<span class="pill">${esc(t)}</span>`).join('');

/* ----------------------------- Profile ---------------------------------- */
function renderProfile() {
  const data = window.profileData || {};

  Object.keys(data).forEach(key => {
    $$(`[data-key="${key}"]`).forEach(el => {
      if (el.tagName === 'INPUT') el.value = data[key];
      else el.textContent = data[key];
    });
  });

  const initialsEl = $('#sidebarInitials');
  const photoEl = $('#sidebarPhoto');
  if (initialsEl) initialsEl.textContent = getInitials(data.name || '');
  if (photoEl && data.profilePhoto) {
    photoEl.src = data.profilePhoto;
    photoEl.addEventListener('load', () => {
      photoEl.classList.remove('hidden');
      if (initialsEl) initialsEl.classList.add('hidden');
    });
  }

  const linkIn = $('#linkLinkedIn');
  const linkGh = $('#linkGitHub');
  if (linkIn) linkIn.href = data.linkedin || '#';
  if (linkGh) linkGh.href = data.github || '#';

  if (data.email) {
    $$('#linkEmail, #linkMail').forEach(el => { el.href = `mailto:${data.email}`; });
  }
  if (data.phone) {
    const tel = data.phone.replace(/[^\d+]/g, '');
    const p = $('#linkPhone');
    if (p) p.href = `tel:${tel}`;
  }

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
}

/* ------------------------------ Stats ----------------------------------- */
function renderStats() {
  const container = $('#statStrip');
  if (!container) return;
  container.innerHTML = (window.stats || []).map(s => `
    <div class="bg-ink-950 px-6 py-7 flex flex-col">
      <div class="font-display text-3xl lg:text-[2.3rem] gold-text leading-none mb-3">${esc(s.value)}</div>
      <div class="text-[0.88rem] text-gray-300 leading-snug mb-4">${esc(s.label)}</div>
      ${s.context ? `<div class="mt-auto pt-3 border-t border-ink-600 text-[0.6rem] font-mono tracking-[0.16em] uppercase text-gray-600">${esc(s.context)}</div>` : ''}
    </div>
  `).join('');
}

/* ------------------------------ Résumés --------------------------------- */
function renderResumes() {
  const container = $('#resumeLinks');
  if (!container) return;
  container.innerHTML = (window.resumes || []).map(r => `
    <a href="${r.file}" download="${esc(r.name)}" target="_blank" rel="noopener">${esc(r.label)}</a>
  `).join('');
}

/* ------------------------------- Skills --------------------------------- */
function renderSkills() {
  const container = $('#skillsGrid');
  if (!container) return;
  container.innerHTML = (window.skillGroups || []).map(group => `
    <div class="card card-lift p-6 reveal">
      <div class="flex items-center gap-3 mb-5">
        <span class="w-9 h-9 rounded-lg border border-ink-600 bg-white/[0.02] flex items-center justify-center text-primary-500 shrink-0">
          <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">${group.icon}</svg>
        </span>
        <h3 class="text-[0.95rem] font-medium tracking-wide text-gray-200">${esc(group.label)}</h3>
      </div>
      <div class="flex flex-wrap gap-2">${pills(group.items)}</div>
    </div>
  `).join('');
}

/* ----------------------------- Experience ------------------------------- */
function renderExperience() {
  const container = $('#experienceList');
  if (!container) return;

  container.innerHTML = (window.experience || []).map(exp => `
    <div class="timeline-item reveal">
      <span class="timeline-dot"></span>
      <div class="card p-7 lg:p-8">
        <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-1.5">
          <h3 class="font-display text-[1.45rem] leading-snug">${esc(exp.title)}</h3>
          <span class="font-mono text-[0.7rem] tracking-widest2 uppercase text-primary-400 whitespace-nowrap">${esc(exp.period)}</span>
        </div>

        <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-5 text-[0.9rem]">
          <span class="text-gray-200 font-medium">${esc(exp.company)}</span>
          <span class="text-ink-500">·</span>
          <span class="text-gray-500">${esc(exp.location)}</span>
        </div>

        ${exp.summary ? `<p class="text-gray-500 italic leading-relaxed mb-5 text-[0.95rem]">${esc(exp.summary)}</p>` : ''}

        <ul class="bullet-list space-y-2.5 text-[0.93rem] mb-6">
          ${(exp.highlights || []).map(h => `<li>${h}</li>`).join('')}
        </ul>

        <div class="flex flex-wrap gap-2 pt-5 border-t border-ink-600">${pills(exp.technologies)}</div>
      </div>
    </div>
  `).join('');
}

/* ------------------------------ Projects -------------------------------- */
function projectCard(project, featured) {
  return `
    <div class="card card-lift ${featured ? 'card-featured' : ''} p-6 flex flex-col reveal">
      <div class="flex items-start justify-between gap-4 mb-4">
        <span class="text-[1.75rem] leading-none">${project.image || ''}</span>
        <span class="font-mono text-[0.62rem] tracking-widest2 uppercase text-gray-500 text-right pt-1">${esc(project.period)}</span>
      </div>

      ${project.category ? `<span class="pill pill-gold self-start mb-3.5 text-[0.68rem]">${esc(project.category)}</span>` : ''}

      <h3 class="font-display text-[1.3rem] leading-snug mb-3">${esc(project.title)}</h3>
      <p class="text-[0.9rem] text-gray-500 leading-relaxed mb-4">${esc(project.description)}</p>

      <ul class="bullet-list space-y-2 text-[0.87rem] mb-6">
        ${(project.highlights || []).map(h => `<li>${h}</li>`).join('')}
      </ul>

      <div class="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-ink-600">
        ${(project.technologies || []).map(t => `<span class="pill text-[0.7rem] px-2.5 py-1">${esc(t)}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderProjects() {
  const projects = window.projects || [];
  const featured = $('#featuredProjects');
  const other = $('#otherProjects');
  if (featured) featured.innerHTML = projects.filter(p => p.featured).map(p => projectCard(p, true)).join('');
  if (other) other.innerHTML = projects.filter(p => !p.featured).map(p => projectCard(p, false)).join('');
}

/* ----------------------------- Education -------------------------------- */
function renderEducation() {
  const container = $('#educationList');
  if (!container) return;

  container.innerHTML = (window.education || []).map(edu => `
    <div class="card p-7 reveal">
      <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
        <h3 class="font-display text-[1.3rem] leading-snug">${esc(edu.degree)}</h3>
        <span class="font-mono text-[0.68rem] tracking-widest2 uppercase text-primary-400 whitespace-nowrap">${esc(edu.period)}</span>
      </div>

      <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-1 text-[0.9rem]">
        <span class="text-gray-200 font-medium">${esc(edu.institution)}</span>
        <span class="text-ink-500">·</span>
        <span class="text-gray-500">${esc(edu.location)}</span>
      </div>
      ${edu.detail ? `<p class="text-[0.85rem] gold-text mb-5">${esc(edu.detail)}</p>` : '<div class="mb-5"></div>'}

      <p class="eyebrow mb-3 !text-gray-500">Relevant coursework</p>
      <div class="flex flex-wrap gap-1.5">
        ${(edu.coursework || []).map(c => `<span class="pill text-[0.7rem] px-2.5 py-1">${esc(c)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --------------------------- Certifications ----------------------------- */
function renderCertifications() {
  const container = $('#certificationsGrid');
  if (!container) return;

  container.innerHTML = (window.certifications || []).map(cert => `
    <div class="card card-lift p-6 flex gap-4 reveal">
      <span class="text-2xl leading-none shrink-0">${cert.image || ''}</span>
      <div class="min-w-0">
        <span class="block font-mono text-[0.62rem] tracking-widest2 uppercase text-primary-500 mb-2">${esc(cert.type || 'Certification')}</span>
        <h3 class="text-[0.98rem] font-medium text-gray-100 leading-snug mb-2">${esc(cert.title)}</h3>
        <p class="text-[0.82rem] text-gray-500 leading-relaxed">${esc(cert.issuer)}</p>
        <p class="text-[0.75rem] text-gray-600 mt-1">${esc(cert.year)}</p>
      </div>
    </div>
  `).join('');
}

/* ------------------------- Scroll reveal effect ------------------------- */
function setupReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      const delay = Math.min(i, 5) * 70;
      setTimeout(() => entry.target.classList.add('is-visible'), delay);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  items.forEach(el => observer.observe(el));
}

/* --------------------------- Mobile navigation -------------------------- */
function setupMobileNav() {
  const sidebar = $('#sidebar');
  const backdrop = $('#navBackdrop');
  const toggle = $('#menuToggle');
  const iconOpen = $('#menuIconOpen');
  const iconClose = $('#menuIconClose');
  if (!sidebar || !toggle) return;

  const setOpen = (open) => {
    sidebar.classList.toggle('-translate-x-full', !open);
    backdrop?.classList.toggle('hidden', !open);
    iconOpen?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => setOpen(sidebar.classList.contains('-translate-x-full')));
  backdrop?.addEventListener('click', () => setOpen(false));
  $$('#sideNav a').forEach(a => a.addEventListener('click', () => {
    if (window.innerWidth < 1024) setOpen(false);
  }));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

/* ----------------------------- Résumé menu ------------------------------ */
function setupResumeMenu() {
  const btn = $('#btnResume');
  const menu = $('#resumeMenu');
  if (!btn || !menu) return;

  const close = () => { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!open));
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) { toast('Downloading résumé…'); close(); }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#resumeWrap')) close();
  });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ------------------------------ Scroll spy ------------------------------ */
function setupScrollSpy() {
  const links = $$('#sideNav .nav-link');
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;

  const activate = () => {
    const pos = window.scrollY + window.innerHeight * 0.28;
    let current = sections[0];
    sections.forEach(section => { if (section.offsetTop <= pos) current = section; });

    // Bottom of page always highlights the last section.
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
      current = sections[sections.length - 1];
    }

    links.forEach(link => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current.id}`);
    });
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { activate(); ticking = false; });
  }, { passive: true });

  activate();
}

/* --------------------------------- Init --------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderStats();
  renderResumes();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderCertifications();

  setupMobileNav();
  setupResumeMenu();
  setupScrollSpy();
  setupReveal();
});
