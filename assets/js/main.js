// Helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function toast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.querySelector('div').textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase() || 'YN';
}

// Renderers
function renderProfile() {
  const data = window.profileData || {};
  Object.keys(data).forEach(key => {
    const elements = $$(`[data-key="${key}"]`);
    elements.forEach(el => {
      if (el.tagName === 'INPUT') el.value = data[key];
      else el.textContent = data[key];
    });
  });

  // initials/photo
  const initialsEl = $('#sidebarInitials');
  const photoEl = $('#sidebarPhoto');
  if (initialsEl) initialsEl.textContent = getInitials(data.name || '');
  if (photoEl && data.profilePhoto) {
    photoEl.src = data.profilePhoto;
    photoEl.classList.remove('hidden');
    if (initialsEl) initialsEl.classList.add('hidden');
  }

  // links
  const linkIn = $('#linkLinkedIn');
  const linkGh = $('#linkGitHub');
  if (linkIn) linkIn.href = data.linkedin || '#';
  if (linkGh) linkGh.href = data.github || '#';
}

function renderSkills() {
  const skills = window.skills || {};
  Object.keys(skills).forEach(category => {
    const container = $(`#${category}Skills`);
    if (!container) return;
    container.innerHTML = skills[category].map(skill => `
      <div class="inline-block px-3 py-2 bg-gray-700 rounded-lg text-sm mr-2 mb-2">
        ${skill.name}
      </div>
    `).join('');
  });
}

function renderEducation() {
  const container = $('#educationList');
  if (!container) return;
  const education = window.education || [];

  container.innerHTML = education.map(edu => `
    <div class="bg-gray-800 rounded-lg p-6">
      <h3 class="text-xl font-semibold mb-1">${edu.degree}</h3>
      <p class="text-primary-400 font-medium mb-2">${edu.institution}</p>
      <p class="text-sm text-gray-400 mb-4">${edu.period}</p>
      <h4 class="text-sm font-semibold text-gray-300 mb-2">Coursework:</h4>
      <ul class="list-disc list-inside text-gray-300 text-sm space-y-1">
        ${edu.coursework.map(c => `${c}`).join(', ')}
      </ul>
    </div>
  `).join('');
}


function renderExperience() {
  const container = $('#experienceList');
  if (!container) return;
  const experience = window.experience || [];
  container.innerHTML = experience.map((exp, index) => `
    <div class="relative pl-8 ${index !== experience.length - 1 ? 'border-l-2 border-gray-700 pb-8' : ''}">
      <div class="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
      <div class="bg-gray-700 rounded-lg p-6">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 class="text-xl font-semibold">${exp.title}</h3>
          <span class="text-sm text-primary-400">${exp.period}</span>
        </div>
        <p class="text-primary-400 font-medium mb-3">${exp.company}</p>
        <p class="text-gray-300 mb-4">${exp.description}</p>
        <div class="flex flex-wrap gap-2">
          ${exp.technologies.map(tech => `<span class="px-2 py-1 bg-gray-600 text-xs rounded">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = $('#projectsGrid');
  if (!container) return;
  const projects = window.projects || [];
  container.innerHTML = projects.map(project => `
    <div class="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
      <div class="text-4xl mb-4">${project.image}</div>
      <h3 class="text-xl font-semibold mb-3">${project.title}</h3>
      <p class="text-gray-300 mb-4 leading-relaxed">${project.description}</p>
      <div class="flex flex-wrap gap-2">
        ${project.technologies.map(tech => `<span class="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm rounded-full">${tech}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = $('#certificationsGrid');
  if (!container) return;
  const certs = window.certifications || [];
  container.innerHTML = certs.map(cert => `
    <div class="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition">
      <div class="text-3xl mb-3">${cert.image}</div>
      <h3 class="font-semibold mb-2">${cert.title}</h3>
      <p class="text-sm text-gray-300 mb-1">${cert.issuer}</p>
      <p class="text-xs text-primary-400">${cert.year}</p>
    </div>
  `).join('');
}

// Events
function setupEventListeners() {
  // Photo upload
  const profileContainer = $('#profileContainer');
  const photoInput = $('#photoInput');
  if (profileContainer && photoInput) {
    profileContainer.addEventListener('click', () => photoInput.click());
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        window.profileData.profilePhoto = ev.target.result;
        renderProfile();
        toast('Profile photo updated!');
      };
      reader.readAsDataURL(file);
    });
  }

  // Customize modal (optional buttons guarded)
  const btnCustomize = $('#btnCustomize');
  const btnEdit = $('#btnEdit');
  const customizeModal = $('#customizeModal');

  if (btnCustomize && customizeModal) {
    btnCustomize.addEventListener('click', () => {
      Object.keys(window.profileData).forEach(key => {
        const input = document.querySelector(`#customizeForm [name="${key}"]`);
        if (input) input.value = window.profileData[key] || '';
      });
      customizeModal.classList.remove('hidden');
      customizeModal.classList.add('flex');
    });
  }

  $$('[data-close-modal]').forEach(el => {
    el.addEventListener('click', () => {
      if (!customizeModal) return;
      customizeModal.classList.add('hidden');
      customizeModal.classList.remove('flex');
    });
  });

  const customizeForm = $('#customizeForm');
  if (customizeForm && customizeModal) {
    customizeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      Object.keys(window.profileData).forEach(key => {
        const val = formData.get(key);
        if (val) window.profileData[key] = val;
      });
      renderProfile();
      customizeModal.classList.add('hidden');
      toast('Profile updated successfully!');
    });
  }

  // Download resume (prints page)
  const btnDownload = $('#btnDownload');
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
    //   window.print();
      toast('Opening print dialog...');
    });
  }

  // Smooth scrolling & active nav
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      $$('.nav-link').forEach(nav => nav.classList.remove('bg-primary-600'));
      link.classList.add('bg-primary-600');
    });
  });

  // Optional inline edit mode
  if (btnEdit) {
    let editMode = false;
    btnEdit.addEventListener('click', () => {
      editMode = !editMode;
      $$('[data-editable]').forEach(el => {
        el.contentEditable = editMode;
        el.classList.toggle('outline', editMode);
        el.classList.toggle('outline-primary-500', editMode);
        el.classList.toggle('bg-gray-700', editMode);
        el.classList.toggle('px-2', editMode);
        el.classList.toggle('py-1', editMode);
        el.classList.toggle('rounded', editMode);
      });
      btnEdit.textContent = editMode ? 'Save Changes' : 'Edit Mode';
      if (!editMode) {
        $$('[data-editable]').forEach(el => {
          const key = el.getAttribute('data-key');
          if (key) window.profileData[key] = el.textContent.trim();
        });
        toast('Changes saved!');
      } else {
        toast('Edit mode enabled - click any text to edit');
      }
    });
  }

  // Contact form
  // const contactForm = $('#contactForm');
  // const contactStatus = $('#contactStatus');
  // if (contactForm && contactStatus) {
  //   contactForm.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     contactStatus.textContent = 'Message sent! I\'ll get back to you soon.';
  //     contactStatus.className = 'text-center text-sm text-green-400';
  //     e.target.reset();
  //     toast('Message sent successfully!');
  //   });
  // }

  // Active section on scroll
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('bg-primary-600');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('bg-primary-600');
      }
    });
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderSkills();
  renderEducation();
  renderExperience();
  renderProjects();
  renderCertifications();
  setupEventListeners();
});
